import React from "react";
import SkillBox from "../SkillBox";

const Skills = () => {
  const FrontendSkills = [
    { name: "HTML", icon: "/icons/html.png" },
    { name: "CSS", icon: "/icons/css.png" },
    { name: "JavaScript", icon: "/icons/jsIcon.png" },
    { name: "React", icon: "/icons/react.png" },
    { name: "Tailwind", icon: "/icons/tailwind.png" },
  ];

  const Programming = [
    { name: "Java", icon: "/icons/java.png" },
    { name: "JavaScript", icon: "/icons/jsIcon.png" },
    { name: "Python", icon: "/icons/pyIcon.png" },
  ];

  const Backend = [
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongo" },
    { name: "NodeJS", icon: "/icons/nodejs.png" },
    { name: "ExpressJS", icon: "https://skillicons.dev/icons?i=expressjs" },
    { name: "Rest APIs", icon: "/icons/restapi.png" },
  ];

  const Tools = [
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Postman",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
    {
      name: "MongoDB Compass",
      icon: "https://skillicons.dev/icons?i=mongodb",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Docker",
      icon: "https://skillicons.dev/icons?i=docker",
    },
    {
      name: "Clerk",
      icon: "/icons/clerkauth.png",
    },
    {
      name: "Render",
      icon: "/icons/render.jpeg",
    },
    {
      name: "Vercel",
      icon: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "npm",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    },
  ];

  return (
    <div id="skills"  className="w-full pt-20 pb-20 px-4 bg-gradient-to-t to-violet-950 from-gray-950 flex flex-col items-center">
      <span
        
        className="text-3xl sm:text-4xl poppins-bold text-white mb-2"
      >
        Skills
      </span>
      <span className="text-gray-400 text-base sm:text-xl text-center max-w-xl mb-10">
        Here are some of my skills which I have developed out of curiosity.
      </span>

      {/* Skill Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4">
        {/* Frontend Section */}
        <div className="rounded-lg p-6 flex flex-col gap-4 border-purple-600 border-2 shadow-purple-400 shadow-md bg-gray-800 items-center">
          <span className="text-center text-gray-300 font-bold text-xl sm:text-2xl">
            Frontend
          </span>
          <div className="gap-4 justify-center flex flex-wrap w-full">
            {FrontendSkills.map((skill, index) => (
              <SkillBox key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        {/* Programming Languages Section */}
        <div className="rounded-lg p-6 flex flex-col gap-4 border-purple-600 border-2 shadow-purple-400 shadow-md bg-gray-800 items-center">
          <span className="text-center text-gray-300 font-bold text-xl sm:text-2xl">
            Programming Languages
          </span>
          <div className="gap-4 justify-center flex flex-wrap w-full">
            {Programming.map((skill, index) => (
              <SkillBox key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        <div className="rounded-lg p-6 flex flex-col gap-4 border-purple-600 border-2 shadow-purple-400 shadow-md bg-gray-800 items-center">
          <span className="text-center text-gray-300 font-bold text-xl sm:text-2xl">
            Backend
          </span>
          <div className="gap-4 justify-center flex flex-wrap w-full">
            {Backend.map((skill, index) => (
              <SkillBox key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        <div className="rounded-lg p-6 flex flex-col gap-4 border-purple-600 border-2 shadow-purple-400 shadow-md bg-gray-800 items-center">
          <span className="text-center text-gray-300 font-bold text-xl sm:text-2xl">
            Tools & Others
          </span>
          <div className="gap-4 justify-center flex flex-wrap w-full">
            {Tools.map((skill, index) => (
              <SkillBox key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
