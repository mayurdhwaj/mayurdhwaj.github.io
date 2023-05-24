import { ProjectCard } from "../components/ProjectCard";
import data from "../data/projects.json";
import { useEffect, useState } from "react";
import { FilterButton } from "../components/FilterButton";

type projects = {
  title: string;
  desc: string;
  date: string;
  gallery: string | undefined;
  code: string | undefined;
  live: string | undefined;
  tags: string[];
}[];

const tags = ["all", "automation", "full stack", "system", "web 3"];

export const Projects = () => {
  const [tag, setTag] = useState<string>("all");
  const [projects, setProjects] = useState<projects>(data);

  useEffect(() => {
    setProjects(
      data.filter((project) => {
        return project.tags.includes(tag);
      })
    );
  }, [tag]);

  return (
    <section
      id="projects"
      className="flex flex-col items-center h-screen px-8 py-24 overflow-scroll snap-start snap-always add-bg md:px-32 lg:py-32"
    >
      <div className="flex flex-col items-center justify-center max-w-xl">
        <p className="mb-6 text-3xl font-bold md:text-4xl">Projects</p>
        <FilterButton selectedTag={tag} tags={tags} setTag={setTag} />
        <div className="flex w-full">
          <div className="mr-4 border border-gray-400 border-2-2"></div>
          <div className="w-full">
            {projects.map((project, id) => {
              return (
                <ProjectCard
                  key={id}
                  title={project.title}
                  desc={project.desc}
                  date={project.date}
                  code={project.code}
                  gallery={project.gallery}
                  live={project.live}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
