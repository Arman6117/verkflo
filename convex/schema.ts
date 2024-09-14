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
    projectId: v.id('projects'),
    subTasks: v.optional(
      
        v.object({
          title: v.string(),
          description: v.string(),
        })
      
    ),
  }),
  completedTasks:defineTable({
    projectId:v.id('projects'),
    authorId:v.string(),
    taskId:v.id('tasks'),
    media: v.optional(v.string()),
  }),
  
});
