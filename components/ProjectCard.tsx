import { Globe } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  imageURL: string;
  title: string;
}

const ProjectCard = ({ imageURL, title }: ProjectCardProps) => {
  return (
    <div className="p-3 mt-3 max-w-[400px] h-fit shadow-lg dark:shadow-[#060B0B] rounded-[32px]">
      <div className="max-w-[400px] h-[300px] overflow-hidden rounded-[32px]">
        <Image
          className="rounded-[32px]"
          src={imageURL}
          width={500}
          height={500}
          alt={title}
        />
      </div>

      <h3 className="m-2 p-1 truncate">{title}</h3>

      <div className="m-2 p-1 flex flex-wrap gap-4 justify-center sm:justify-start items-center">
        <div className="flex gap-2 items-center">
          <Globe width={20} height={20} />
          <span>Preview</span>
        </div>

        <div className="flex gap-2 items-center">
          <Image
            className="dark:invert"
            src="/assets/icons/github.svg"
            width={20}
            height={20}
            alt=""
          />
          <span>Code</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
