interface LabelProps {
  children: React.ReactNode;
}

const Label = ({ children }: LabelProps) => {
  return (
    <div className="px-3 w-36 shadow-md bg-gray-700  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100  py-1.5 rounded-md  ">
      <span className="font-medium text-neutral-50">{children}</span>
    </div>
  );
};

export default Label;
