// import React from 'react'

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
        <div className="relative grid grid-cols-2 gap-4 border-white shadow-xl border-8 p-2 bg-white rounded-2xl">
          <div className=" row-span-2 max-w-[250px] hover:scale-105 transition-all duration-300">
            <img
              alt="about-pic"
              src="public/images/about-pic.png"
              className="rounded-xl w-full h-[570px]"
            />
          </div>
          <div className=" max-w-[250px] -mb-2 hover:scale-105 transition-all duration-300">
            <img
              alt="about-pic"
              src="public/images/about2.png"
              className="rounded-xl h-[278px] w-full"
            />
          </div>
          <div className=" max-w-[250px] hover:scale-105 transition-all duration-300 overflow-clip">
            <img
              alt="about-pic"
              src="public/images/about5.png"
              className="rounded-xl h-[290px] w-full"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-normal tracking-normal mt-4 text-2xl text-left max-w-xl text-gray-600 sm:max-w-sm ">
            Curious about me? Here you have it:
          </p>
          <div className="text-normal tracking-normal mt-4 text-lg text-left leading-7 max-w-xl text-gray-600  sm:max-w-md">
            <p className="text-normal tracking-normal mt-4 text-lg text-left leading-7 max-w-xl text-gray-600  sm:max-w-md">
              I am a dedicated designer, specializing in frontend development
              with a focus on React.js and React Native. My passion lies in
              bridging the technical and visual elements of digital products,
              ensuring a seamless user experience and impeccable design. I
              prioritize writing clear, readable, and highly performant code to
              bring projects to life.
            </p>
            <p className="mt-4">
              My journey in web development began in 2022, and since then, I
              have continuously evolved, embracing new challenges and staying
              abreast of the latest technologies. Today, two years into my
              journey, I am proficient in crafting cutting-edge web applications
              using modern tools such as React.js, TypeScript, and Tailwind CSS,
              among others.
            </p>
            <p className="mt-4">
              In addition to my frontend expertise, I hold a B.Tech. in Computer
              Engineering and maintain a strong commitment to ongoing learning.
              I am also familiar with Node.js and constantly expanding my
              knowledge across various stacks.
            </p>
            <p className="mt-4">
              One last thing, I&apos;m available for freelance work, so feel
              free to reach out and say hello! I promise I don&apos;t bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
