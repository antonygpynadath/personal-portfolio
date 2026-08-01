// import React from 'react'
import { useEffect, useState } from "react";
import MobileHamburger from "./MobileHamburger";
import ResumePDF from "../assets/resume/resume.pdf";
import { Link, animateScroll as scroll } from "react-scroll";
// import Modal from "./Modal";

const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const hamburgerOpen = () => {
    setIsHamburgerOpen((prev) => !prev);
    console.log("hamburgerOpener", isHamburgerOpen);
  };

  useEffect(() => {
    const hamburgerHandler = () => {
      if (window.innerWidth > 700) {
        setIsHamburgerOpen(false);
      }
    };

    window.addEventListener("resize", hamburgerHandler);

    return () => {
      window.removeEventListener("resize", hamburgerHandler);
    };
  }, []);

  return (
    <div className="select-none bg-gray-50 border-b-2 border-transparent p-4 md:p-2 md:px-4 px-8 fixed top-0 left-0 right-0 flex flew-row justify-between items-center opacity-100 z-50">
      <Link
        activeClass="active"
        className="header-links"
        to="#"
        spy={true}
        smooth={true}
        duration={500}
        onClick={() => scroll.scrollToTop()}
      >
        <h3 className="text-3xl font-bold text-gray-900 tracking-[-0.02em] px-2 md:px-0 whitespace-nowrap">
          &lt;AP /&gt;
        </h3>
      </Link>
      <div className="items-center justify-between flex flex-row sm:hidden">
        <ul className="items-center flex px-8 gap-4 list-none md:gap-2 md:px-4">
          <Link
            activeClass="active"
            className="header-links"
            to="about-section"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>

          <Link
            activeClass="active"
            className="header-links"
            to="experience-section"
            spy={true}
            smooth={true}
            duration={500}
          >
            Experience
          </Link>

          <Link
            activeClass="active"
            className="header-links"
            to="projects-section"
            spy={true}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>

          <Link
            activeClass="active"
            className="header-links"
            to="skill-section"
            spy={true}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>

          <Link
            activeClass="active"
            className="header-links"
            to="contact-section"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </ul>
        <a
          href={ResumePDF}
          target="_blank"
          className=" p-2 md:p-1 text-white bg-gray-900 b rounded text-lg tracking-normal md:tracking-tight hover:bg-gray-700"
        >
          Download CV
        </a>
      </div>
      <div
        className="hidden p-2 sm:flex sm:items-center sm:flex-col z-40 relative"
        onClick={hamburgerOpen}
      >
        <div
          className={`${
            isHamburgerOpen ? "hamburger-line close line1" : "hamburger-line"
          }`}
        />
        <div
          className={`${
            isHamburgerOpen
              ? "hamburger-line close line2"
              : "hamburger-line my-1"
          }`}
        />
        <div
          className={`${
            isHamburgerOpen ? "hamburger-line close line3" : "hamburger-line"
          }`}
        />
      </div>
      <MobileHamburger
        isHamburgerOpen={isHamburgerOpen}
        setIsHamburgerOpen={setIsHamburgerOpen}
      />
    </div>
  );
};

export default Header;
