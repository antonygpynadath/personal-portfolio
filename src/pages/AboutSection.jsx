import { motion } from "framer-motion";
import AboutImage1 from "../assets/images/about-pic.png";
import AboutImage2 from "../assets/images/about2.png";
import AboutImage5 from "../assets/images/about5.png";
import { aboutParagraphs } from "../data/about";
import { fadeInUp, staggerContainer } from "../utils/motionVariants";

const AboutSection = () => {
  return (
    <div
      className="flex flex-col bg-slate-50 items-center justify-center pb-16"
      id="about-section"
    >
      <div className=" bg-gray-200 rounded-full mt-8 p-2 px-4">
        <a className="text-normal text-sm font-medium">About Me</a>
      </div>
      <div className="py-8 flex px-8 md:px-2 items-center justify-center gap-16 md:flex-col">
        <motion.div
          className="relative grid grid-cols-2 gap-4 border-white shadow-xl border-8 p-2 bg-white rounded-2xl"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className=" row-span-2 max-w-[250px] hover:scale-105 transition-all duration-300">
            <img
              alt="about-pic"
              src={AboutImage1}
              className="rounded-xl w-full h-[560px]"
            />
          </div>
          <div className=" max-w-[250px] -mb-2 hover:scale-105 transition-all duration-300">
            <img
              alt="about-pic"
              src={AboutImage2}
              className="rounded-xl h-[268px] w-full"
            />
          </div>
          <div className=" max-w-[250px] hover:scale-105 transition-all duration-300 overflow-clip">
            <img
              alt="about-pic"
              src={AboutImage5}
              className="rounded-xl h-[280px] w-full"
            />
          </div>
        </motion.div>
        <div className="flex flex-col">
          <p className="text-normal tracking-normal mt-4 text-2xl text-left max-w-xl text-gray-600 sm:max-w-sm ">
            Curious about me? Here you have it:
          </p>
          <motion.div
            className="text-normal tracking-normal mt-4 text-lg text-left leading-7 max-w-xl text-gray-600 sm:max-w-md"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {aboutParagraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={fadeInUp}
                className={index === 0 ? "" : "mt-4"}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
