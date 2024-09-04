"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/convex/_generated/api";

import { useApiMutation } from "@/hooks/use-api-mutation";

import { BiPlus } from "react-icons/bi";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CreateProjectButton = () => {
  const [projectName, setProjectName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const router  = useRouter();

  function resetForm() {
    setProjectName("");
    setClientEmail("");
    setStartDate("");
    setEndDate("");
  }
  const { mutate, pending } = useApiMutation(api.project.createProject);

  const onClick = () => {
    if (startDate > endDate) {
      resetForm();
      return console.log("Start date can not be smaller than end date");
    }
    mutate({
      name: projectName,
      cEmail: clientEmail,
      startDate: startDate.toString(),
      endDate: endDate.toString(),
    })
      .then((id) => {
        console.log("Project created id: ", id);
        resetForm();
        router.push(`/project/${id}`)
      })
      .catch((err) => {
        resetForm();
        console.log("Error:: ", err);
      });
  };
  return (
    <div className="w-80 cursor-pointer  px-2 py-16 rounded-md h-40 border-2 bg-neutral-50/20 border-dashed border-white flex justify-center items-center">
      <div className="flex flex-col items-center gap-3 justify-center">
        <Dialog>
          <DialogTrigger className="flex flex-col items-center ">
            <BiPlus className="h-10 w-10" />
            <span className="text-sm">Create a new Project</span>
          </DialogTrigger>
          <form className="flex flex-col gap-3">
            <DialogContent>
              <DialogTitle>Let&apos;s Create Your Project</DialogTitle>
              <div className="flex mt-5 flex-col gap-5">
                <label>Project Name</label>
                <Input
                  placeholder="Enter Your Project Name"
                  value={projectName}
                  name="project name"
                  required
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <div className="flex mt-5 flex-col gap-5">
                <label>Client&apos;s Email (optional)</label>
                <Input
                  placeholder="example@ex.com"
                  value={clientEmail}
                  type="email"
                  name="email"
                  onChange={(e) => setClientEmail(e.target.value)}
                />
              </div>
              <div className="flex mt-5 flex-col gap-5">
                <label>Start Date</label>
                <Input
                  value={startDate}
                  name="start date"
                  type="date"
                  required
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="flex mt-5 flex-col gap-5">
                <label>End Date</label>
                <Input
                  value={endDate}
                  name="end date"
                  type="date"
                  required
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <DialogFooter>
                <div className="flex gap-7">
                  <DialogClose className="flex gap-3" >
                    <Button variant={"ghost"}>Cancel</Button>
                    <Button type="submit" onClick={onClick}>
                      Save
                    </Button>
                  </DialogClose>
                </div>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
    </div>
  );
};

export default CreateProjectButton;
