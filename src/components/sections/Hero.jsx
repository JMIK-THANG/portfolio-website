"use client";

import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const heroRef = useRef(null);

  const nameText = "Hey, I'm Jmik.";
  const roleText = "FULL-STACK DEVELOPER";

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [nameDone, setNameDone] = useState(false);

  useEffect(() => {
    let timeout;

    if (name.length < nameText.length) {
      timeout = setTimeout(() => {
        setName(nameText.slice(0, name.length + 1));
      }, 90);
    } else {
      timeout = setTimeout(() => setNameDone(true), 300);
    }

    return () => clearTimeout(timeout);
  }, [name]);

  useEffect(() => {
    let timeout;

    if (nameDone && role.length < roleText.length) {
      timeout = setTimeout(() => {
        setRole(roleText.slice(0, role.length + 1));
      }, 50);
    }

    return () => clearTimeout(timeout);
  }, [nameDone, role]);

  const handlePointerMove = (event) => {
    if (!heroRef.current) return;

    const bounds = heroRef.current.getBoundingClientRect();

    heroRef.current.style.setProperty(
      "--mouse-x",
      `${event.clientX - bounds.left}px`,
    );

    heroRef.current.style.setProperty(
      "--mouse-y",
      `${event.clientY - bounds.top}px`,
    );
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      onPointerMove={handlePointerMove}
      className="orbital-hero relative flex min-h-svh items-center justify-center overflow-hidden bg-[#050711] px-4 pb-44 pt-28 text-white sm:min-h-dvh sm:px-6 sm:pb-40 lg:px-8 lg:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-spotlight absolute inset-0" />
        <div className="hero-grid absolute inset-0" />

        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />

        <div className="hero-orbit hero-orbit-large" />
        <div className="hero-orbit hero-orbit-medium" />
        <div className="hero-orbit hero-orbit-small" />

        <span className="orbit-dot orbit-dot-one" />
        <span className="orbit-dot orbit-dot-two" />
        <span className="orbit-dot orbit-dot-three" />

        <span className="ambient-word left-[7%] top-[20%] hidden lg:block">
          REACT
        </span>

        <span className="ambient-word right-[8%] top-[30%] hidden lg:block">
          NODE
        </span>

        <span className="ambient-word bottom-[15%] left-[16%] hidden lg:block">
          DESIGN
        </span>

        <span className="ambient-word bottom-[12%] right-[14%] hidden lg:block">
          BUILD
        </span>
      </div>

      {/* Projects button */}
      <a
        href="#all-projects"
        className="satellite group absolute bottom-6 left-4 z-20 flex w-[calc(50%-1.25rem)] min-w-0 items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/70 p-3 text-white shadow-2xl backdrop-blur-xl transition hover:border-cyan-300/40 hover:bg-slate-900/90 sm:bottom-8 sm:left-6 sm:w-[230px] sm:gap-3 sm:p-4 lg:bottom-auto lg:left-[7%] lg:top-[27%]"
      >
        <span className="hidden h-9 w-9 shrink-0 place-items-center rounded-full border border-cyan-300/20 text-xs text-cyan-200 sm:grid">
          01
        </span>

        <span className="min-w-0">
          <span className="block truncate text-[8px] uppercase tracking-[0.12em] text-cyan-200/60 sm:text-[10px] sm:tracking-[0.2em]">
            Selected work
          </span>

          <span className="mt-1 block whitespace-nowrap text-xs font-semibold sm:text-sm">
            View Projects
          </span>
        </span>

        <span className="ml-auto text-xs text-cyan-300 transition group-hover:translate-x-1 sm:text-base">
          ↗
        </span>
      </a>

      {/* Resume button */}
      <a
        href="/jmik-thang.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="satellite group absolute bottom-6 right-4 z-20 flex w-[calc(50%-1.25rem)] min-w-0 items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/70 p-3 text-white shadow-2xl backdrop-blur-xl transition hover:border-violet-300/40 hover:bg-slate-900/90 sm:bottom-8 sm:right-6 sm:w-[230px] sm:gap-3 sm:p-4 lg:bottom-[20%] lg:right-[7%]"
      >
        <span className="hidden h-9 w-9 shrink-0 place-items-center rounded-full border border-violet-300/20 text-xs text-violet-200 sm:grid">
          02
        </span>

        <span className="min-w-0">
          <span className="block truncate text-[8px] uppercase tracking-[0.12em] text-violet-200/60 sm:text-[10px] sm:tracking-[0.2em]">
            Background
          </span>

          <span className="mt-1 block whitespace-nowrap text-xs font-semibold sm:text-sm">
            Open Resume
          </span>
        </span>

        <span className="ml-auto text-xs text-violet-300 transition group-hover:translate-x-1 sm:text-base">
          ↗
        </span>
      </a>

      {/* Center content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <div className="mb-6 flex justify-center sm:mb-8">
          <div className="inline-flex min-h-10 items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-2 text-[9px] font-medium tracking-[0.13em] text-cyan-200 backdrop-blur-md sm:px-4 sm:text-xs sm:tracking-[0.22em]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_13px_rgba(52,211,153,0.95)]" />

            {role || "\u00A0"}
          </div>
        </div>

        <div className="relative min-h-[54px] sm:min-h-[80px] lg:min-h-[95px]">
          <h1 className="invisible whitespace-nowrap text-[2.65rem] font-semibold leading-none tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            {nameText}
          </h1>

          <h1 className="absolute inset-0 whitespace-nowrap text-[2.65rem] font-semibold leading-none tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            {name}

            <span className="ml-1 inline-block animate-pulse text-cyan-300 sm:ml-2">
              |
            </span>
          </h1>
        </div>

        <p className="mx-auto mt-6 max-w-[21rem] text-sm leading-7 text-slate-300 sm:mt-8 sm:max-w-xl sm:text-lg sm:leading-8">
          I turn ideas into polished, dependable web experiences—from intuitive
          interfaces to secure backend systems.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3 text-[9px] uppercase tracking-[0.16em] text-slate-500 sm:mt-10 sm:text-xs sm:tracking-[0.2em]">
          <span className="h-px w-7 bg-gradient-to-r from-transparent to-slate-500 sm:w-10" />
          Scroll to explore
          <span className="h-px w-7 bg-gradient-to-l from-transparent to-slate-500 sm:w-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;