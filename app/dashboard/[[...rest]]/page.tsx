"use client";
import React, { useState } from "react";
import Navbar from "../_components/navbar";
import AllProjects from "../_components/all-projects";
import LastUpdated from "../_components/last-updated";

const DashboardPage = () => {
  const [activeTab, selectActiveTab] = useState("projects");
  return (
    <React.Fragment>
      <Navbar activeTab={activeTab} selectActiveTab={selectActiveTab} />
      {activeTab === 'projects' && <AllProjects/>}
      {activeTab === 'last-updated' && <LastUpdated/>}
    </React.Fragment>
  );
};

export default DashboardPage;
