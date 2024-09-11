import Container from "@/components/container";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const AddTaskPage = () => {
  return (
    <div className="w-full text-center flex  bg-gray-800/30 p-4 h-full rounded-lg border-2 border-neutral-50 shadow-xl space-y-6">
      <div className="h-full w-full justify-center fle ">
        {/* <div className="bg-gray-800/30 p-6 h-full rounded-lg border-2 border-neutral-50 shadow-xl space-y-6"> */}
          <h1 className="text-6xl font-bold text-white">Tasks</h1>
        {/* </div> */}
       

        <ScrollArea className="mt-14">
          <div className="w-full justify-center flex py-3">
            <div className="h-14 rounded-md transition-all bg-gray-800/40 hover:outline shadow shadow-indigo-500/20 outline-indigo-200 w-3/4">ddd</div>
          </div>
        </ScrollArea>
        
      </div>
    </div>
  );
};

export default AddTaskPage;
