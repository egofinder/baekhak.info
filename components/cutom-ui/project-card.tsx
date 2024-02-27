import { Project } from "@/types/Project";
import Image from "next/image";
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, siteUrl, githubUrl, imageUrl, date } = project;
  return (
    <div className="flex min-h-fit flex-col items-center rounded-lg border border-gray-200 bg-white p-3 shadow md:flex-row">
      <Image
        width={500}
        height={500}
        className="rounded-xl object-cover p-1 md:h-auto md:w-48  "
        src={imageUrl}
        alt="test"
      />

      <div className="flex flex-col items-center justify-between p-4 leading-normal">
        <div className="flex flex-row gap-5">
          <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
          {githubUrl ? (
            <a href={githubUrl} target="_blank" rel="noreferrer noopener">
              <FaGithub size={30} />
            </a>
          ) : null}
          <a href={siteUrl} target="_blank" rel="noreferrer noopener">
            <LuExternalLink size={30} />
          </a>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};
