import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Seed initial platform stats (idempotent).
export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    const defaults = [
      { key: "liveSessions", value: 1280 },
      { key: "members", value: 320000 },
      { key: "pointsEarnedToday", value: 2400000 },
    ];
    for (const d of defaults) {
      const existing = await ctx.db
        .query("stats")
        .withIndex("by_key", (q) => q.eq("key", d.key))
        .unique();
      if (!existing) {
        await ctx.db.insert("stats", { key: d.key, value: d.value });
      }
    }
  },
});

export const getStats = query({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("stats").collect();
    return all;
  },
});

export const bumpStat = mutation({
  args: { key: v.string(), by: v.number() },
  handler: async (ctx, { key, by }) => {
    const existing = await ctx.db
      .query("stats")
      .withIndex("by_key", (q) => q.eq("key", key))
      .unique();
    if (existing) {
      await ctx.db.patch(existing._id, { value: existing.value + by });
    } else {
      await ctx.db.insert("stats", { key, value: by });
    }
  },
});

export const getAnnouncements = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("announcements")
      .filter((q) => q.eq(q.field("active"), true))
      .collect();
  },
});

export const addAnnouncement = mutation({
  args: { message: v.string() },
  handler: async (ctx, { message }) => {
    await ctx.db.insert("announcements", {
      message,
      active: true,
      createdAt: Date.now(),
    });
  },
});
