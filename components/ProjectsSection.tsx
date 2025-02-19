"use client";
import React, { useState } from "react";
import SectionSubHeader from "./SectionSubHeader";
import SectionHeader from "./SectionHeader";
import { Dumbbell } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projectsDetails } from "@/constants";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  const [itemsData, setItemsData] = useState(projectsDetails);
  const [selectedTech, setSelectedTech] = useState("All");

  const allTech = projectsDetails.flatMap((item) => item.tech);
  const removeDuplicatedName = ["All", ...new Set(allTech)];

  const filterByTech = (tech: string) => {
    if (tech === "All") {
      setItemsData(projectsDetails);
    } else {
      const newArr = projectsDetails.filter((project) =>
        project.tech.includes(tech)
      );
      setItemsData(newArr);
    }
  };
  const handleClick = (tech: string) => {
    setSelectedTech(tech);
    filterByTech(tech);
  };

  return (
    <div className="container-section" id="project">
      <div className="bg-white dark:bg-primary-black p-3 rounded-[32px] px-8 py-16">
        <SectionSubHeader title="Projects" icon={<Dumbbell />} />
        <SectionHeader title="Explore Portfolio By Technology" />
        <div className="">
          <div className="flex gap-4 mt-8 flex-wrap justify-center">
            {removeDuplicatedName.map((tech) => {
              const isActive = tech === selectedTech;
              return (
                <button
                  key={tech}
                  className={cn(
                    "py-2 px-4 border-2 border-primary-green rounded-full dark:text-black dark:text-white uppercase",
                    { "bg-primary-green": isActive }
                  )}
                  onClick={() => handleClick(tech)}
                >
                  {tech}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3 items-center justify-center">
            {itemsData.map((item) => (
              <ProjectCard
                key={item.title}
                imageURL={item.image}
                title={item.title}
                githubLink={item.github}
                previewLink={item.previewLink}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
