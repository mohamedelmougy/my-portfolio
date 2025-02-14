import React from "react";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <h2 className="pb-2 text-4xl font-semibold tracking-tight first:mt-0">
      {title}
    </h2>
  );
};

export default SectionHeader;
