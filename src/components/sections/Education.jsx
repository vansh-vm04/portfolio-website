import React from "react";
import EducationCard from "../EducationCard";

const Education = () => {
    const educationData = [
        {
          index:1,
          degree: "Bachelor of Technology in Computer Science",
          institution: "Jecrc University",
          duration: "2022 - 2026",
          location: "Jaipur, Rajasthan",
          image:"/jecrc.png"
        },
        {
          index:2,
          degree: "CBSE (Class 12)",
          institution: "Gyan Vihar School",
          duration: "2021-2022",
          location: "Jaipur, Rajasthan",
          image:"/gv.jpeg"
        },
        {
            index:3,
            degree: "CBSE (Class 10)",
            institution: "Gyan Vihar School",
            duration: "2019-2020",
            location: "Jaipur, Rajasthan",
            image:"/gv.jpeg"
        },
      ];

  return (
    <div
      id="education"
      className="w-full pt-20 pb-20 px-4 bg-gray-900 flex flex-col items-center"
    >
      <span className="text-3xl sm:text-4xl poppins-bold text-white mb-2">
        Education
      </span>
      <span className="text-gray-400 text-base sm:text-xl text-center max-w-xl mb-10">
        My education journey.
      </span>

      <div className="flex flex-col gap-8">
      {educationData.map(edu=>(
        <EducationCard key={edu.index} edu={edu}/>
      ))}
      </div>
      

    </div>
  );
};

export default Education;
