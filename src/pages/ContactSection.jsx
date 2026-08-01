import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { MdContentCopy } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaGithub, FaGitlab } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { personalInfo } from "../data/personalInfo";

const ContactSection = () => {
  const [copyNumberStatus, setCopyNumberStatus] = useState(false);
  const [copyEmailStatus, setCopyEmailStatus] = useState(false);

  const onCopyEmailHandler = () => {
    setCopyEmailStatus(true);
    setTimeout(() => setCopyEmailStatus(false), 1000);
  };

  const onCopyNumberHandler = () => {
    setCopyNumberStatus(true);
    setTimeout(() => setCopyNumberStatus(false), 1000);
  };

  return (
    <div
      className="flex bg-slate-50 items-center justify-center py-4 pb-12 px-6 xs:px-4"
      id="contact-section"
    >
      <motion.div
        className="flex flex-col items-center justify-center w-full max-w-lg"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className=" bg-gray-200 rounded-full mt-8 p-2 px-4">
          <p className="text-normal text-sm font-medium">Get in touch</p>
        </div>
        <p className="text-normal tracking-normal mt-4 text-lg text-center max-w-lg text-gray-600 sm:text-lg sm:max-w-sm ">
          What&apos;s next? Feel free to reach out to me if you are looking for
          a developer, have a query, or simply want to connect.
        </p>
        <div className="relative flex flex-wrap w-full mt-8 items-center justify-center p-2 gap-2 xs:gap-1">
          <span className="text-2xl sm:text-xl xs:text-lg font-bold p-2 shrink-0">
            <FiMail />
          </span>
          <span className="text-3xl sm:text-2xl xs:text-lg font-semibold tracking-normal break-all text-center">
            {personalInfo.email}
          </span>
          <button
            type="button"
            aria-label="Copy email address"
            className="text-2xl sm:text-2xl xs:text-lg font-semibold p-1 hover:bg-gray-200 active:scale-90 rounded-lg transition-transform duration-150 shrink-0"
          >
            <CopyToClipboard text={personalInfo.email} onCopy={onCopyEmailHandler}>
              <MdContentCopy />
            </CopyToClipboard>
          </button>
          {copyEmailStatus && (
            <div className="tracking-tight bg-slate-200 text-sm p-1 px-2 rounded-xl w-full text-center xs:w-auto">
              Copied!
            </div>
          )}
        </div>
        <div className="relative flex flex-wrap w-full items-center justify-center p-2 gap-2 xs:gap-1">
          <span className="text-2xl sm:text-lg font-bold shrink-0">
            <IoCallOutline />
          </span>
          <span className="text-3xl tracking-normal sm:text-2xl xs:text-lg font-semibold">
            {personalInfo.phone}
          </span>
          <button
            type="button"
            aria-label="Copy phone number"
            className="text-2xl sm:text-xl font-semibold p-1 hover:bg-gray-200 active:scale-90 rounded-lg transition-transform duration-150 shrink-0"
          >
            <CopyToClipboard text={personalInfo.phone} onCopy={onCopyNumberHandler}>
              <MdContentCopy />
            </CopyToClipboard>
          </button>
          {copyNumberStatus && (
            <div className="tracking-tight bg-slate-200 text-sm p-1 px-2 rounded-xl w-full text-center xs:w-auto">
              Copied!
            </div>
          )}
        </div>
        <p className="mt-8 text-normal text-center text-lg sm:text-lg tracking-normal text-gray-600">
          You may also find me on these platforms!
        </p>
        <div className="p-2 flex items-center justify-center gap-8 mt-2">
          <a
            className="inline-block text-3xl opacity-75 text-gray-800 hover:opacity-100 active:scale-90 transition-all duration-300"
            href={personalInfo.gitlab}
            target="_blank"
            rel="noreferrer"
          >
            <FaGitlab />
          </a>
          <a
            className="inline-block text-3xl opacity-75 text-gray-800 hover:opacity-100 active:scale-90 transition-all duration-300"
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="inline-block text-3xl opacity-75 text-gray-800 hover:opacity-100 active:scale-90 transition-all duration-300"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
