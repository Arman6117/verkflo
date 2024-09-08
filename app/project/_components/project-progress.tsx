import React from "react";

const ProjectProgress = () => {
  return (
    <div className="flex flex-col items-center w-48 ml-5 gap-8">
      <div className="bg-gradient-to-t  from-green-500 to-transparent to-[10%]  rounded-full flex text-center justify-center items-center  border-2 border-green-500 size-36">
        <span className="text-3xl">0%</span>
      </div>
      <span className="text-xl font-semibold">Completed</span>
    </div>
  );
};

export default ProjectProgress;
