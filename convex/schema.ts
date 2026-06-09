import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  appointments: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    treatment: v.string(),
    preferredDate: v.string(),
    preferredTime: v.string(),
    status: v.union(v.literal("pending"), v.literal("confirmed"), v.literal("cancelled")),
    message: v.optional(v.string()),
  }),
  
  services: defineTable({
    title: v.string(),
    slug: v.string(),
    description: v.string(),
    icon: v.string(),
    content: v.string(),
    image: v.string(),
  }).index("by_slug", ["slug"]),

  testimonials: defineTable({
    name: v.string(),
    rating: v.number(),
    text: v.string(),
    videoUrl: v.optional(v.string()),
    category: v.string(),
  }),

  faqs: defineTable({
    question: v.string(),
    answer: v.string(),
    category: v.string(),
  }),

  gallery: defineTable({
    category: v.string(), // "implants", "aligners", "smile-makeover", etc.
    beforeImage: v.string(),
    afterImage: v.string(),
    description: v.string(),
  }),

  // For the AI assistant context
  clinicInfo: defineTable({
    key: v.string(),
    value: v.string(),
  }).index("by_key", ["key"]),

  messages: defineTable({
    role: v.union(v.literal("user"), v.literal("assistant")),
    content: v.string(),
  }),
});
