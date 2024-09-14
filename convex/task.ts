import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createTask = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    authorId: v.string(),
    projectId: v.id("projects"),
    subTasks: v.optional(
      v.object({
        title: v.string(),
        description: v.string(),
      })
    ),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    const values = {
      title: args.title,
      description: args.description,
      authorId: args.authorId,
      subTasks: args.subTasks,
      projectId: args.projectId,
    };
    const task = await ctx.db.insert("tasks", {
      ...values,
    });
    return task;
  },
});
