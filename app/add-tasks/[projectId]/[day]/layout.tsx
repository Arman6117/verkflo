import AddTaskPageNav from "../../_components/add-task-page-nav";

interface AddTasksPageLayoutProps {
  children: React.ReactNode;
}
const AddTasksPageLayout = ({ children }: AddTasksPageLayoutProps) => {
  return (
    <main className=" h-screen w-screen  bg-gradient-to-b from-neutral-950 via-slate-950 flex gap-6 to-slate-900 p-5">
       <AddTaskPageNav/>
      {children}
    </main>
  );
};

export default AddTasksPageLayout;
