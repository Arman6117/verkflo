import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: {
    authorId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    const userProjects =await ctx.db
      .query("projects")
      .withIndex("by_user", (q) => q.eq("authorId", identity.subject))
      .order("desc")
      .collect();

      const projects = userProjects.map((p)=> {return {...p}})

      return projects;
  },

  
});
