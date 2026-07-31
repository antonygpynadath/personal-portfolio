// import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa6";
import { FaGitlab } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import ProfileImage from "../public/images/hero-pic1.png";

const Hero = () => {
  return (
    <div className="relative flex p-2 px-28 sm:px-8 pt-[24px] pb-8 items-center justify-center gap-4 md:flex-col-reverse md:pt-8 md:pb-12">
      <div className="relative p-4 md:px-8 flex flex-col flex-1 justify-around pt-6">
        <h1 className="mt-4 text-nowrap text-left text-5xl font-semibold">
          Hi, I&apos;m Antony
        </h1>
        <p className="py-8 text-lg text-gray-600 text-normal tracking-tight font-normal">
          I&apos;m a frontend developer with a focus on creating exceptional
          digital experiences that are fast, accessible, visually appealing, and
          responsive. Even though I have been creating web applications for over
          2 years, I still love it as if it was something new.
        </p>
        <div className="flex gap-4 mt-4 items-center">
          <div className="text-lg opacity-80 text-gray-600 pl-1">
            <FaLocationDot />
          </div>
          <p className="text-lg font-normal text-gray-600 tracking-normal">
            Kochi, India
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex h-6 w-6 items-center justify-center">
            <span className="relative h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="absolute inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
            </span>
          </div>
          <p className="text-lg font-normal text-gray-600 tracking-normal">
            Available for new projects
          </p>
        </div>
        <div className="my-4 mt-8 flex gap-6 items-center">
          {/* <a
            className="inline-block text-3xl opacity-60 text-gray-800"
            href="https://github.com/antonygpynadath"
            target="_blank"
          >
            <FaGithub />
          </a> */}
          <a
            className="inline-block text-3xl opacity-60 text-gray-800"
            href="https://gitlab.com/pynadathantonyg"
            target="_blank"
          >
            <FaGitlab />
          </a>
          <a
            className="inline-block text-3xl opacity-60 text-gray-800"
            href="http://linkedin.com/in/antony-g-pynadath"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="relative h-full sm:flex sm:flex-1 sm:w-full sm:justify-center lg:items-center">
        <div className="relative mb-20 md:mb-3">
          <img
            className="w-[400px] h-[450px] lg:w-[350px] lg:h-[400px]"
            src={ProfileImage}
            alt="profile-pic"
          />
          <div className="absolute -z-10 w-[400px] lg:w-[350px] lg:h-[300px] bottom-[0px] md:rounded-2l h-[350px] rounded-2xl bg-red-100 overflow-hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
