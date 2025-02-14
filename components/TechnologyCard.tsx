import Image from "next/image";
import React from "react";
import ProgressSkills from "./ProgressSkills";

interface TechnologyCardProps {
  technology: string;
  icon: string
  percentage: number;
}

const TechnologyCard = ({
  technology,
  icon,
  percentage,
}: TechnologyCardProps) => {
  return (
    <div className="rounded-xl w-[350px] p-4 shadow-lg dark:shadow-[#060B0B]">
      <span className="block text-end">{percentage}%</span>
      <div className="flex items-center justify-start gap-2 my-4">
        <span>
          <Image
            src={icon}
            width={50}
            height={50}
            alt={technology}
          />
        </span>
        <span>{technology}</span>
      </div>
      <div>
      <ProgressSkills percentage={percentage}/>
      </div>
    </div>
  );
};

export default TechnologyCard;
