import React from "react";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full pt-20 pb-20 px-4 bg-gradient-to-b from-blue-900 to-purple-700 flex flex-col items-center"
    >
      <span className="text-3xl sm:text-4xl poppins-bold text-white mb-2">
        Projects
      </span>
      <span className="text-gray-300 text-base sm:text-xl text-center max-w-xl mb-10">
        Journey from web apps to deployement. Here are some of my projects.
      </span>

      <div className="items-center justify-center gap-6 w-full flex flex-wrap">
        <ProjectCard
          name="Vidcell"
          image="/project/vidcell.png"
          liveLink="https://vidcell.vercel.app"
          gitLink="https://github.com/vansh-vm04/vidcell"
          description="VidCell is a real-time video conferencing web app built with Next.js and the Stream Video SDK. It allows users to create and join video meetings with ease, featuring user authentication, smooth UI, and reliable peer-to-peer video communication — ideal for remote collaboration."
          tools={["NextJS", "Clerk", "Tailwind", "Stream SDK"]}
        ></ProjectCard>

        <ProjectCard
          name="Profolio"
          image="/project/profolio.png"
          liveLink="https://profolio-app.vercel.app"
          gitLink="https://github.com/vansh-vm04/profolio"
          description="A web application to create, customize, and host portfolios with custom URLs and downloadable PDFs."
          tools={["ReactJS", "JWT", "Tailwind", "NodeJS", "MongoDB"]}
        ></ProjectCard>

        <ProjectCard
          name="Netflix Clone (Frontend)"
          image="/project/netflix.png"
          liveLink="https://github.com/vansh-vm04/Mini-Projects/tree/main/Netflix-Clone"
          gitLink="https://github.com/vansh-vm04/Mini-Projects/tree/main/Netflix-Clone"
          description="Netflix frontend clone. Built using HTML and CSS."
          tools={["HTML", "CSS"]}
        ></ProjectCard>

        <ProjectCard
          name="Image Search App"
          image="/project/getimg.png"
          liveLink="https://get-image-xyz.vercel.app/"
          gitLink="https://github.com/vansh-vm04/Get-Image-App"
          description="Image search app. Built using React, Tailwind and Unsplash image api."
          tools={["React", "Tailwind","REST API"]}
        ></ProjectCard>

      </div>
    </div>
  );
};

export default Projects;
