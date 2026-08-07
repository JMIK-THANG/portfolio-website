import { ALL_PROJECTS } from "@/data/projects";
import ProjectCard from "../cards/ProjectCard";

const AllProjects = () => {
  return (
    <section
      id="all-projects"
      className="bg-zinc-950 px-4 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            My Work
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Full-Stack & Front-End Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/65">
            Applications I’ve designed and developed using React,
            Node.js, Express, MongoDB, and PostgreSQL.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
              variant="all"
              showAward={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;