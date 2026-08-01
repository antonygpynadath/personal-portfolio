import { motion } from "framer-motion";
import { FaBriefcase, FaLocationDot, FaGraduationCap, FaCertificate } from "react-icons/fa6";
import { experience, education, certificate } from "../data/experience";
import { fadeInUp, staggerContainer } from "../utils/motionVariants";

const ExperienceSection = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-16" id="experience-section">
      <div className=" bg-gray-200 rounded-full mt-8 p-2 px-4">
        <p className="text-normal text-sm font-medium">Experience</p>
      </div>
      <p className="text-normal tracking-normal mt-4 text-lg text-center text-gray-600 sm:text-lg sm:max-w-sm">
        Where I&apos;ve grown as an engineer:
      </p>

      <div className="w-full max-w-5xl mt-8 px-8 md:px-4 flex gap-12 items-start md:flex-col">
        <motion.div
          className="flex-1 min-w-0 border-white shadow-xl border-8 bg-white rounded-2xl p-6 md:p-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-start justify-between gap-4 flex-wrap pb-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white text-lg">
                <FaBriefcase />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {experience.role}
                </h3>
                <p className="text-gray-600">{experience.company}</p>
              </div>
            </div>
            <div className="text-right sm:text-left">
              <p className="text-sm font-medium text-gray-700">{experience.period}</p>
              <p className="flex items-center gap-1 justify-end sm:justify-start text-sm text-gray-500">
                <FaLocationDot /> {experience.location}
              </p>
            </div>
          </div>

          <motion.div
            className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-1"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {experience.bulletGroups.map((group) => {
              const GroupIcon = group.icon;
              return (
                <motion.div key={group.heading} variants={fadeInUp}>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-800 uppercase tracking-wide">
                    <GroupIcon className="text-gray-500" />
                    {group.heading}
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {group.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-gray-600 text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray-300"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full max-w-xs md:max-w-full flex flex-col gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        >
          <div className="border-white shadow-xl border-8 bg-white rounded-2xl p-5">
            <div className="flex items-center gap-2 text-gray-800">
              <FaGraduationCap className="text-lg" />
              <h4 className="text-sm font-semibold uppercase tracking-wide">Education</h4>
            </div>
            <p className="mt-3 font-medium text-gray-900">{education.degree}</p>
            <p className="text-sm text-gray-600">{education.institution}</p>
            <p className="text-sm text-gray-500">{education.period}</p>
          </div>

          <div className="border-white shadow-xl border-8 bg-white rounded-2xl p-5">
            <div className="flex items-center gap-2 text-gray-800">
              <FaCertificate className="text-lg" />
              <h4 className="text-sm font-semibold uppercase tracking-wide">Certification</h4>
            </div>
            {certificate.link ? (
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block font-medium text-gray-900 hover:underline underline-offset-2"
              >
                {certificate.name}
              </a>
            ) : (
              <p className="mt-3 font-medium text-gray-900">{certificate.name}</p>
            )}
            <p className="text-sm text-gray-600">{certificate.issuer}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceSection;
