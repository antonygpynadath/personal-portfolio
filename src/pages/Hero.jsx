import { motion } from "framer-motion";
import { FaLocationDot, FaGithub, FaGitlab, FaLinkedinIn } from "react-icons/fa6";
import ProfileImage from "../assets/images/hero-pic1.png";
import { personalInfo } from "../data/personalInfo";
import { fadeInUp, staggerContainer } from "../utils/motionVariants";

const Hero = () => {
  return (
    <div className="relative flex p-2 px-28 sm:px-8 xs:px-5 pt-[24px] pb-8 items-center justify-center gap-4 md:flex-col-reverse md:pt-8 md:pb-12 xs:pb-6">
      <motion.div
        className="relative p-4 md:px-8 flex flex-col flex-1 justify-around pt-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeInUp}
          className="mt-4 whitespace-nowrap text-left text-5xl font-semibold xs:text-4xl"
        >
          Hi, I&apos;m {personalInfo.firstName}
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="py-8 sm:py-6 text-lg xs:text-base text-gray-600 text-normal tracking-tight font-normal"
        >
          I&apos;m a {personalInfo.role} at {personalInfo.company} with {personalInfo.experience} of experience
          building React and React Native applications. I specialize in
          real-time, collaborative interfaces powered by WebSockets and
          Socket.IO, and I lead frontend delivery end to end from
          requirement analysis to shipping.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex gap-4 mt-4 items-center">
          <div className="text-lg opacity-80 text-gray-600 pl-1">
            <FaLocationDot />
          </div>
          <p className="text-lg font-normal text-gray-600 tracking-normal">
            {personalInfo.location}
          </p>
        </motion.div>
        <motion.div variants={fadeInUp} className="flex gap-4 items-center">
          <div className="flex h-6 w-6 items-center justify-center">
            <span className="relative h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="absolute inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
            </span>
          </div>
          <p className="text-lg font-normal text-gray-600 tracking-normal">
            Available for new projects
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="my-4 mt-8 flex gap-6 items-center"
        >
          <a
            className="inline-block text-3xl opacity-60 text-gray-800 hover:opacity-100 transition-opacity duration-300"
            href={personalInfo.gitlab}
            target="_blank"
            rel="noreferrer"
          >
            <FaGitlab />
          </a>
          <a
            className="inline-block text-3xl opacity-60 text-gray-800 hover:opacity-100 transition-opacity duration-300"
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="inline-block text-3xl opacity-60 text-gray-800 hover:opacity-100 transition-opacity duration-300"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="relative h-full sm:flex sm:flex-1 sm:w-full sm:justify-center lg:items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative mb-20 md:mb-3">
          <img
            className="w-[400px] h-[450px] lg:w-[350px] lg:h-[400px] sm:w-[260px] sm:h-[300px] xs:w-[190px] xs:h-[220px]"
            src={ProfileImage}
            alt="profile-pic"
          />
          <div className="absolute -z-10 w-[400px] lg:w-[350px] lg:h-[300px] sm:w-[260px] sm:h-[220px] xs:w-[190px] xs:h-[165px] bottom-[0px] md:rounded-2l h-[350px] rounded-2xl bg-red-100 overflow-hidden"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
