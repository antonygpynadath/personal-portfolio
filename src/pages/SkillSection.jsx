// import React from 'react'

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
      <div className="grid grid-cols-5 gap-y-12 gap-x-8 mt-8 p-2 sm:grid-cols-4 md:gap-x-4">
        <div className="flex flex-col items-center justify-between">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            className="hover:scale-110 duration-300"
          >
            <img
              alt="JavaScript"
              width={64}
              height={64}
              src="public/logos/icon-javascript.svg"
            />
          </a>
          <p className="font-normal text-gray-600 tracking-normal text-lg">
            JavaScript
          </p>
        </div>

        <div className="flex flex-col items-center justify-between">
          <a
            target="_blank"
            href="https://www.typescriptlang.org/"
            className="hover:scale-110 duration-300"
          >
            <img
              alt="TypeScript"
              width={65}
              height={64}
              src="public/logos/icon-typescript.svg"
            />
          </a>
          <p className="font-normal text-gray-600 tracking-normal text-lg">
            TypeScript
          </p>
        </div>

        <div className="flex flex-col items-center justify-between">
          <a
            target="_blank"
            href="https://react.dev/"
            className="hover:scale-110 duration-300"
          >
            <img
              alt="React"
              width={71}
              height={64}
              src="public/logos/icon-react.svg"
            />
          </a>
          <p className="font-normal text-gray-600 tracking-normal text-lg">
            React
          </p>
        </div>

        <div className="flex flex-col items-center justify-between">
          <a
            target="_blank"
            href="https://tailwindcss.com/"
            className="hover:scale-110 duration-300"
          >
            <img
              alt="TailwindCSS"
              width={106}
              height={64}
              src="public/logos/icon-tailwindcss.svg"
            />
          </a>
          <p className="font-normal text-gray-600 tracking-normal text-lg">
            TailwindCSS
          </p>
        </div>

        <div className="flex flex-col items-center justify-between">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            className="hover:scale-110 duration-300"
          >
            <img
              alt="CSS"
              width={68}
              height={64}
              src="public/logos/icon-CSS3.svg"
            />
          </a>
          <p className="font-normal text-gray-600 tracking-normal text-lg">
            CSS
          </p>
        </div>

        <div className="flex flex-col items-center justify-between">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            className="hover:scale-110 duration-300"
          >
            <img
              alt="HTML"
              width={68}
              height={64}
              src="public/logos/icon-HTML5.svg"
            />
          </a>
          <p className="font-normal text-gray-600 tracking-normal text-lg">
            HTML
          </p>
        </div>

        <div className="flex flex-col items-center justify-between">
          <a
            target="_blank"
            href="https://reactnative.dev/"
            className="hover:scale-110 duration-300"
          >
            <img
              alt="React"
              width={100}
              height={64}
              src="public/logos/icon-react-native.svg"
            />
          </a>
          <p className="font-normal text-gray-600 tracking-normal text-lg">
            React Native
          </p>
        </div>

        <div className="flex flex-col items-center justify-between">
          <a
            target="_blank"
            href="https://nodejs.org/en"
            className="hover:scale-110 duration-300"
          >
            <img
              alt="Node.js"
              width={57}
              height={64}
              src="public/logos/icon-nodejs.svg"
            />
          </a>
          <p className="font-normal text-gray-600 tracking-normal text-lg">
            Node.js
          </p>
        </div>

        <div className="flex flex-col items-center justify-between">
          <a
            target="_blank"
            href="https://expressjs.com/"
            className="hover:scale-110 duration-300"
          >
            <img
              alt="Express.js"
              width={65}
              height={64}
              src="public/logos/icon-express.svg"
            />
          </a>
          <p className="font-normal text-gray-600 tracking-normal text-lg">
            Express.js
          </p>
        </div>

        <div className="flex flex-col items-center justify-between">
          <a
            target="_blank"
            href="https://www.mongodb.com/"
            className="hover:scale-110 duration-300"
          >
            <img
              alt="MongoDB"
              width={31}
              height={64}
              src="public/logos/icon-mongodb.svg"
            />
          </a>
          <p className="font-normal text-gray-600 tracking-normal text-lg">
            MongoDB
          </p>
        </div>

        <div className="flex flex-col items-center justify-between">
          <a
            target="_blank"
            href="https://mongoosejs.com/"
            className="hover:scale-110 duration-300"
          >
            <img
              alt="Mongoose.js"
              width={90}
              height={64}
              src="public/logos/icon-mongoose.svg"
            />
          </a>
          <p className="font-normal text-gray-600 tracking-normal text-lg">
            Mongoose.js
          </p>
        </div>

        <div className="flex flex-col items-center justify-between">
          <a
            target="_blank"
            href="https://git-scm.com/"
            className="hover:scale-110 duration-300"
          >
            <img
              alt="MongoDB"
              width={64}
              height={64}
              src="public/logos/icon-git.svg"
            />
          </a>
          <p className="font-normal text-gray-600 tracking-normal text-lg">
            Git
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
