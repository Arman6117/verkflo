"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
interface ProjectPageProps {
  params: {
    projectId: string;
  };
}
const DayCardList = ({ params }: ProjectPageProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex shadow-lg  bg-gradient-to-b from-blue-500 via-cy-500 to-green-500 p-1 h-[400px] from-[100%] transition-all to-[0%] rounded-lg w-64 bg-red-50">
        <div className="flex rounded-lg h-full w-full flex-col p-4 bg-gray-900 ">
          <h3 className="text-5xl tracking-wide font-semibold">Day 1</h3>
          <div className="flex justify-center items-center h-full w-full">
            <Link href={`/add-tasks/${params.projectId}/${"day-1"}`}>

            <Button className="font-semibold text-sm px-4 py-2">
              Add Tasks For Day 1
            </Button>
            </Link>
          </div>
          <Button>Completed</Button>
        </div>
      </div>
    </div>
  );
};

export default DayCardList;
