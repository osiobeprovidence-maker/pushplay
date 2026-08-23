import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const storeUser = mutation({
  args: {
    email: v.string(),
    name: v.optional(v.string()),
    emailVerified: v.boolean(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated: Firebase sign-in required.");
    }

    const tokenIdentifier = identity.tokenIdentifier;
    const existing = await ctx.db
      .query("users")
      .withIndex("by_token", (q) => q.eq("tokenIdentifier", tokenIdentifier))
      .unique();

    const now = Date.now();

    if (existing) {
      await ctx.db.patch(existing._id, {
        email: args.email,
        name: args.name ?? existing.name,
        emailVerified: args.emailVerified,
        // Every main account is a plain user; capabilities are separate
        // profile rows (see profiles.ts).
        accountType: "user",
      });
      return existing._id;
    }

    return await ctx.db.insert("users", {
      tokenIdentifier,
      email: args.email,
      name: args.name,
      emailVerified: args.emailVerified,
      role: "user",
      accountType: "user",
      points: 0,
      isPro: false,
      createdAt: now,
    });
  },
});

export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;

    return await ctx.db
      .query("users")
      .withIndex("by_token", (q) => q.eq("tokenIdentifier", identity.tokenIdentifier))
      .unique();
  },
});

// Called from the onboarding screen: stores what the user signed up for.
export const setUserRole = mutation({
  args: { role: v.string() },
  handler: async (ctx, args) => {
    const allowed = ["user", "creator", "business", "admin"];
    if (!allowed.includes(args.role)) {
      throw new Error(`Invalid role: ${args.role}`);
    }

    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated: Firebase sign-in required.");
    }

    const existing = await ctx.db
      .query("users")
      .withIndex("by_token", (q) => q.eq("tokenIdentifier", identity.tokenIdentifier))
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, { role: args.role });
      return existing._id;
    }

    return await ctx.db.insert("users", {
      tokenIdentifier: identity.tokenIdentifier,
      email: identity.email ?? "",
      name: identity.name ?? undefined,
      emailVerified: !!identity.emailVerified,
      role: args.role,
      points: 0,
      isPro: false,
      createdAt: Date.now(),
    });
  },
});
