import React from "react";
import { ArrowUpRight } from "lucide-react";
import ProjectCard from "../cards/ProjectCard";
import { BOOTCAMP_PROJECTS } from "@/data/projects";

const FeaturedProjects = () => {
  return (
    <section
      id="featured-projects"
      className="bg-slate-950
 py-20 px-4 pt-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm tracking-[0.25em] text-white/60">FEATURED</p>

          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
            CodeJam Awards
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-white/65">
            Two team-built projects recognized during bootcamp CodeJam— focused
            on user experience and real-world problem solving.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {BOOTCAMP_PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
              variant="featured"
              showAward
            />
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="#all-projects"
          className="group relative inline-flex items-center gap-2 rounded-2xl p-[2px] transition"
        >
          <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 opacity-70 blur-sm group-hover:opacity-100 transition" />

          <span className="relative inline-flex items-center gap-2 rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white border border-white/10 hover:bg-black/80 transition">
            All Projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </a>
      </div>
    </section>
  );
};

export default FeaturedProjects;
