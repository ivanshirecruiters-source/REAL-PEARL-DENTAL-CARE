import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    treatment: v.string(),
    preferredDate: v.string(),
    preferredTime: v.string(),
    message: v.optional(v.string()),
  },
  returns: v.id("appointments"),
  handler: async (ctx, args) => {
    return await ctx.db.insert("appointments", {
      ...args,
      status: "pending",
    });
  },
});

export const list = query({
  args: {},
  returns: v.array(v.object({
    _id: v.id("appointments"),
    _creationTime: v.number(),
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    treatment: v.string(),
    preferredDate: v.string(),
    preferredTime: v.string(),
    status: v.union(v.literal("pending"), v.literal("confirmed"), v.literal("cancelled")),
    message: v.optional(v.string()),
  })),
  handler: async (ctx) => {
    return await ctx.db.query("appointments").order("desc").collect();
  },
});
