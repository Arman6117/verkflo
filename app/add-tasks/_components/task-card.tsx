import React from "react";
import MenuButtons from "./menu-buttons";
import { Id } from "@/convex/_generated/dataModel";

interface TaskCardProps {
  taskId: Id<"tasks">;
  title: string;
  description?: string;
  subtaskTitle?: string;
  subtaskDescription?: string;
}
const TaskCard = () => {
  return (
    <div className="mt-14 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 max-w-2xl md:w-3/4 bg-gray-800/50 border-2 shadow shadow-blue-100/10 rounded-sm h-auto p-4 border-blue-800">
        <div className="px-3 py-1 w-full text-start border-2 border-gray-600 shadow-md rounded-md bg-gray-700 ">
          <span className="font-bold text-muted-foreground text-base">
            Title:{" "}
          </span>
          <span className="font-medium ">Something</span>
        </div>
        <div className="px-3 py-1 w-full flex flex-col text-start border-2 border-gray-600 shadow-md rounded-md bg-gray-700 ">
          <span className="font-bold text-muted-foreground text-base">
            Description:{" "}
          </span>
          <span className="font-medium ml-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            dolore? Sapiente dignissimos ea tenetur eaque, veritatis, esse
            consequatur, velit cupiditate qui magnam eveniet. Rem quo ad totam
            quaerat, labore cumque.
          </span>
        </div>

        <MenuButtons />
      </div>
    </div>
  );
};

export default TaskCard;
