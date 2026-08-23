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
    // Legacy field kept for existing rows; new accounts always "user".
    role: v.string(),
    // The account's nature. Every signup is a plain user; creator/business
    // capabilities live in the profile tables below, not here.
    accountType: v.optional(v.string()),
    points: v.number(),
    isPro: v.boolean(),
    createdAt: v.number(),
  }).index("by_token", ["tokenIdentifier"]),

  // Creator capability attached to a main user account. One per user.
  creatorProfiles: defineTable({
    userId: v.id("users"),
    creatorName: v.string(),
    username: v.string(),
    bio: v.optional(v.string()),
    profileImage: v.optional(v.string()),
    categories: v.array(v.string()),
    verified: v.boolean(),
    createdAt: v.number(),
  })
    .index("by_userId", ["userId"])
    .index("by_username", ["username"]),

  // Business capability attached to a main user account. A user may own
  // multiple businesses, so this table is indexed but not unique by owner.
  businessProfiles: defineTable({
    ownerId: v.id("users"),
    businessName: v.string(),
    businessUsername: v.string(),
    logo: v.optional(v.string()),
    description: v.optional(v.string()),
    category: v.optional(v.string()),
    verified: v.boolean(),
    createdAt: v.number(),
  })
    .index("by_ownerId", ["ownerId"])
    .index("by_username", ["businessUsername"]),
});
