import React from "react";

interface ProjectPageLayoutProps {
  children: React.ReactNode;
}
const ProjectPageLayout = ({ children }: ProjectPageLayoutProps) => {
  return (
    <div className="h-screen bg-gradient-to-b from-neutral-950 via-slate-950 to-slate-900">
      {children}
    </div>
  );
};

export default ProjectPageLayout;
