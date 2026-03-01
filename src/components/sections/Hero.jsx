"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar"; // make sure path is correct

const Hero = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowTitle(true), 250);
    const t2 = setTimeout(() => setShowLabel(true), 1100);
    const t3 = setTimeout(() => setShowRest(true), 1900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const smoothEase = "ease-[cubic-bezier(0.16,1,0.3,1)]";

  return (
    <section
      id="hero"
      className="bg-slate-950 text-white min-h-screen flex items-center justify-center relative"
    >
      <Navbar />

      {/* add top padding if navbar is fixed */}
      <div className="mx-auto w-full max-w-4xl text-center px-4 pt-24">
        <div
          className={[
            "mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.25em] text-white/70",
            "will-change-transform will-change-opacity",
            "transition-transform transition-opacity duration-[1400ms]",
            smoothEase,
            showLabel
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-3 scale-[0.94]",
          ].join(" ")}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
          FULL-STACK DEVELOPER
        </div>

        <h1
          className={[
            "mt-6 text-4xl md:text-6xl font-semibold leading-tight",
            "will-change-transform will-change-opacity",
            "transition-transform transition-opacity duration-[1600ms]",
            smoothEase,
            showTitle
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-5 scale-[0.92]",
          ].join(" ")}
        >
          Hey, I&apos;m <span className="text-white">Jmik</span>
        </h1>

        <div
          className={[
            "will-change-transform will-change-opacity",
            "transition-transform transition-opacity duration-[1200ms]",
            smoothEase,
            showRest ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
        >
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-white/65">
            I&apos;m a Full-Stack Developer focused on building modern web
            experiences with <span className="text-white/90">React</span>,{" "}
            <span className="text-white/90">Node.js</span>, and{" "}
            <span className="text-white/90">REST APIs</span>.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="/J_Thang_Resume.pdf"
              download
              className="w-full sm:w-auto rounded-2xl border border-white/15 bg-white/10 px-7 py-3 text-sm font-semibold text-white hover:bg-white/15 transition"
            >
              Download Resume
            </a>

            <a
              href="#featured-projects"
              className="w-full sm:w-auto rounded-2xl bg-white px-7 py-3 text-sm font-semibold text-black hover:bg-white/90 transition"
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
      </div>
    </section>
  );
};

export default Hero;
