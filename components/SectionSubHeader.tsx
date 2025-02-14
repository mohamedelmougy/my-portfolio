import React from "react";

interface SubTitleProps {
  title: string;
  icon: React.ReactNode;
}

const SectionSubHeader = ({ title, icon }: SubTitleProps) => {
  return (
    <div className="inline-flex items-center space-x-2 rounded-full border mb-2">
      <span className="ml-3">{icon}</span>
      <h2 className="py-2 px-6">{title}</h2>
    </div>
  );
};

export default SectionSubHeader;
