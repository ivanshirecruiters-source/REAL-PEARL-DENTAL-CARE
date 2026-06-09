"use node";
import { v } from "convex/values";
import { action } from "./_generated/server";
import { internal } from "./_generated/api";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { generateText } from "ai";

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY || "missing-key",
});

export const chat = action({
  args: {
    message: v.string(),
  },
  returns: v.string(),
  handler: async (ctx, args): Promise<string> => {
    if (!process.env.OPENROUTER_API_KEY) {
      return "The AI assistant is currently in demo mode. Please configure your OpenRouter API key to enable full AI features.";
    }

    // Save user message
    await ctx.runMutation(internal.agentInternal.saveMessage, {
      role: "user",
      content: args.message,
    });

    // Get history
    const history: any[] = await ctx.runQuery(internal.agentInternal.getMessages);

    // Generate AI response
    try {
      const { text }: { text: string } = await generateText({
        model: openrouter("google/gemini-2.0-flash-001"),
        system: "You are the AI Dental Assistant for Real Pearl Dental Care, Ahmedabad. You are professional, luxury-focused, and helpful. You can provide info on Dental Implants, Clear Aligners, Smile Makeovers, Root Canal, Teeth Whitening, etc. Dr. Neetu Tanwani is the lead doctor with 18+ years experience. Always encourage booking an appointment at Real Pearl Dental Care. Address: Ahmedabad, India.",
        messages: history.map((m: any) => ({
          role: m.role,
          content: m.content,
        })),
      });

      // Save assistant response
      await ctx.runMutation(internal.agentInternal.saveMessage, {
        role: "assistant",
        content: text,
      });

      return text;
    } catch (error) {
      console.error(error);
      return "I'm sorry, I'm having trouble connecting right now. Please call us directly for any inquiries.";
    }
  },
});
