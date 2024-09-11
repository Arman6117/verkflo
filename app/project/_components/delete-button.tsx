import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { toast } from "sonner";


import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";

import { FaTrashCan } from "react-icons/fa6";
interface DeleteButtonProps {
    id:string
}
const DeleteButton = ({id}:DeleteButtonProps) => {
    const {mutate,pending} = useApiMutation(api.project.remove)
    const router = useRouter();
    const handleDelete = () => {
        mutate({ id })
          .then(() => {
            toast.success("Deleted Successfully")
            router.push('/dashboard')
          })
          .catch((err) => console.log(err));
      };
  return (
    <>
      <Button
        type="button"
        className=" hover:bg-destructive hover:text-white font-semibold flex justify-center items-center gap-2"
        onClick={handleDelete}
      >
        <FaTrashCan />
        <span className="hidden md:inline">Delete Project</span>
      </Button>
    </>
  );
};

export default DeleteButton;
