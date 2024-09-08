"use client";
import React, { useState } from "react";

import LastUpdated from "../_components/last-updated";
import AllProjects from "../_components/all-projects";
import Navbar from "../_components/navbar";
import { useSession } from "@clerk/nextjs";

const DashboardPage = () => {
  const [activeTab, selectActiveTab] = useState("projects");
  const session = useSession();
  if(!session) return null;
  return (
    <React.Fragment>
      <Navbar activeTab={activeTab} selectActiveTab={selectActiveTab} />
      <div className="p-5">

      {activeTab === 'projects' && <AllProjects/>}
      {activeTab === 'last-updated' && <LastUpdated/>}
      </div>
    </React.Fragment>
  );
};

export default DashboardPage;
