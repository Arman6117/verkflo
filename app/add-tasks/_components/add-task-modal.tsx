"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useUser } from "@clerk/nextjs";
import { FormEventHandler, useState } from "react";

import { BiPlusCircle } from "react-icons/bi";
import { toast } from "sonner";

interface AddTaskModalProps {
  params: {
    projectId: string;
    day: string;
  };
}
const AddTaskModal = ({ params }: AddTaskModalProps) => {
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subtaskTitle, setSubtaskTitle] = useState("");
  const [subtaskDescription, setSubtaskDescription] = useState("");

  const { user } = useUser();
  const { mutate, pending } = useApiMutation(api.task.createTask);

  if (!user) return null;

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutate({
      title,
      description,
      subTasks: { subtaskTitle, subtaskDescription },
      projectId: params.projectId,
      dayNo: params.day,
      authorId: user.id,
    })
      .then(() => {
        toast.success("Successfully created");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed");
      })
      .finally(() => setOpen(false));
  };
  return (
    <>
      <Dialog onOpenChange={setOpen} open={open}>
        <div className="w-full justify-center flex py-3">
          <DialogTrigger className="h-14 group rounded-md transition-all bg-gray-800/40 hover:outline shadow shadow-indigo-500/20 items-center justify-center flex outline-indigo-200 w-4/5 md:w-3/4">
            <BiPlusCircle className="h-8 w-8 text-slate-300 group-hover:text-white" />
          </DialogTrigger>
          <DialogContent className="md:absolute xl:left-[55%]  md:left-[60%]">
            <DialogHeader>
              <DialogTitle>Add a New Task</DialogTitle>
              <DialogDescription>
                Create a task for Day 1 that you&apos;d like to accomplish
              </DialogDescription>
            </DialogHeader>
            <form className="flex flex-col mt-7 gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <span className="font-medium">Title</span>
                <Input
                  placeholder="Doing something"
                  type="text"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-medium">Description (Optional)</span>
                <Input
                  placeholder="Doing something like this"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-medium">Subtask Title (Optional)</span>
                <Input
                  placeholder="Doing something to do something"
                  onChange={(e) => setSubtaskTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-medium">
                  Subtask Description (Optional)
                </span>
                <Input
                  placeholder="Doing something to do something like this"
                  onChange={(e) => setSubtaskDescription(e.target.value)}
                />
              </div>
              <DialogFooter>
                <DialogClose className="flex gap-5">
                  <Button
                    disabled={pending}
                    className="hover:bg-destructive transition-all"
                    variant={"ghost"}
                    type="reset"
                  >
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  disabled={pending}
                  type="submit"
                  className="hover:bg-indigo-500 hover:text-white transition-all"
                >
                  Add
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
};

export default AddTaskModal;
