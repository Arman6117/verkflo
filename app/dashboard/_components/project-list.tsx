"use client";
import { api } from "@/convex/_generated/api";
import { useSession, useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import Link from "next/link";
import React from "react";

interface ProjectListProps {
    name:string}
const ProjectList = ({name}:ProjectListProps) => {
 
  return (
    <Link href={"/"}>
      <div className="w-80 cursor-pointer  px-2 py-16 rounded-md h-40 border-2 bg-neutral-100/10 hover:bg-neutral-50/20 transition-colors border-white flex justify-center items-center">
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default ProjectList;
