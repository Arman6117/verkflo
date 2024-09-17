import { v } from "convex/values";
import { query } from "./_generated/server";

export const get = query({
  args: {
    projectId: v.id("projects"),
    dayNo: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    const userTasks = await ctx.db
      .query("tasks")
      .withIndex("by_project", (q) => q.eq("projectId", args.projectId!))
      .order("asc")
      .collect();

    const tasks = userTasks.map((t) => {
      return { ...t };
    });
    return tasks;
  },
});
