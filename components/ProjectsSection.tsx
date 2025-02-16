import React from "react";
import SectionSubHeader from "./SectionSubHeader";
import SectionHeader from "./SectionHeader";
import { Dumbbell } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projectsCategories } from "@/constants";

const ProjectsSection = () => {
  return (
    <div className="container-section" id="project">
      <div className="bg-white dark:bg-primary-black p-3 rounded-[32px] px-8 py-16">
        <SectionSubHeader title="Projects" icon={<Dumbbell />} />
        <SectionHeader title="Explore Portfolio By Technology" />
        <div className="">
          <div className="flex gap-4 mt-8 flex-wrap justify-center">
            <button className="py-2 px-4 bg-primary-green rounded-full dark:text-black">
              All
            </button>
            {projectsCategories.map((item) => (
              <button className="py-2 px-4 bg-primary-green rounded-full dark:text-black uppercase">
                {item.title}
              </button>
            ))}
          </div>

 
          <div className="flex flex-wrap items-center justify-center">
            {projectsCategories.map((item) => (
              <ProjectCard
                key={item.slug}
                imageURL={item.projects[0].image}
                title={item.projects[0].title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
