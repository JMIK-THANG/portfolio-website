import React from "react";
import { MapPin, Sparkles, Code2, Briefcase, ArrowUpRight } from "lucide-react";
import img from "../../assets/about.jpg";

export default function AboutIntro() {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Top bar */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm tracking-[0.25em] text-white/60">ABOUT ME</p>
            <h1 className="mt-2 text-3xl md:text-5xl font-semibold leading-tight">
              Builder mindset.
              <span className="text-white/70"> Clean UI.</span>
              <span className="text-white/70"> Real products.</span>
            </h1>
          </div>

          <div className="flex items-center gap-2 text-sm text-white/60">
            <MapPin className="h-4 w-4" />
            Charleston, SC • Open to Remote & Relocation
          </div>
        </div>

        {/* Main split layout */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[380px_1fr]">
          {/* Left: Image + quick facts */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
              <img
                src={img}
                alt="Jmik Thang"
                className="h-72 w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-2 text-white/80">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm">Full-Stack Developer</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs text-white/60">Focus</p>
                  <p className="mt-1 text-sm font-semibold">React + APIs</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs text-white/60">Strength</p>
                  <p className="mt-1 text-sm font-semibold">Clean UI</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs text-white/60">Style</p>
                  <p className="mt-1 text-sm font-semibold">Simple & Fast</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs text-white/60">Tools</p>
                  <p className="mt-1 text-sm font-semibold">Git / Vite</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="/My_Resume.pdf"
                  download
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium hover:bg-white/15 transition"
                >
                  Download Resume
                </a>

                <a
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90 transition"
                >
                  View Projects <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Story + timeline */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur">
            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              I’m Jmik — a full-stack developer focused on building modern web
              experiences with <span className="text-white">React</span>,{" "}
              <span className="text-white">Node.js</span>, and{" "}
              <span className="text-white">REST APIs</span>. I care about clean
              structure, responsive layouts, and building projects that feel
              smooth to use.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="flex items-center gap-2 text-white/85">
                  <Code2 className="h-4 w-4" />
                  <h3 className="font-semibold">What I build</h3>
                </div>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  UI-driven apps, portfolio projects, and full-stack features
                  like auth, CRUD, and API integrations.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="flex items-center gap-2 text-white/85">
                  <Briefcase className="h-4 w-4" />
                  <h3 className="font-semibold">How I work</h3>
                </div>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Clear components, reusable patterns, and steady improvement —
                  shipping with quality, not chaos.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-10">
              <p className="text-sm tracking-[0.25em] text-white/60">JOURNEY</p>

              <div className="mt-5 space-y-4">
                <div className="flex gap-4">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-white/70" />
                  <div>
                    <p className="text-sm font-semibold">Bootcamp → Projects</p>
                    <p className="mt-1 text-sm text-white/70">
                      Built team projects and learned real workflows: Git,
                      collaboration, and shipping features.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-white/40" />
                  <div>
                    <p className="text-sm font-semibold">Front-end polish</p>
                    <p className="mt-1 text-sm text-white/70">
                      Focused on responsive layouts, clean components, and UI
                      that feels “finished.”
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-white/40" />
                  <div>
                    <p className="text-sm font-semibold">Full-stack growth</p>
                    <p className="mt-1 text-sm text-white/70">
                      Working deeper on APIs, authentication, and building
                      maintainable codebases.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom note */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-sm text-white/70">
                Currently building and refining my portfolio — aiming for a role
                where I can contribute to real products and keep leveling up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
