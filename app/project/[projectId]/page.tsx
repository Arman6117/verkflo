import Container from "@/components/container";
import React from "react";
import ProjectProgress from "../_components/project-progress";
import ProjectDetails from "../_components/project-details";
import ProjectPageNav from "../_components/project-page-nav";

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}
const ProjectPage = ({ params }: ProjectPageProps) => {
  return (
    <div className="px-8 py-6 w-screen">
      <div className="flex gap-7 ">
        <div className="border-b-[0.5px] border-r-[0.5px]  border-l-[0.5px] p-5 rounded-full   shadow-lg shadow-slate-300/20 border-white w-full  ">
          <ProjectPageNav id={params.projectId} />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
