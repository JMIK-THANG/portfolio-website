import React from "react";
import img from "../../assets/about.jpg";
import { ArrowUpRight, Github, Trophy } from "lucide-react";

// ✅ add your project screenshots here
import slowJamzImg from "../../assets/slow-jamz.png";
import emergencyConnectImg from "../../assets/emergency-connect.png";

const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
    {children}
  </span>
);


const ProjectCard = ({
  title,
  badge,
  description,
  image,
  tech,
  liveDemo, // can be "" or null to hide button
  github,
}) => {
  const hasLive = !!liveDemo && liveDemo !== "#";

  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-5 md:p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/15 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover md:h-52 transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>

          <p className="mt-1 inline-flex items-center gap-2 text-sm text-white/70">
            <Trophy className="h-4 w-4 text-white/70" />
            {badge}
          </p>
        </div>

        <span className="shrink-0 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
          CodeJam
        </span>
      </div>

      <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-white/70">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        {hasLive && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-white/90 transition"
          >
            Live Demo <ArrowUpRight className="h-4 w-4" />
          </a>
        )}

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/15 transition"
        >
          GitHub <Github className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-black text-white px-4 py-16 md:py-24">
      {/* ===== TOP ABOUT CONTENT ===== */}
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto w-fit">
          <img
            src={img}
            alt="Jmik Thang"
            className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover ring-2 ring-white/10"
          />
        </div>

        <p className="mt-8 text-sm tracking-[0.25em] text-white/60">
          FULL-STACK DEVELOPER
        </p>

        <h1 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
          Hey, I&apos;m <span className="text-white">Jmik</span>.
        </h1>

        <h2 className="mt-2 text-xl md:text-2xl font-medium text-white/80">
          I build clean, responsive web apps.
        </h2>

        <p className="mt-6 text-base md:text-lg leading-relaxed text-white/70">
          I&apos;m a Full-Stack Developer focused on building modern web
          experiences with <span className="text-white/90">React</span>,{" "}
          <span className="text-white/90">Node.js</span>, and{" "}
          <span className="text-white/90">REST APIs</span>. I enjoy turning ideas
          into reliable products—clean UI, solid backend logic, and a great user
          experience.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/My_Resume.pdf"
            download
            className="w-full sm:w-auto rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium hover:bg-white/15 transition"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="w-full sm:w-auto rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition"
          >
            View Projects
          </a>
        </div>

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

          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            Facebook
          </a>
        </div>

        <p className="mt-10 text-xs text-white/40">
          Based in Charleston, SC • Open to Remote & Relocation
        </p>
      </div>

      {/* ===== FEATURED CODEJAM SECTION ===== */}
   {/* ===== FEATURED CODEJAM SECTION ===== */}
<section className="bg-zinc-950 py-20">
  <div className="mx-auto max-w-6xl px-4">
    <div className="text-center">
      <p className="text-sm tracking-[0.25em] text-white/60">FEATURED</p>
      <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
        CodeJam Awards
      </h2>
      <p className="mt-3 text-white/65 max-w-2xl mx-auto">
        Two team-built projects recognized during bootcamp CodeJam—focused on
        user experience, real-world flows, and clean implementation.
      </p>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-2">
      <ProjectCard
        title="Lover’s Slow Jamz"
        badge="Winner • Bootcamp CodeJam"
        description="A playlist-driven date planner with a restaurant carousel and Spotify integration—built to make planning a date night fun and effortless."
        image={slowJamzImg}
        tech={["JavaScript", "HTML/CSS", "Spotify", "UI/UX"]}
        liveDemo="https://jmik-thang.github.io/Lover-s-Slow-Jamz/"
        github="https://github.com/JMIK-THANG/Lover-s-Slow-Jamz"
      />

      <ProjectCard
        title="Emergency Connect"
        badge="Audience Award • Bootcamp CodeJam"
        description="A community-focused app concept for connecting people to safety resources and emergency information, designed with clarity and accessibility in mind."
        image={emergencyConnectImg}
        tech={["JavaScript", "HTML/CSS", "Responsive Design"]}
        liveDemo="https://johnwallacegerrard.github.io/Emergency_Connect/"
        github="https://github.com/johnwallacegerrard/Emergency_Connect"
      />
    </div>
  </div>
</section>

    </section>
  );
};

export default About;
