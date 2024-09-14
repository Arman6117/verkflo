
import ProjectPageNav from "../_components/project-page-nav";
import DayCardList from "../_components/day-card-list";

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}
const ProjectPage = ({ params }: ProjectPageProps) => {
  return (
    <div className="px-8 py-6 w-screen">
      <div className="  ">
        <div className="border-b-[0.5px] border-r-[0.5px]  border-l-[0.5px] p-5 rounded-full   shadow-lg shadow-slate-300/20 border-white w-full  ">
          <ProjectPageNav id={params.projectId} />
        </div>
        <div className="ml-5 mt-14">
          <DayCardList params={params}/>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
