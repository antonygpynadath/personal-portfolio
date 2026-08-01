import Hero from "./Hero";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import SkillSection from "./SkillSection";
import ContactSection from "./ContactSection";

const Main = () => {
  return (
    <div className="mt-[78px] md:mt-[54px]">
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillSection />
      <ContactSection />
    </div>
  );
};

export default Main;
