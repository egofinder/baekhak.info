import { ProjectCard } from "@/components/cutom-ui/project-card";
import { Project } from "@/types/Project";

interface ContentProps {
  projects: Project[];
}

const Content = (projects: ContentProps) => {
  return (
    <div className="flex flex-1 flex-col gap-8">
      {projects.projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Content;
