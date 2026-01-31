import React from "react";
import {
  MapPin,
  Code2,
  Server,
  BadgeCheck,
  ArrowDown,
  Users,
  BookOpen,
} from "lucide-react";

import img from "../../assets/about.jpg";

export default function AboutIntro() {
  return (
    <section className="bg-black text-white py-28 px-4" id="about-me">
      <div className="mx-auto max-w-6xl">
        {/* ===== TOP ROW: TEXT LEFT / IMAGE RIGHT ===== */}
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* LEFT: TEXT */}
          <div>
            <p className="text-sm tracking-[0.25em] text-white/60">ABOUT ME</p>

            <h1 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
              How I approach building software.
            </h1>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/70">
              I'm Jmik, a full-stack developer who enjoys building clean,
              practical web applications. On the front end, I focus on
              responsive layouts, reusable React components, and interfaces
              that feel simple and intuitive. On the back end, I work with
              Node.js and Express to build REST APIs, handle authentication,
              and connect applications to MongoDB for real data and CRUD
              operations.
            </p>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-white/70">
              I care about structure, clarity, and writing code that makes
              sense not just now, but later. I’m always learning, improving,
              and building toward more complete, reliable full-stack projects.
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
                className="h-[420px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ===== BELOW: FOCUS AREAS ===== */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-white/85">
              <Code2 className="h-4 w-4" />
              <h3 className="font-semibold">Front-End focus</h3>
            </div>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Building responsive UIs with React and Tailwind, organizing
              components cleanly, and keeping layouts consistent across the
              app.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-white/85">
              <Server className="h-4 w-4" />
              <h3 className="font-semibold">Back-End focus</h3>
            </div>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Creating REST APIs with Node and Express, handling JWT-based
              authentication, and working with MongoDB for structured data
              and ownership rules.
            </p>
          </div>
        </div>

        {/* ===== JOURNEY (BULLET STYLE) ===== */}
        <div className="mt-20">
          <p className="text-sm tracking-[0.25em] text-white/60">JOURNEY</p>

          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-white/60" />
                <span>
                  <strong className="text-white/90">
                    Bootcamp foundation:
                  </strong>{" "}
                  learned JavaScript, React, Node.js, Express, MongoDB, and
                  modern Git workflows.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-white/40" />
                <span>
                  <strong className="text-white/90">
                    Team collaboration:
                  </strong>{" "}
                  built CodeJam projects, worked with teammates, and shipped
                  features under real deadlines.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-white/40" />
                <span>
                  <strong className="text-white/90">
                    Self-study & practice:
                  </strong>{" "}
                  continuing to build projects, practice DSA, and improve code
                  structure and readability.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-white/40" />
                <span>
                  <strong className="text-white/90">
                    Full-stack mindset:
                  </strong>{" "}
                  focusing on how UI, APIs, authentication, and data work
                  together as one system.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-white/40" />
                <span>
                  <strong className="text-white/90">
                    Freelance-ready growth:
                  </strong>{" "}
                  learning how to scope features, build efficiently, and deliver
                  clean results.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ===== VALUES / LEARNING ===== */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-white/85">
              <Users className="h-4 w-4" />
              <h3 className="font-semibold">What matters to me</h3>
            </div>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Building software that is clear, dependable, and easy to use —
              with attention to both user experience and underlying logic.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-white/85">
              <BookOpen className="h-4 w-4" />
              <h3 className="font-semibold">Learning right now</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Webpack basics • Better system design habits • Cleaner React
              project structure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
