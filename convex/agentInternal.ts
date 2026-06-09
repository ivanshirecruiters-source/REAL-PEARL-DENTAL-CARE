import { internalMutation, internalQuery } from "./_generated/server";
import { v } from "convex/values";

export const saveMessage = internalMutation({
  args: { role: v.union(v.literal("user"), v.literal("assistant")), content: v.string() },
  returns: v.null(),
  handler: async (ctx, args) => {
    await ctx.db.insert("messages", args);
    return null;
  },
});

export const getMessages = internalQuery({
  args: {},
  returns: v.array(v.object({
    role: v.union(v.literal("user"), v.literal("assistant")),
    content: v.string(),
  })),
  handler: async (ctx) => {
    const messages = await ctx.db.query("messages").order("asc").take(20);
    return messages.map(m => ({ role: m.role, content: m.content }));
  },
});
