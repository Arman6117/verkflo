import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
    name: v.string(),
    cEmail: v.string(),
    startDate: v.string(),
    endDate: v.string(),
    authorId: v.string(),
    authorName: v.string(),
  }).index("by_user", ["authorId"]),
  
  tasks: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    authorId: v.string(),
    projectId: v.string(),
    media: v.optional(v.string()),
    completed: v.boolean(),
    subTasks: v.optional(
      v.array(
        v.object({
          title: v.string(),
          description: v.string(),
        })
      )
    ),
  }),
});
