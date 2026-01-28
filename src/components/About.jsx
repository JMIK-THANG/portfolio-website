import React from "react";
import { ArrowUpRight } from "lucide-react";
import img from "../assets/about.jpg";
import slowJamzImg from "../assets/slow-jamz.png";
import emergencyConnectImg from "../assets/emergency-connect.png";
import ProjectCard from "./ProjectCard";
import EducationCard from "./EducationCard";
import SkillsSection from "./skillsSection";
import scWorkReadyImg from "../assets/sc-work-ready.jpg";
import tripletenImg from "../assets/tripleten-certificate.jpg";



const FEATURED_PROJECTS = [
  {
    title: "Lover’s Slow Jamz",
    badge: "Winner • Bootcamp CodeJam",
    description:
      "A playlist-driven date planner with a restaurant carousel and Spotify integration—built to make planning a date night fun and effortless.",
    image: slowJamzImg,
    tech: ["JavaScript", "HTML/CSS", "Spotify", "UI/UX"],
    liveDemo: "https://jmik-thang.github.io/Lover-s-Slow-Jamz/",
    github: "https://github.com/JMIK-THANG/Lover-s-Slow-Jamz",
  },
  {
    title: "Emergency Connect",
    badge: "Audience Award • Bootcamp CodeJam",
    description:
      "A community-focused app for connecting people to emergency resources and safety information, designed with clarity and accessibility in mind.",
    image: emergencyConnectImg,
    tech: ["JavaScript", "HTML/CSS", "Responsive Design"],
    liveDemo: "https://johnwallacegerrard.github.io/Emergency_Connect/",
    github: "https://github.com/johnwallacegerrard/Emergency_Connect",
  },
];

const About = () => {
  return (
    <>
      {/* ===== HERO / ABOUT ===== */}
      <section className="bg-black text-white min-h-screen flex items-center px-4">
        <div className="mx-auto max-w-4xl text-center py-16">
          <img
            src={img}
            alt="Jmik Thang"
            className="mx-auto h-32 w-32 md:h-40 md:w-40 rounded-full object-cover ring-2 ring-white/10"
          />

          <p className="mt-8 text-sm tracking-[0.25em] text-white/60">
            FULL-STACK DEVELOPER
          </p>

          <h1 className="mt-3 text-3xl md:text-5xl font-semibold">
            Hey, I&apos;m <span className="text-white">Jmik</span>
          </h1>

          <h2 className="mt-2 text-xl md:text-2xl text-white/80">
            I build clean, responsive web apps.
          </h2>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-white/70">
            I&apos;m a Full-Stack Developer focused on building modern web
            experiences with <span className="text-white/90">React</span>,{" "}
            <span className="text-white/90">Node.js</span>, and{" "}
            <span className="text-white/90">REST APIs</span>.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="/My_Resume.pdf"
              download
              className="rounded-xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium hover:bg-white/15 transition"
            >
              Download Resume
            </a>

            <a
              href="#featured"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 transition"
            >
              View Projects
            </a>
          </div>

          <p className="mt-10 text-xs text-white/40">
            Based in Charleston, SC • Open to Remote & Relocation
          </p>
        </div>
      </section>

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
            {FEATURED_PROJECTS.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
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
<SkillsSection/>

          {/* Fancy All Projects button */}
          <div className="mt-12 flex justify-center">
            <a
              href="#all-projects"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              All Projects
              <span className="transition-transform group-hover:translate-x-0.5">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== ALL PROJECTS (placeholders for now) ===== */}
      <section id="all-projects" className="bg-zinc-950 py-20 px-4 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm tracking-[0.25em] text-white/60">PROJECTS</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
              All Projects
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-white/65">
              More builds coming soon. For now, placeholders reuse the same card
              style. (You can replace images + links later.)
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="Project Placeholder 1"
              badge="In Progress"
              description="Short description goes here. Replace with real project later."
              image={slowJamzImg}
              tech={["React", "Tailwind", "UI"]}
              liveDemo="#"
              github="#"
            />

            <ProjectCard
              title="Project Placeholder 2"
              badge="In Progress"
              description="Short description goes here. Replace with real project later."
              image={emergencyConnectImg}
              tech={["Node.js", "Express", "API"]}
              liveDemo="#"
              github="#"
            />

            <ProjectCard
              title="Project Placeholder 3"
              badge="In Progress"
              description="Short description goes here. Replace with real project later."
              image={slowJamzImg}
              tech={["JavaScript", "HTML/CSS"]}
              liveDemo="#"
              github="#"
            />

            <ProjectCard
              title="Project Placeholder 4"
              badge="In Progress"
              description="Short description goes here. Replace with real project later."
              image={emergencyConnectImg}
              tech={["MongoDB", "Auth", "CRUD"]}
              liveDemo="#"
              github="#"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
