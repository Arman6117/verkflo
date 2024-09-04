"use client";
import { useQuery } from "convex/react";

import { Id } from "@/convex/_generated/dataModel";

import { api } from "@/convex/_generated/api";

interface ProjectDetailsProps {
  id: string;
}
const ProjectDetails = ({ id }: ProjectDetailsProps) => {
  const data = useQuery(api.project.get, { id: id as Id<"projects"> });
  return <div>{data?.name}</div>;
};

export default ProjectDetails;
