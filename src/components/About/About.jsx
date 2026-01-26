import React from "react";
import img from "../../assets/about.jpg";

const About = () => {
  return (
    <section id="about" className="bg-black text-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        {/* Avatar */}
        <div className="mx-auto w-fit">
          <img
            src={img}
            alt="Jmik Thang"
            className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover ring-2 ring-white/10"
          />
        </div>

        {/* Heading */}
        <p className="mt-8 text-sm tracking-[0.25em] text-white/60">
          FULL-STACK DEVELOPER
        </p>

        <h1 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
          Hey, I&apos;m <span className="text-white">Jmik</span>.
        </h1>

        <h2 className="mt-2 text-xl md:text-2xl font-medium text-white/80">
          I build clean, responsive web apps.
        </h2>

        {/* Description */}
        <p className="mt-6 text-base md:text-lg leading-relaxed text-white/70">
          I&apos;m a Full-Stack Developer focused on building modern web
          experiences with <span className="text-white/90">React</span>,{" "}
          <span className="text-white/90">Node.js</span>, and{" "}
          <span className="text-white/90">REST APIs</span>. I enjoy turning ideas
          into reliable products—clean UI, solid backend logic, and a great user
          experience.
        </p>

        {/* Primary actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:jmikthang5@gmail.com"
            className="w-full sm:w-auto rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium hover:bg-white/15 transition"
          >
            Email (Gmail)
          </a>

          <a
            href="#projects"
            className="w-full sm:w-auto rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition"
          >
            View Projects
          </a>
        </div>

        {/* Social links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/jmik-thang-8b6728179/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/JMIK-THANG"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            GitHub
          </a>

          {/* Replace with your real Facebook URL */}
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            Facebook
          </a>
        </div>

        {/* Small footer line */}
        <p className="mt-10 text-xs text-white/40">
          Based in Charleston, SC • Open to Remote & Relocation
        </p>
      </div>
    </section>
  );
};

export default About;
