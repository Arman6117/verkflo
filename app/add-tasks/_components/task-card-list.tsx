"use client";
import React from "react";
import TaskCard from "./task-card";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

interface TaskCardListProps {
  params: {
    projectId: Id<"projects">;
    day: string;
  };
}
const TaskCardList = ({ params }: TaskCardListProps) => {
  const data = useQuery(api.tasks.get, {
    dayNo: params.day,
    projectId: params.projectId,
  });
  if (!data) {
    return <div>No Tasks</div>;
  }
  return (
    <>
      <TaskCard />
      <TaskCard />
    </>
  );
};

export default TaskCardList;
