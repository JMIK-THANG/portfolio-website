import React from "react";
import { Code2, Server } from "lucide-react";
import img from "../../assets/about.jpg";

export default function AboutIntro() {
  return (
    <section
      id="about-me"
      className="bg-slate-900 text-white px-4 py-16 md:py-20 scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[28px] border px-8 py-10 md:px-16 md:py-12">
          {/* Image */}
          <div className="flex justify-center">
            <div className="h-28 w-28 md:h-32 md:w-32 overflow-hidden rounded-full border border-white/15">
              <img
                src={img}
                alt="Jmik Thang"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Short description */}
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm md:text-base leading-7 text-white/70">
            My journey into software engineering started through self-learning
            while working full-time. I later strengthened my skills through an
            intensive bootcamp where I built real full-stack applications and
            collaborated in team projects. These experiences helped me develop
            strong problem-solving abilities and a practical understanding of
            modern web technologies. Today, I focus on building clean,
            user-friendly interfaces backed by structured and reliable backend
            systems.
          </p>

          {/* Cards */}
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {/* Front-End */}
            <div className="rounded-2xl border border-white/10 bg-[#0b1330] px-5 py-6 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Code2 className="h-4 w-4 text-white/80" />
              </div>

              <h3 className="mt-4 text-lg font-semibold">Front-End</h3>

              <p className="mt-2 text-xs md:text-sm leading-6 text-white/60">
                React · JavaScript · Tailwind CSS · Responsive UI · Reusable
                Components
              </p>
            </div>

            {/* Back-End */}
            <div className="rounded-2xl border border-white/10 bg-[#0b1330] px-5 py-6 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Server className="h-4 w-4 text-white/80" />
              </div>

              <h3 className="mt-4 text-lg font-semibold">Back-End</h3>

              <p className="mt-2 text-xs md:text-sm leading-6 text-white/60">
                Node.js · Express · REST APIs · MongoDB · JWT Auth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}