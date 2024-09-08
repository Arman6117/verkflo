"use client";
import { useEffect, useState } from "react";
import { useQuery } from "convex/react";

import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import ProjectProgress from "./project-progress";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";
import { useApiMutation } from "@/hooks/use-api-mutation";

interface ProjectDetailsProps {
  id: string;
}

const ProjectDetails = ({ id }: ProjectDetailsProps) => {
  const data = useQuery(api.project.get, { id: id as Id<"projects"> });

  const [newTitle, setNewTitle] = useState("");
  const [newClientEmail, setNewClientEmail] = useState("");
  const [newDeadline, setNewDeadline] = useState("");

  useEffect(() => {
    if (data) {
      setNewTitle(data.name || "");
      setNewClientEmail(data.cEmail || "");
      setNewDeadline(data.endDate || "");
    }
  }, [data]);

  const handleSave = () => {
    // await useApiMutation()
  }
  return (
    <div className="flex flex-col md:flex-row md:space-x-10 items-center justify-center py-6 px-4">
      <div className="md:w-1/3 w-full mb-6 md:mb-0">
        <ProjectProgress />
      </div>

      <div className="md:w-2/3 w-full bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 p-6 space-y-6">
        <div className="flex flex-col space-y-2">
          <span className="text-xl font-semibold text-gray-200">
            Project Name
          </span>
          <Input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="bg-gray-700 font-medium text-lg py-2 px-3 rounded-md border border-gray-600 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <span className="text-xl font-semibold text-gray-200">
            Client Email
          </span>
          <Input
            value={newClientEmail}
            onChange={(e) => setNewClientEmail(e.target.value)}
            className="bg-gray-700 font-medium text-lg py-2 px-3 rounded-md border border-gray-600 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Deadline Input */}
        <div className="flex flex-col space-y-2">
          <span className="text-xl font-semibold text-gray-200">Deadline</span>
          <Input
            value={newDeadline}
            type="date"
            onChange={(e) => setNewDeadline(e.target.value)}
            className="bg-gray-700 font-medium text-lg py-2 px-3 rounded-md border border-gray-600 focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <SheetFooter>
            <div className="flex justify-end gap-6">
          <SheetClose>
              <Button className="hover:bg-destructive hover:text-white font-semibold">
                Cancel
              </Button>
              </SheetClose>
              <Button
                // onClick={handleSave}

                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md transition-all duration-200 ease-in-out"
              >
                Save Changes
              </Button>
            </div>
        </SheetFooter>
      </div>
    </div>
  );
};

export default ProjectDetails;
