"use client";
import { FormEventHandler, useEffect, useState } from "react";
import { useQuery } from "convex/react";

import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";

import DeleteButton from "./delete-button";
import ProjectProgress from "./project-progress";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";


import { toast } from "sonner";


interface ProjectDetailsProps {
  id: string;
}

const ProjectDetails = ({ id }: ProjectDetailsProps) => {
  const data = useQuery(api.project.get, { id: id as Id<"projects"> });

  const [name, setName] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [endDate, setEndDate] = useState("");

  const { mutate, pending } = useApiMutation(api.project.update);
  useEffect(() => {
    if (data) {
      setName(data.name || "");
      setCEmail(data.cEmail || "");
      setEndDate(data.endDate || "");
    }
  }, [data]);

  const handleSave: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    mutate({ id, name, cEmail, endDate })
      .then(() => {
        toast.success("Successfully updated");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex flex-col md:flex-row md:space-x-10 items-center justify-center py-6 px-4">
      <div className="md:w-1/3 w-full mb-6 md:mb-0">
        <ProjectProgress />
      </div>

      <div className="md:w-2/3 w-full bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 p-6 space-y-6">
        <form className="flex flex-col gap-6" onSubmit={handleSave}>
          <div className="flex flex-col space-y-2">
            <span className="text-xl font-semibold text-gray-200">
              Project Name
            </span>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-gray-700 font-medium text-lg py-2 px-3 rounded-md border border-gray-600 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <span className="text-xl font-semibold text-gray-200">
              Client Email
            </span>
            <Input
              value={cEmail}
              required
              type="email"
              onChange={(e) => setCEmail(e.target.value)}
              className="bg-gray-700 font-medium text-lg py-2 px-3 rounded-md border border-gray-600 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Deadline Input */}
          <div className="flex flex-col space-y-2">
            <span className="text-xl font-semibold text-gray-200">
              Deadline
            </span>
            <Input
              value={endDate}
              type="date"
              required
              onChange={(e) => setEndDate(e.target.value)}
              className="bg-gray-700 font-medium text-lg py-2 px-3 rounded-md border border-gray-600 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <SheetFooter>
            <div className="flex justify-end gap-6">
              <DeleteButton id={id} />
              <SheetClose>
                <Button
                  type="reset"
                  className="hover:bg-destructive hover:text-white font-semibold"
                >
                  Cancel
                </Button>
              </SheetClose>
              <Button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md transition-all duration-200 ease-in-out"
              >
                Save Changes
              </Button>
            </div>
          </SheetFooter>
        </form>
      </div>
    </div>
  );
};

export default ProjectDetails;
