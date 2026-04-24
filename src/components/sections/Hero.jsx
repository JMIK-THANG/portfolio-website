"use client";

import React, { useEffect, useState } from "react";

const Hero = () => {
  const nameText = "Hey, I'm Jmik";
  const roleText = "FULL-STACK DEVELOPER";

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [nameDone, setNameDone] = useState(false);

  // Type NAME first
  useEffect(() => {
    let timeout;

    if (name.length < nameText.length) {
      timeout = setTimeout(() => {
        setName(nameText.slice(0, name.length + 1));
      }, 110);
    } else {
      setTimeout(() => {
        setNameDone(true);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [name]);

  // Then type role
  useEffect(() => {
    let timeout;

    if (nameDone && role.length < roleText.length) {
      timeout = setTimeout(() => {
        setRole(roleText.slice(0, role.length + 1));
      }, 80);
    }

    return () => clearTimeout(timeout);
  }, [role, nameDone]);

  return (
    <section
      id="hero"
      className="bg-slate-950 text-white min-h-dvh flex items-center justify-center px-4"
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="rounded-[28px] border border-white/10 bg-[#0f1b3d] px-8 py-20 md:px-16 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.25em] text-white/70 h-[48px]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            {role}
          </div>

          <div className="relative mt-6 h-[72px] md:h-[96px]">
            <h1 className="invisible text-4xl md:text-6xl font-semibold leading-tight">
              {nameText}|
            </h1>

            <h1 className="absolute inset-0 text-4xl md:text-6xl font-semibold leading-tight">
              {name}
              <span className="animate-pulse">|</span>
            </h1>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-white/65">
            I build scalable full-stack applications with intuitive interfaces,
            robust backend architecture, and thoughtful user experiences using
            React, Node.js, and modern web technologies.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="/JM_Thang.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/90"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
