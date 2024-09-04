import Link from "next/link";
import React from "react";

import { formatDistance } from "date-fns";
interface ProjectListProps {
  name: string;
  id: string;
  authorName: string;
  eDate: string;
  creationTime: number;
}
const ProjectList = ({
  name,
  id,
  authorName,
  creationTime,
  eDate,
}: ProjectListProps) => {
  const createdAt = formatDistance(new Date(), creationTime);
  return (
    <React.Fragment>
      <Link href={`/project/${id}`}>
        <div className="w-80 cursor-pointer group flex-col gap-2 items-center hover:items-start hover:py-6  px-7 py-16 rounded-md h-40 border-2 bg-neutral-100/10 hover:bg-neutral-50/20 transition-all delay-100 border-white flex  ">
          <h2 className="font-semibold text-lg">{name.toUpperCase()}</h2>
          <span className="text-sm text-neutral-400 opacity-0 group-hover:opacity-100 delay-300 transition-all">
            {authorName}
          </span>
          <span className="text-sm text-neutral-400 opacity-0 group-hover:opacity-100  delay-300  transition-all">
            Deadline: {eDate}
          </span>
          <span className="text-sm text-neutral-400 opacity-0 group-hover:opacity-100  delay-300 transition-opacity">
            {createdAt} ago
          </span>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default ProjectList;
