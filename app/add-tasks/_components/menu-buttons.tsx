import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { FaCheckDouble, FaTrashCan } from "react-icons/fa6";
import { MdDoNotDisturbAlt } from "react-icons/md";

const MenuButtons = () => {
  return (
    <div className="flex ml-auto gap-5">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button  className="hover:bg-green-500 hover:text-white">
            <FaCheckDouble />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Complete</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button  className="hover:bg-red-500 hover:text-white">
            <FaTrashCan />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Delete</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button  className="hover:bg-red-500 hover:text-white">
            <MdDoNotDisturbAlt />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Stuck</TooltipContent>
      </Tooltip>
    </div>
  );
};

export default MenuButtons;
