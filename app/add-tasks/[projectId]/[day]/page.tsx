import { Source_Code_Pro } from "next/font/google";
import { ScrollArea } from "@/components/ui/scroll-area";

import AddTaskModal from "../../_components/add-task-modal";

import TaskCardList from "../../_components/task-card-list";
import { Id } from "@/convex/_generated/dataModel";

const font = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "800", "900"],
});
interface AddTasksPageProps {
  params: {
    projectId: Id<'projects'>;
    day: string;
  };
}
const AddTaskPage = ({ params }: AddTasksPageProps) => {
  return (
    <div
      className={`w-full relative overflow-hidden text-center flex p-2  bg-gray-800/30 md:p-4 h-full rounded-lg md:border- border-neutral-50 shadow-xl space-y-6 ${font.className}`}
    >
      <div className="h-full w-full justify-center fle ">
        <AddTaskModal params={params} />
        <ScrollArea className=" absolute mt-2 h-full ">
          <TaskCardList  params={params} />
        </ScrollArea>
      </div>
    </div>
  );
};

export default AddTaskPage;
