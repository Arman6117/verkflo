import React from "react";

import clsx from "clsx";

import { UserButton, useUser } from "@clerk/nextjs";

import Logo from "@/components/logo";

interface NavbarProps {
  activeTab: string;
  selectActiveTab: (tab: string) => void;
}
const Navbar = ({ activeTab, selectActiveTab }: NavbarProps) => {
  const { user } = useUser();

  if (!user) return null;
  return (
    <div className=" bg-[rgb(24,24,24)] px-6 pt-5 pb-2  flex justify-between items-center">
      <div className="flex gap-7 justify-center">
        <div className="flex gap-8">
          {/* <Logo /> */}
          <span className="font-medium sm:text-base text-sm">
            <span className="sm:visible hidden">Welcome</span> 👋 {user?.firstName}
          </span>
        </div>
        <div className="flex gap-7 ml-2 sm:ml-10 ">
          <div
            className={clsx(
              "transition-all sm:text-base text-sm cursor-pointer",
              activeTab === "projects"
                ? "border-b-4 border-white rounded-sm font-semibold"
                : "hover:border-b-2 font-normal border-white hover:font-medium"
            )}
            onClick={() => selectActiveTab("projects")}
          >
            <span>Projects</span>
          </div>
          <div
            className={clsx(
              "transition-all sm:text-base text-sm cursor-pointer",
              activeTab === "last-updated"
                ? "border-b-4 border-white rounded-sm font-semibold"
                : "hover:border-b-2 font-normal border-white hover:font-medium"
            )}
            onClick={() => selectActiveTab("last-updated")}
          >
            <span>Last Updated</span>
          </div>
        </div>
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
