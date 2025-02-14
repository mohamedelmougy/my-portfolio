import React from "react";
import IconCloud3D from "./IconCloud3D";
import SectionHeader from "./SectionHeader";
import SectionSubHeader from "./SectionSubHeader";
import { Dumbbell } from "lucide-react";
import TechnologyCard from "./TechnologyCard";
import { cardTechnologyDetails } from "@/constants";

const TechnicalSkills = () => {
  return (
    <div className="container-section" id="skills">
      <div className="flex justify-between bg-white dark:bg-primary-black p-3 rounded-[32px] px-8 py-16">
        
        <div className="w-10/12 max-xl:w-full">
          <SectionSubHeader title="Technical Skills" icon={<Dumbbell />} />
          <SectionHeader title="Technologies" />
          <div className="flex gap-3 w-full flex-wrap mt-5 justify-center">
            {cardTechnologyDetails.map((item) => (
              <TechnologyCard
                key={item.technology}
                percentage={item.percentage}
                technology={item.technology}
                icon={item.icon}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center max-xl:hidden">
          <IconCloud3D />
        </div>
        
      </div>
    </div>
  );
};

export default TechnicalSkills;
