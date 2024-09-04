import React from "react";

const ProjectProgress = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-green-500 to-transparent to-[100%]  rounded-full flex text-center justify-center items-center  border-2 border-green-500 size-20">
        <span className="text-lg">0%</span>
      </div>
      <span className="text-sm font-semibold">Completed</span>
    </>
  );
};

export default ProjectProgress;
