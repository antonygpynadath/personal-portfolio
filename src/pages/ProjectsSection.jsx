import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { staggerContainer } from "../utils/motionVariants";

const ProjectsSection = () => {
  return (
    <div
      className="flex flex-col bg-slate-50 items-center justify-center pb-16"
      id="projects-section"
    >
      <div className=" bg-gray-200 rounded-full mt-8 p-2 px-4">
        <p className="text-normal text-sm font-medium">Projects</p>
      </div>
      <p className="text-normal tracking-normal mt-4 text-lg text-center text-gray-600 sm:text-lg sm:max-w-sm">
        A few things I&apos;ve built or explored:
      </p>
      <p className="mt-1 text-sm text-center text-gray-400 max-w-md">
        Selected examples illustrating the kind of work I do — client project
        details are confidential.
      </p>

      <motion.div
        className="grid grid-cols-3 gap-8 mt-8 px-8 max-w-6xl w-full lg:grid-cols-2 md:grid-cols-1"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
