// import React from 'react'
import ResumePDF from "../../public/resume/resume.pdf";

const MobileHamburger = ({ isHamburgerOpen, setIsHamburgerOpen }) => {

  const hamburgerHandler = () => {
    setIsHamburgerOpen(false);
  }

  return (
    <div
      className={`fixed hidden duration-300 ease-in-out z-30 ${
        isHamburgerOpen ? "translate-x-0" : "translate-x-full"
      } opacity-100 bg-slate-100 top-0 right-0 w-screen h-screen sm:flex items-center justify-center`}
    >
      <div className="items-center gap-4 flex flex-col w-[300px]">
        <ul className="items-center flex flex-col px-8 gap-4 list-none md:gap-2 md:px-4 select-none">
          <li className="header-links" onClick={hamburgerHandler}>
            <a href="#about-section">About</a>
          </li>
          <li className="header-links" onClick={hamburgerHandler}>
            <a href="#skill-section">Skills</a>
          </li>
          <li className="header-links" onClick={hamburgerHandler}>
            <a href="#contact-section">Contact</a>
          </li>
        </ul>
        <a
          onClick={hamburgerHandler}
          href={ResumePDF}
          target="_blank"
          className=" p-2 md:p-1 text-white bg-gray-900 b rounded text-lg tracking-normal md:tracking-tight hover:bg-gray-700"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default MobileHamburger;
