import React from "react";
import { SKILL_GROUPS } from "../../data/skills.js";

const BORDER_BY_TITLE = {
  "Front-End": "border-emerald-400/30",
  "Back-End": "border-sky-400/30",
  Database: "border-violet-400/30",
  "Tools & Workflow": "border-amber-400/30",
};

const ACCENT_BY_TITLE = {
  "Front-End": "bg-emerald-400/60",
  "Back-End": "bg-sky-400/60",
  Database: "bg-violet-400/60",
  "Tools & Workflow": "bg-amber-400/60",
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className=" py-20 scroll-mt-28 bg-slate-900
"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm tracking-[0.25em] text-white/60">SKILLS</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
            Full-Stack Toolkit
          </h2>
          <p className="mt-3 max-w-3xl text-white/70 leading-relaxed">
            A focused toolkit of modern frontend and full-stack technologies
            used to build scalable, responsive, and production-ready web
            applications.
          </p>
        </div>

        {/* 4-column grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group) => {
            const Icon = group.icon;
            const border = BORDER_BY_TITLE[group.title] ?? "border-white/15";
            const accent = ACCENT_BY_TITLE[group.title] ?? "bg-white/40";

            return (
              <div
                key={group.title}
                className={`rounded-3xl border ${border} bg-black/40 p-5 backdrop-blur`}
              >
                {/* Title */}
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon className="h-5 w-5 text-white/80" />
                  </span>
                  <h3 className="text-sm font-semibold text-white">
                    {group.title}
                  </h3>
                </div>

                {/* Accent line (fixed) */}
                <div className={`mt-4 h-1 w-10 rounded-full ${accent}`} />

                {/* Skills list (1 row = 1 skill) */}
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
