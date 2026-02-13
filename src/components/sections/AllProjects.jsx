import React from "react";
import { ALL_PROJECTS } from "@/data/projects";
import ProjectCard from "../cards/ProjectCard";
const AllProjects = () => {
  return (
    <div>
      {/* ===== ALL PROJECTS ===== */}
      <section id="all-projects" className="bg-zinc-950 py-20 px-4 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
              All Projects
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-white/65">
              A collection of CodeJam and practice projects. More real-world
              builds coming soon.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {ALL_PROJECTS.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
