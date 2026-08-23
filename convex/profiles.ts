import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Returns the main user document for the authenticated identity.
 * Every profile lookup flows through the user's primary account, which is
 * created lazily by storeUser on first sign-in.
 */
async function requireUserId(ctx: any): Promise<any> {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    throw new Error("Unauthenticated: Firebase sign-in required.");
  }
  const user = await ctx.db
    .query("users")
    .withIndex("by_token", (q: any) =>
      q.eq("tokenIdentifier", identity.tokenIdentifier)
    )
    .unique();
  if (!user) throw new Error("No main account. Call users/storeUser first.");
  return user._id;
}

// ---------------------------------------------------------------- creators

export const getCreatorProfile = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;
    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();
    if (!user) return null;
    return await ctx.db
      .query("creatorProfiles")
      .withIndex("by_userId", (q) => q.eq("userId", user._id))
      .unique();
  },
});

export const createCreatorProfile = mutation({
  args: {
    creatorName: v.string(),
    username: v.string(),
    bio: v.optional(v.string()),
    categories: v.optional(v.array(v.string())),
    profileImage: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await requireUserId(ctx);

    // One creator profile per user — return the existing one instead of
    // creating a duplicate.
    const existing = await ctx.db
      .query("creatorProfiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (existing) return existing._id;

    const username = args.username.trim().toLowerCase().replace(/^@/, "");
    if (!/^[a-z0-9_.]{3,30}$/.test(username)) {
      throw new Error(
        "Username must be 3-30 chars: letters, numbers, dot or underscore."
      );
    }
    const taken = await ctx.db
      .query("creatorProfiles")
      .withIndex("by_username", (q) => q.eq("username", username))
      .unique();
    if (taken) throw new Error(`Username @${username} is already taken.`);

    return await ctx.db.insert("creatorProfiles", {
      userId,
      creatorName: args.creatorName.trim(),
      username,
      bio: args.bio?.trim() || undefined,
      profileImage: args.profileImage,
      categories: args.categories ?? [],
      verified: false,
      createdAt: Date.now(),
    });
  },
});

// ---------------------------------------------------------------- business

export const getBusinessProfiles = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return [];
    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();
    if (!user) return [];
    return await ctx.db
      .query("businessProfiles")
      .withIndex("by_ownerId", (q) => q.eq("ownerId", user._id))
      .collect();
  },
});

export const createBusinessProfile = mutation({
  args: {
    businessName: v.string(),
    businessUsername: v.string(),
    description: v.optional(v.string()),
    category: v.optional(v.string()),
    logo: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await requireUserId(ctx);

    const username = args.businessUsername.trim().toLowerCase().replace(/^@/, "");
    if (!/^[a-z0-9_.]{3,30}$/.test(username)) {
      throw new Error(
        "Username must be 3-30 chars: letters, numbers, dot or underscore."
      );
    }
    const taken = await ctx.db
      .query("businessProfiles")
      .withIndex("by_username", (q) => q.eq("businessUsername", username))
      .unique();
    if (taken) throw new Error(`Username @${username} is already taken.`);

    return await ctx.db.insert("businessProfiles", {
      ownerId: userId,
      businessName: args.businessName.trim(),
      businessUsername: username,
      description: args.description?.trim() || undefined,
      category: args.category?.trim() || undefined,
      logo: args.logo,
      verified: false,
      createdAt: Date.now(),
    });
  },
});
