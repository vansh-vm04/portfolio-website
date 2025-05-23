import React from "react";
import { Typewriter } from "react-simple-typewriter";
import {motion} from "framer-motion";
const env = import.meta.env;

const About = () => {
  return (
    <div>
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="pt-36 px-4 min-h-screen pb-[64px] w-full bg-gradient-to-br from-blue-900 to-purple-900 flex flex-col-reverse lg:flex-row items-center justify-center gap-10"
      >
        {/* Text Content */}
        <div className="flex flex-col gap-6 w-full md:w-2/3 lg:w-1/2 text-center lg:text-left">
          <span className="text-4xl sm:text-5xl font-bold text-white">
            Hey, I am{" "}
            <span className="text-4xl sm:text-5xl font-bold text-nowrap text-white">
              Vansh Morwani
            </span>
          </span>

          <span className="text-2xl sm:text-3xl font-semibold text-white">
            I am a{" "}
            <span className="text-2xl sm:text-3xl font-semibold text-purple-400">
              <Typewriter
                words={[
                  "Web Developer",
                  "Backend Developer",
                  "Problem Solver",
                  "Frontend Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </span>

          <span className="text-gray-300 text-lg sm:text-2xl">
            A web developer who can build industry level web applications. I
            juggle backend, frontend, databases and problem solving. Currently,
            I am enhancing my proficiency in Data Structures and Algorithms,
            alongside strengthening my backend development skills.
          </span>
          {/* Live resume link */}
          <a target="_blank" href={env.VITE_RESUME_LINK}>
            <button className="transition duration-200 ease-in hover:-translate-y-1 hover:scale-110 hover:ease-in hover:cursor-pointer hover:duration-200 relative inline-flex max-w-fit mx-auto lg:mx-0 items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-400 to-purple-600 group-hover:from-pink-400 group-hover:to-purple-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="text-xl relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md text-white group-hover:bg-transparent group-hover:dark:bg-transparent">
                Check Resume
              </span>
            </button>
          </a>
        </div>

        {/* Image */}
        <div>
          <img
            src="/vansh-dp2.jpg"
            alt="Vansh Morwani"
            className="w-60 hover:duration-200 hover:ease-in duration-200 ease-in sm:w-72 md:w-80 lg:w-96 rounded-full border-2 border-purple-500"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
