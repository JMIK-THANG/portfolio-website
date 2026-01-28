import React from "react";
import { Code2, Server, Database, Wrench } from "lucide-react";

const SKILL_GROUPS = [
  {
    title: "Front-End",
    icon: Code2,
    items: ["React", "JavaScript (ES6+)", "HTML", "CSS", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Back-End",
    icon: Server,
    items: ["Node.js", "Express", "REST APIs", "JWT Auth", "Middleware", "MVC"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MongoDB", "Mongoose", "CRUD", "Data Modeling", "Postman"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    items: ["Git/GitHub", "Vite", "Webpack (learning)", "Figma", "Deployment"],
  },
];

export default function SkillsSection() {
  return (
    <section className="mt-12">
      {/* Outer wrapper: simple but nice background */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 via-white/[0.03] to-transparent p-6 md:p-8">
        {/* subtle top highlight (simple background) */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(255,255,255,0.10),transparent_60%)]" />

        {/* Header */}
        <div className="relative text-center md:text-left">
          <p className="text-sm tracking-[0.25em] text-white/60">SKILLS</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
            Full-Stack Toolkit
          </h2>
          <p className="mt-3 text-white/65 max-w-3xl leading-relaxed md:mx-0 mx-auto">
            Clean UI on the front, secure APIs on the back. I focus on shipping
            reliable features with maintainable code and thoughtful UX.
          </p>
        </div>

        {/* One main card holding ALL categories */}
        <div className="relative mt-8">
          {/* Fancy border using gradient ring */}
          <div className="rounded-3xl bg-gradient-to-r from-white/20 via-white/10 to-white/20 p-[1px]">
            <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur p-6 md:p-7">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {SKILL_GROUPS.map((group) => {
                  const Icon = group.icon;
                  return (
                    <div key={group.title} className="min-w-0">
                      {/* Category title */}
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                          <Icon className="h-5 w-5 text-white/80" />
                        </span>
                        <h3 className="text-sm font-semibold text-white">
                          {group.title}
                        </h3>
                      </div>

                      {/* Skills chips */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 hover:bg-white/10 transition"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom mini line (simple, premium) */}
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Small note row */}
              <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-sm text-white/65">
                  Currently building: portfolio polish + full-stack features (auth, profiles, clean UI).
                </p>
                <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
                  React • Node • REST • MongoDB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
