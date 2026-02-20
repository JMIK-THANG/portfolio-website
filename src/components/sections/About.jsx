import React from "react";
import { Code2, Server, BadgeCheck, ArrowDown, Users } from "lucide-react";
import img from "../../assets/about.jpg";

export default function AboutIntro() {
  return (
    <section
      id="about-me"
      className="bg-slate-900 text-white px-4 py-10 sm:py-20 md:py-28 "
    >
      {/* ✅ ONE container controls edges for EVERYTHING */}
      <div className="mx-auto max-w-6xl">
        {/* ===== TOP ROW: TEXT LEFT / IMAGE RIGHT ===== */}
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* LEFT: TEXT */}
          <div>
            <p className="text-sm tracking-[0.25em] text-white/60">ABOUT ME</p>

            <h1 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
              My Journey Into Full-Stack Development.
            </h1>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/70">
              My path into software engineering started through self-learning.
              While working full-time as a sushi chef, I spent evenings and late
              nights studying programming through online platforms, building
              small projects, and learning the fundamentals of JavaScript and
              modern web development.
            </p>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-white/70">
              Eventually, I earned the opportunity to attend a full-time
              software engineering bootcamp — while still working full-time. It
              was demanding, intense, and required discipline, but it
              strengthened my problem-solving skills and technical foundation.
            </p>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-white/70">
              During the bootcamp, I built full-stack applications using
              <span className="text-white/90">
                {" "}
                JavaScript, React, Node.js, Express, MongoDB, REST APIs, JWT
                authentication, Git/GitHub, and modern project workflows
              </span>
              . I collaborated in team-based CodeJam projects and contributed to
              award-winning builds recognized for both functionality and user
              experience.
            </p>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-white/70">
              I enjoy both front-end and back-end development — building
              responsive, accessible interfaces while also designing APIs,
              handling authentication, structuring databases, and managing real
              data. Countless hours of debugging, iteration, and practice have
              shaped how I approach building reliable, well-structured software.
            </p>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-white/70">
              Today, I focus on building complete, practical applications and
              continuing to grow as a full-stack developer who understands how
              systems connect from UI to database.
            </p>

            {/* About-only buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#education"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 transition"
              >
                <BadgeCheck className="h-4 w-4" />
                Education
              </a>

              <a
                href="#skills"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/15 transition"
              >
                <ArrowDown className="h-4 w-4" />
                Skills
              </a>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <img
                src={img}
                alt="Jmik Thang"
                className="h-64 sm:h-80 md:h-[420px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ✅ CORE FOCUS stays inside same container so edges match */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {/* Front-End */}
          <div
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur
                       shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                       hover:bg-white/10 hover:border-white/15 hover:-translate-y-0.5
                       transition"
          >
            <div className="flex items-center gap-2 text-white/85">
              <Code2 className="h-4 w-4" />
              <h3 className="font-semibold">Front-End</h3>
            </div>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              React, JavaScript (ES6+), Tailwind CSS, responsive layouts,
              reusable components, and clean UI structure.
            </p>
          </div>

          {/* Back-End */}
          <div
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur
                       shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                       hover:bg-white/10 hover:border-white/15 hover:-translate-y-0.5
                       transition"
          >
            <div className="flex items-center gap-2 text-white/85">
              <Server className="h-4 w-4" />
              <h3 className="font-semibold">Back-End</h3>
            </div>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Node.js, Express, REST APIs, JWT authentication, MongoDB, and
              structured full-stack architecture.
            </p>
          </div>

          {/* Growth */}
          <div
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur
                       shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                       hover:bg-white/10 hover:border-white/15 hover:-translate-y-0.5
                       transition"
          >
            <div className="flex items-center gap-2 text-white/85">
              <Users className="h-4 w-4" />
              <h3 className="font-semibold">Growth & Discipline</h3>
            </div>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Self-taught while working full-time, bootcamp graduate, CodeJam
              award winner, improving through real project builds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}