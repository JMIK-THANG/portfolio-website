import React from "react";
import { motion } from "motion/react";

import Education from "./Education";
import SkillsSection from "./Skills.jsx";
import AllProjects from "./AllProjects";
import AboutIntro from "./About.jsx";
import Hero from "./Hero.jsx";
import FeaturedProjects from "./FeaturedProjects";
import Contact from "./Contact";

const sectionVariant = {
  hidden: {
    opacity: 0.85,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 85,
      damping: 20,
      mass: 0.9,
    },
  },
};

function SectionReveal({ children }) {
  return (
    <motion.div
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

const Main = () => {
  return (
    <>

      <SectionReveal>
        <Hero />
      </SectionReveal>
      <SectionReveal>
        <AboutIntro />
      </SectionReveal>

      <SectionReveal>
        <FeaturedProjects />
      </SectionReveal>

      <SectionReveal>
        <Education />
      </SectionReveal>

      <SectionReveal>
        <SkillsSection />
      </SectionReveal>

      <SectionReveal>
        <AllProjects />
      </SectionReveal>

      <SectionReveal>
        <Contact />
      </SectionReveal>
    </>
  );
};

export default Main;
