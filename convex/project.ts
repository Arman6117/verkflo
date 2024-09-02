import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createProject = mutation({
  args: {
    name: v.string(),
    cEmail: v.string(),
    startDate: v.string(),
    endDate: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    const project = await ctx.db.insert("projects", {
      authorId: identity.subject,
      authorName: identity.name!,
      name: args.name,
      cEmail: args.cEmail,
      startDate: args.startDate,
      endDate: args.endDate,
    });

    return project;
  },
});

export const get = query({
  args: { id: v.id("projects") },
  handler: async (ctx, args) => {
    const project = await ctx.db.get(args.id);
    return project;
  },
});
