import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    projects: defineTable({
        name:v.string(),
        cEmail:v.string(),
        startDate:v.string(),
        endDate:v.string(),
        authorId:v.string(),
        authorName:v.string()
    }).index('by_user', ['authorId'])
})