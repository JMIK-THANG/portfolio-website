import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EducationCard from "../cards/EducationCard";

import scWorkReadyImg from "../../assets/sc-work-ready.jpg";
import tripletenImg from "../../assets/tripleten-certificate.jpg";
import externshipImg from "../../assets/tripleten-externship.jpg";

const certificates = [
  {
    title: "TripleTen",
    subtitle: "Software Engineering Certificate",
    date: "Sep 2025",
    description:
      "Completed an intensive full-stack software engineering program focused on real-world projects, collaboration, and modern web development.",
    image: tripletenImg,
  },
  {
    title: "South Carolina Work Credential",
    subtitle: "Workplace Readiness Certificate",
    date: "Sep 2025",
    description:
      "Credential earned for demonstrating essential workplace readiness and professional skills.",
    image: scWorkReadyImg,
  },
  {
    title: "TripleTen – Fox Finance",
    subtitle: "Full-Stack Engineering Externship — Fox Finance",
    date: "Jan 2026",
    description:
      "Completed a real-world externship building secure full-stack applications using React, Express, Prisma, and PostgreSQL.",
    image: externshipImg,
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

const Education = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const goToSlide = (targetIndex) => {
    if (targetIndex === index) return;
    setDirection(targetIndex > index ? 1 : -1);
    setIndex(targetIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [index]);

  return (
    <section
      id="education"
      className="scroll-mt-24 bg-slate-900 px-4 pt-20 pb-14 text-white md:pt-24 md:pb-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] text-white/60 md:text-sm">
            EDUCATION
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl">
            Certifications & Credentials
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
            Professional credentials in full-stack engineering, real-world
            externships, and workplace readiness achievements.
          </p>
        </div>

        <div className="mt-8 rounded-[28px] border border-white/10 bg-[#0f1b3d] px-5 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:mt-10 md:px-7 md:py-6">
          <div className="relative mx-auto max-w-5xl">
            <div className="relative min-h-[360px] overflow-hidden md:min-h-[300px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-0 flex items-center"
                >
                  <EducationCard certificate={certificates[index]} />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition duration-300 hover:bg-white/10 hover:text-white"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition duration-300 hover:bg-white/10 hover:text-white"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                {certificates.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    type="button"
                    onClick={() => goToSlide(dotIndex)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      dotIndex === index
                        ? "w-7 bg-white"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to certificate ${dotIndex + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;