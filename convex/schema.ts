import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  stats: defineTable({
    key: v.string(),
    value: v.number(),
  }).index("by_key", ["key"]),

  announcements: defineTable({
    message: v.string(),
    active: v.boolean(),
    createdAt: v.number(),
  }),

  users: defineTable({
    tokenIdentifier: v.string(),
    email: v.string(),
    name: v.optional(v.string()),
    emailVerified: v.boolean(),
    role: v.string(),
    points: v.number(),
    isPro: v.boolean(),
    createdAt: v.number(),
  }).index("by_token", ["tokenIdentifier"]),
});
