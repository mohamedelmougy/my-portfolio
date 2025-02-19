import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  imageURL: string;
  title: string;
  githubLink: string;
  previewLink: string;
}

const ProjectCard = ({ imageURL, title, githubLink, previewLink }: ProjectCardProps) => {
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

      <div className="m-2 p-1 flex flex-wrap gap-4 justify-center sm:justify-start items-center ">

      <Link href={previewLink} className="flex gap-2 items-center cursor-pointer group" target="_blank">
          <Globe width={20} height={20} />
          <span className="group-hover:underline">Preview</span>
        </Link>

        <Link href={githubLink} className="flex gap-2 items-center cursor-pointer group" target="_blank">
            <Image
              className="dark:invert"
              src="/assets/icons/github.svg"
              width={20}
              height={20}
              alt=""
            />
            <span className="group-hover:underline">Code</span>
        </Link>

      </div>
    </div>
  );
};

export default ProjectCard;
