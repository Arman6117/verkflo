"use client";
import { useRouter } from "next/navigation";
import { useSession } from "@clerk/nextjs";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

import { GoProject } from "react-icons/go";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProjectDetails from "./project-details";

interface ProjectPageNavProps {
  id: string;
}
const ProjectPageNav = ({ id }: ProjectPageNavProps) => {
  const { session } = useSession();
  const router = useRouter();

  const allProjects = useQuery(api.projects.get, {
    authorId: session?.user.id!,
  });

  if (!allProjects) return null;
  const currentProject = allProjects?.find((project) => {
    return project._id === id ? project : null;
  });

  const onProjectChange = (value: string) => {
    const selectedProject = allProjects.find((project) => {
      return project.name === value;
    });

    if (selectedProject) {
      router.push(`/project/${selectedProject._id}`);
    }
  };

  return (
    <div className="flex justify-between ">
      <Select onValueChange={(name) => onProjectChange(name)}>
        <SelectTrigger className="w-[180px] hover:shadow-lg transition-all hover:scale-105 hover:shadow-slate-300/20 rounded-full border-white">
          <SelectValue placeholder={currentProject?.name} />
        </SelectTrigger>
        <SelectContent>
          {allProjects
            .filter((project) => project._id !== id)
            .map((project) => (
              <SelectItem
                key={project._id}
                value={project.name}
                onSelect={() => router.push(`/project/${project._id}`)}
              >
                {project.name}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
      <Sheet>
        <SheetTrigger>
          <div className="sm:w-[170px] hover:shadow-lg transition-all hover:scale-105 hover:shadow-slate-300/20 w-[120px] gap-3 flex items-center px-4 justify-between h-9 border-[0.5px] border-white rounded-full">
            <span className="text-xs sm:text-sm">
              <span className="hidden sm:inline">Project</span> Details
            </span>
            <GoProject />
          </div>
        </SheetTrigger>
        <SheetContent
          className="bg-neutral-950 flex flex-col items-ceter  justify-center border-none"
          side={"top"}
        >
          <SheetHeader className="mx-auto">
            <SheetTitle className="text-2xl ">Project Details</SheetTitle>
            <SheetDescription>Edit details about your project</SheetDescription>
          </SheetHeader>
          <ProjectDetails id={id} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ProjectPageNav;
