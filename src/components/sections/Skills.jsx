import React from "react";
import { motion } from "motion/react";

const skills = [
  "React",
  "JavaScript",
  "Tailwind",
  "HTML",
  "CSS",
  "Node",
  "Express",
  "MongoDB",
  "REST",
  "JWT",
  "Git",
  "GitHub",
];

const radius = 165;

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-slate-900 py-20 scroll-mt-28 text-white"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm tracking-[0.25em] text-white/60">SKILLS</p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Full-Stack Toolkit
          </h2>
          <p className="mt-3 text-white/70">
            Frontend and backend technologies working together to build modern,
            production-ready web applications.
          </p>
        </div>

        <div className="relative mt-16 flex items-center justify-center">
          <div className="relative h-[380px] w-[380px]">

            {/* Fancy rotating gradient ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 22,
                ease: "linear",
              }}
            >
              <div className="absolute inset-0 rounded-full border border-white/10" />

              {/* gradient stroke illusion */}
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(56,189,248,0.4),rgba(16,185,129,0.4),transparent,transparent)] blur-md opacity-60" />
            </motion.div>

            {/* second subtle counter ring */}
            <motion.div
              className="absolute inset-[18px] rounded-full border border-white/5"
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
            />

            {/* breathing glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-sky-400/10 blur-3xl"
              animate={{
                scale: [1, 1.04, 1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
            />

            {/* Fixed skill tags */}
            {skills.map((skill, index) => {
              const angle = (2 * Math.PI * index) / skills.length;
              const x = Math.cos(angle - Math.PI / 2) * radius;
              const y = Math.sin(angle - Math.PI / 2) * radius;

              return (
                <div
                  key={skill}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                  }}
                >
                  <span className="whitespace-nowrap rounded-full border border-white/15 bg-gradient-to-r from-sky-500/25 to-emerald-400/25 px-3 py-1.5 text-sm font-medium text-white/90 backdrop-blur">
                    {skill}
                  </span>
                </div>
              );
            })}

            {/* Center circle */}
            <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-sky-500/30 to-emerald-400/30 shadow-[0_0_60px_rgba(59,130,246,0.18)]">
              <div className="text-center">
                <p className="text-xs tracking-[0.25em] text-white/60">
                  CORE STACK
                </p>
                <h3 className="mt-2 text-xl font-semibold">Full-Stack</h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}