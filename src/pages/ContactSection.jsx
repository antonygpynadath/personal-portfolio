// import React from 'react'
import { FiMail } from "react-icons/fi";
import { MdContentCopy } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
// import { FaGithub } from "react-icons/fa6";
import { FaGitlab } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

const ContactSection = () => {
  const [copyNumberStatus, setCopyNumberStatus] = useState(false);
  const [copyEmailStatus, setCopyEmailStatus] = useState(false);

  const onCopyHandler = (text) => {
    if (typeof text == "string") {
      setCopyEmailStatus(true);
      setTimeout(() => setCopyEmailStatus(false), 1000);
    } else {
      setCopyNumberStatus(true);
      setTimeout(() => setCopyNumberStatus(false), 1000);
    }    
  };

  return (
    <div
      className="flex bg-slate-50 items-center justify-center py-4 pb-12"
      id="contact-section"
    >
      <div className=" flex flex-col items-center justify-center">
        <div className=" bg-gray-200 rounded-full mt-8 p-2 px-4">
          <p className="text-normal text-sm font-medium">Get in touch</p>
        </div>
        <p className="text-normal tracking-normal mt-4 text-lg text-center max-w-lg text-gray-600 sm:text-lg sm:max-w-sm ">
          What&apos;s next? Feel free to reach out to me if you are looking for
          a developer, have a query, or simply want to connect.
        </p>
        <div className="relative flex mt-8 items-center justify-center p-2 gap-4">
          <span className=" text-2xl sm:text-xl font-bold p-2">
            <FiMail />
          </span>
          <span className="text-3xl sm:text-2xl font-semibold tracking-normal">
            antonygpynadath@gmail.com
          </span>
          <span className=" text-2xl sm:text-2xl font-semibold p-1 hover:bg-gray-200 rounded-lg">
            <CopyToClipboard
              text={"antonygpynadath@gmail.com"}
              onCopy={onCopyHandler}
            >
              <MdContentCopy />
            </CopyToClipboard>
          </span>
          {copyEmailStatus && (
            <div className=" absolute -top-6 -right-8 tracking-tight bg-slate-200 text-sm p-1 px-2 rounded-xl">
              Copied!
            </div>
          )}
        </div>
        <div className="relative flex items-center justify-center p-2 gap-4">
          <span className=" text-2xl sm:text-lg font-bold">
            <IoCallOutline />
          </span>
          <span className="text-3xl tracking-normal sm:text-2xl font-semibold">
            +91 9188490480
          </span>
          <span className=" text-2xl sm:text-xl font-semibold p-1 hover:bg-gray-200 rounded-lg">
            <CopyToClipboard text={+919188490480} onCopy={onCopyHandler}>
              <MdContentCopy />
            </CopyToClipboard>
          </span>
          {copyNumberStatus && (
            <div className=" absolute -top-6 -right-8 tracking-tight bg-slate-200 text-sm p-1 px-2 rounded-xl">
              Copied!
            </div>
          )}
        </div>
        <p className="mt-8 text-normal text-center text-lg sm:text-lg tracking-normal text-gray-600">
          You may also find me on these platforms!
        </p>
        <div className="p-2 flex items-center justify-center gap-8 mt-2">
          {/* <a
            className="inline-block text-3xl opacity-75 text-gray-800"
            href="https://github.com/antonygpynadath"
            target="_blank"
          >
            <FaGithub />
          </a> */}
          <a
            className="inline-block text-3xl opacity-75 text-gray-800"
            href="https://gitlab.com/pynadathantonyg"
            target="_blank"
          >
            <FaGitlab />
          </a>
          <a
            className="inline-block text-3xl opacity-75 text-gray-800"
            href="http://linkedin.com/in/antony-g-pynadath"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
