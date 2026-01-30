import React from "react";
import { ArrowUpRight } from "lucide-react";
import scWorkReadyImg from "../../assets/sc-work-ready.jpg";
import tripletenImg from "../../assets/tripleten-certificate.jpg";

// ✅ correct paths based on your folders
import ProjectCard from "../cards/ProjectCard.jsx";
import EducationCard from "../cards/EducationCard.jsx";
import SkillsSection from "./skillsSection.jsx";
import AboutMe from "../layout/AboutMe";

// ✅ correct path to data (from sections folder → src/data)
import { BOOTCAMP_PROJECTS, ALL_PROJECTS } from "../../data/projects.js";

const Main = () => {
  return (
    <>
      {/* ===== HERO / ABOUT ===== */}
      <section className="bg-black text-white px-4 pt-28 pb-16 min-h-[calc(100vh-90px)] flex items-center">
        <div className="mx-auto w-full max-w-4xl text-center">
          {/* Top label */}
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.25em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            FULL-STACK DEVELOPER
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
            Hey, I&apos;m <span className="text-white">Jmik</span>
          </h1>

          <p className="mt-4 text-lg md:text-2xl text-white/80">
            I build clean, responsive web apps.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-white/65">
            I&apos;m a Full-Stack Developer focused on building modern web
            experiences with <span className="text-white/90">React</span>,{" "}
            <span className="text-white/90">Node.js</span>, and{" "}
            <span className="text-white/90">REST APIs</span>.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="/My_Resume.pdf"
              download
              className="rounded-2xl border border-white/15 bg-white/10 px-7 py-3 text-sm font-semibold text-white hover:bg-white/15 transition"
            >
              Download Resume
            </a>

            <a
              href="#featured"
              className="rounded-2xl bg-white px-7 py-3 text-sm font-semibold text-black hover:bg-white/90 transition"
            >
              View Projects
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/45">
            <span>Based in Charleston, SC</span>
            <span className="text-white/25">•</span>
            <span>Open to Remote & Relocation</span>
          </div>
        </div>
      </section>
      <AboutMe/>
      {/* ===== FEATURED PROJECTS ===== */}
      <section id="featured" className="bg-zinc-950 py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm tracking-[0.25em] text-white/60">FEATURED</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
              CodeJam Awards
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-white/65">
              Two team-built projects recognized during bootcamp CodeJam—focused
              on user experience and real-world problem solving.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {BOOTCAMP_PROJECTS.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="#all-projects"
            className="group relative inline-flex items-center gap-2 rounded-2xl p-[2px] transition"
          >
            {/* Gradient ring */}
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 opacity-70 blur-sm group-hover:opacity-100 transition" />

            {/* Inner button */}
            <span className="relative inline-flex items-center gap-2 rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white border border-white/10 hover:bg-black/80 transition">
              All Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section id="education" className="bg-black py-20 px-4 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm tracking-[0.25em] text-white/60">EDUCATION</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
              Certifications & Credentials
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-white/65">
              Professional training and workplace readiness achievements.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <EducationCard
              title="TripleTen"
              subtitle="Software Engineering Certificate"
              date="Sep 2025"
              description="Completed an intensive full-stack software engineering program focused on real-world projects, collaboration, and modern web development."
              image={tripletenImg}
              skills={[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Git",
                "GitHub",
                "Google Cloud",
              ]}
            />

            <EducationCard
              title="South Carolina Work Credential"
              subtitle="Workplace Readiness Certificate"
              date="Sep 2025"
              description="Credential earned for demonstrating essential workplace readiness and professional skills."
              image={scWorkReadyImg}
              skills={[
                "Employability Skills",
                "Professionalism",
                "Communication",
                "Workplace Readiness",
              ]}
            />
          </div>

        </div>
      <SkillsSection/>
      </section>
      {/* ===== ALL PROJECTS ===== */}
      <section id="all-projects" className="bg-zinc-950 py-20 px-4 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm tracking-[0.25em] text-white/60">PROJECTS</p>
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
    </>
  );
};

export default Main;
