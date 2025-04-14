import React from "react";

const EducationCard = ({ edu }) => {
  return (
    <div key={edu.index} className="bg-gray-900 p-6 md:px-36 gap-4 flex flex-col rounded-xl hover:shadow-lg shadow-md shadow-purple-900">
        <div className="flex gap-2 items-center">
        <img className="w-10 h-10 rounded-full" src={edu.image} alt="" />
        <h3 className="text-xl font-semibold text-purple-400">{edu.institution}</h3>
        </div>
      
      <p className="text-gray-300">{edu.degree}</p>
      <div className="text-sm text-gray-400 flex flex-col sm:flex-row justify-between mt-2">
        <span>{edu.duration}</span>
        <span>{edu.location}</span>
      </div>
    </div>
  );
};

export default EducationCard;
