  
  import React from 'react'
  
const Hero = () => {
    return (
      <>
  <section id="hero" className="bg-black text-white px-4 pt-28 pb-16 min-h-[calc(100vh-65px)] flex items-center">
        <div className="mx-auto w-full max-w-4xl text-center">
          {/* Top label */}
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.25em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            FULL-STACK DEVELOPER
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
            Hey, I&apos;m <span className="text-white">Jmik</span>
          </h1>

          <p className="mt-4 text-lg md:text-2xl text-white/80">
            I build clean, responsive web apps.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-white/65">
            I&apos;m a Full-Stack Developer focused on building modern web
            experiences with <span className="text-white/90">React</span>,{" "}
            <span className="text-white/90">Node.js</span>, and{" "}
            <span className="text-white/90">REST APIs</span>.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="/My_Resume.pdf"
              download
              className="rounded-2xl border border-white/15 bg-white/10 px-7 py-3 text-sm font-semibold text-white hover:bg-white/15 transition"
            >
              Download Resume
            </a>

            <a
              href="#featured-projects"
              className="rounded-2xl bg-white px-7 py-3 text-sm font-semibold text-black hover:bg-white/90 transition"
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
      </section>
      </>
       )
  }
  export default Hero; 
  