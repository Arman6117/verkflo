import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: ContainerProps) => {
  return (
    <section
      className={clsx(
        "flex   h-52 bg-neutral-100/10 outline outline-neutral-100 rounded-md",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Container;
