import React from "react";

interface ProjectPageLayoutProps {
  children: React.ReactNode;
}
const ProjectPageLayout = ({ children }: ProjectPageLayoutProps) => {
  return (
    <div className="h-screen bg-gradient-to-b from-neutral-900 to-slate-950">
      {children}
    </div>
  );
};

export default ProjectPageLayout;
