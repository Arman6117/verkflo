import React from "react";
import CreateProjectButton from "./create-project-button";
import ProjectList from "./project-list";
import { useSession } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const AllProjects = () => {
  const { session } = useSession();

  const data = useQuery(api.projects.get, { authorId: session?.user.id! });
  return (
    <div className="flex flex-wrap overflow-hidden gap-7 sm:justify-normal justify-center">
      <CreateProjectButton />
      {data &&
        data.map((data) => (
          <React.Fragment key={data._id}>
            <ProjectList
              name={data.name}
              id={data._id}
              authorName={data.authorName}
              eDate={data.endDate}
              creationTime={data._creationTime}
            />
          </React.Fragment>
        ))}
    </div>
  );
};

export default AllProjects;
