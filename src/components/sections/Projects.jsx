import React from "react";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full pt-20 pb-20 px-4 bg-gray-900 flex flex-col items-center"
    >
      <span className="text-3xl sm:text-4xl poppins-bold text-white mb-2">
        Projects
      </span>
      <span className="text-gray-400 text-base sm:text-xl text-center max-w-xl mb-10">
        Journey from web apps to deployement. Here are some of my projects.
      </span>

      <div className="items-center justify-center gap-6 w-full flex flex-wrap">
        <ProjectCard
          name="Vidcell"
          image="/project/vidcell.mp4"
          liveLink="https://vidcell.vercel.app"
          gitLink="https://github.com/vansh-vm04/vidcell"
          description="VidCell is a real-time video conferencing web app built with Next.js and the Stream Video SDK. It allows users to create and join video meetings with ease, featuring user authentication, smooth UI, and reliable peer-to-peer video communication — ideal for remote collaboration."
          tools={["NextJS", "Clerk", "Tailwind", "Stream SDK"]}
        ></ProjectCard>

        <ProjectCard
          name="Resume Desk"
          image="/project/resume-desk.mp4"
          liveLink="https://resume-desk.vercel.app"
          gitLink="https://github.com/vansh-vm04/resume-desk"
          description="Resume Desk is a web application that helps users create professional resumes quickly and efficiently. It features user authentication, structured data storage with MongoDB, and dynamic resume generation using EJS templates — all accessible through a personalized dashboard."
          tools={["ReactJS", "JWT", "Tailwind", "NodeJS", "MongoDB"]}
        ></ProjectCard>

        <ProjectCard
          name="Netflix Clone (Frontend)"
          image="/project/netflix.mp4"
          liveLink="https://github.com/vansh-vm04/Mini-Projects/tree/main/Netflix-Clone"
          gitLink="https://github.com/vansh-vm04/Mini-Projects/tree/main/Netflix-Clone"
          description="Netflix frontend clone. Built using HTML and CSS."
          tools={["HTML", "CSS"]}
        ></ProjectCard>

      </div>
    </div>
  );
};

export default Projects;
