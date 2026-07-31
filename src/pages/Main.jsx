// import React from 'react'

import ContactSection from "./ContactSection";
import SkillSection from "./SkillSection";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
// import ExperienceSection from "./ExperienceSection";
// import WorkSection from "./WorkSection";

const Main = () => {
  return (
    <div className="mt-[78px] md:mt-[54px]">
      <Hero />
      <AboutSection />
      <SkillSection />
      <ContactSection />
    </div>
  );
};

export default Main;
