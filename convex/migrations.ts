import { internalMutation } from "./_generated/server";

/**
 * One-off (idempotent â€” safe to run repeatedly) migration:
 *  1. Backfills accountType:"user" on every main user document missing it.
 *  2. Preserves legacy role-based status: any user with role "creator" or
 *     "business" gets a corresponding profile row so their capability is
 *     kept under the new architecture without data loss.
 */
export const backfillProfiles = internalMutation({
  args: {},
  handler: async (ctx) => {
    let usersTouched = 0;
    let creatorsCreated = 0;
    let businessesCreated = 0;

    const users = await ctx.db.query("users").collect();

    for (const user of users) {
      // 1. accountType default
      if (!user.accountType) {
        await ctx.db.patch(user._id, { accountType: "user" });
        usersTouched++;
      }

      // 2. legacy creator -> creatorProfile
      if (user.role === "creator") {
        const existing = await ctx.db
          .query("creatorProfiles")
          .withIndex("by_userId", (q) => q.eq("userId", user._id))
          .unique();
        if (!existing) {
          const base = (user.name ?? user.email.split("@")[0])
            .toLowerCase()
            .replace(/[^a-z0-9_.]/g, "")
            .slice(0, 24);
          const username =
            base.length >= 3 ? base : `user${user._id.slice(-8).toLowerCase()}`;
          await ctx.db.insert("creatorProfiles", {
            userId: user._id,
            creatorName: user.name ?? user.email.split("@")[0],
            username,
            categories: [],
            verified: false,
            createdAt: Date.now(),
          });
          creatorsCreated++;
        }
      }

      // 3. legacy business -> businessProfile
      if (user.role === "business") {
        const existing = await ctx.db
          .query("businessProfiles")
          .withIndex("by_ownerId", (q) => q.eq("ownerId", user._id))
          .collect();
        if (existing.length === 0) {
          const base = (user.name ?? user.email.split("@")[0])
            .toLowerCase()
            .replace(/[^a-z0-9_.]/g, "")
            .slice(0, 24);
          const username =
            base.length >= 3 ? base : `biz${user._id.slice(-8).toLowerCase()}`;
          await ctx.db.insert("businessProfiles", {
            ownerId: user._id,
            businessName: user.name ?? user.email.split("@")[0],
            businessUsername: username,
            verified: false,
            createdAt: Date.now(),
          });
          businessesCreated++;
        }
      }
    }

    return { usersTouched, creatorsCreated, businessesCreated };
  },
});

