import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { fadeInUp } from "../utils/motionVariants";

const ProjectCard = ({
  title,
  description,
  tags,
  githubUrl,
  demoUrl,
  accent,
  Icon,
}) => {
  const linkClass =
    "flex items-center gap-2 text-sm font-medium rounded-lg px-3 py-1.5 transition-colors duration-300";

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex flex-col bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden"
    >
      <div
        className={`h-40 flex items-center justify-center bg-gradient-to-br ${accent.from} ${accent.to}`}
      >
        <Icon className="text-6xl text-white/80" />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-1">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-700 rounded-full px-2.5 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2 pt-4 border-t border-gray-100">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className={`${linkClass} text-gray-700 hover:bg-gray-100`}
            >
              <FaGithub /> Code
            </a>
          ) : (
            <span
              title="Coming soon"
              className={`${linkClass} text-gray-400 opacity-60 pointer-events-none`}
            >
              <FaGithub /> Code
            </span>
          )}
          {demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className={`${linkClass} text-gray-700 hover:bg-gray-100`}
            >
              <FaArrowUpRightFromSquare /> Live Demo
            </a>
          ) : (
            <span
              title="Coming soon"
              className={`${linkClass} text-gray-400 opacity-60 pointer-events-none`}
            >
              <FaArrowUpRightFromSquare /> Live Demo
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
