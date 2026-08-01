import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import { fadeInUp, staggerContainer } from "../utils/motionVariants";

const SkillTile = ({ name, Icon, url }) => (
  <a
    target="_blank"
    rel="noreferrer"
    href={url}
    className="flex flex-col items-center justify-center gap-2 text-center group"
  >
    {Icon ? (
      <span className="flex h-14 w-14 items-center justify-center text-4xl text-gray-700 hover:scale-110 active:scale-95 transition-transform duration-300">
        <Icon />
      </span>
    ) : (
      <span className="flex h-14 items-center justify-center px-3 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:scale-110 active:scale-95 transition-transform duration-300">
        {name}
      </span>
    )}
    {Icon && (
      <p className="font-normal text-gray-600 tracking-normal text-sm">
        {name}
      </p>
    )}
  </a>
);

const SkillSection = () => {
  return (
    <div
      className="flex py-8 flex-col items-center justify-center pb-16"
      id="skill-section"
    >
      <div className=" bg-gray-200 rounded-full mt-8 p-2 px-4">
        <p className="text-normal text-sm font-medium">Skills</p>
      </div>
      <p className="text-normal tracking-normal mt-4 text-lg text-center  text-gray-600 sm:text-lg sm:max-w-sm ">
        The skills, tools and technologies I am really good at:
      </p>

      <div className="mt-8 w-full max-w-5xl px-8 md:px-4 xs:px-5 flex flex-col gap-10">
        {skillGroups.map((group) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              {group.category}
            </h3>
            <motion.div
              className="grid grid-cols-6 gap-y-8 gap-x-4 mt-4 items-center md:grid-cols-4 sm:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {group.items.map((item) => (
                <motion.div key={item.name} variants={fadeInUp}>
                  <SkillTile {...item} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
