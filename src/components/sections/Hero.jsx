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
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    heroRef.current.style.setProperty("--mouse-x", `${x}px`);
    heroRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      onPointerMove={handlePointerMove}
      className="orbital-hero relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#050711] px-5 py-24 text-white"
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

        {/* Ambient background words */}
        <span className="ambient-word left-[7%] top-[20%]">REACT</span>
        <span className="ambient-word right-[8%] top-[30%]">NODE</span>
        <span className="ambient-word bottom-[15%] left-[16%]">DESIGN</span>
        <span className="ambient-word bottom-[12%] right-[14%]">BUILD</span>
      </div>

      {/* Projects satellite */}
      <a href="#all-projects" className="satellite satellite-projects group">
        <span className="satellite-number">01</span>

        <span>
          <span className="block text-[10px] uppercase tracking-[0.22em] text-cyan-200/60">
            Selected work
          </span>

          <span className="mt-1 block font-semibold text-white">
            View Projects
          </span>
        </span>

        <span className="satellite-arrow transition-transform group-hover:translate-x-1">
          ↗
        </span>
      </a>

      <a
        href="/jmik-thang.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="satellite satellite-resume group"
      >
        <span className="satellite-number">02</span>

        <span>
          <span className="block text-[10px] uppercase tracking-[0.22em] text-violet-200/60">
            Background
          </span>

          <span className="mt-1 block font-semibold text-white">
            Open Resume
          </span>
        </span>

        <span className="satellite-arrow transition-transform group-hover:translate-x-1">
          ↗
        </span>
      </a>

      {/* Center content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="inline-flex min-h-10 items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 text-xs font-medium tracking-[0.22em] text-cyan-200 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_13px_rgba(52,211,153,0.95)]" />
            {role || "\u00A0"}
          </div>
        </div>

        <div className="relative min-h-[70px] sm:min-h-[95px]">
          <h1 className="invisible text-5xl font-semibold leading-none tracking-[-0.05em] sm:text-7xl lg:text-8xl">
            {nameText}
          </h1>

          <h1 className="absolute inset-0 text-5xl font-semibold leading-none tracking-[-0.05em] sm:text-7xl lg:text-8xl">
            {name}
            <span className="ml-2 inline-block animate-pulse text-cyan-300">
              |
            </span>
          </h1>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
          I turn ideas into polished, dependable web experiences—from intuitive
          interfaces to secure backend systems.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-slate-500" />
          Scroll to explore
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-slate-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
