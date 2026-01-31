import React from "react";

// ✅ correct path to data (from sections folder → src/data)
import Education from "./Education";
import SkillsSection from "./Skills.jsx";
import AllProjects from "./AllProjects";
import AboutIntro from "./About.jsx";
import Hero from "./Hero.jsx";
import FeaturedProjects from "./FeaturedProjects";
import Contact from "./Contact";

const Main = () => {
  return (
    <>
      <Hero />
      <AboutIntro />
      <FeaturedProjects/>
      <Education />
      <SkillsSection />
      <AllProjects />
      <Contact/>
    </>
  );
};

export default Main;
