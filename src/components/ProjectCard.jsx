import React from 'react'

const ProjectCard = ({ image, liveLink, gitLink, name, description, tools }) => {
  return (
    <div className="hover:border-purple-500 hover:shadow-purple-400 hover:shadow-sm rounded-xl shadow-lg w-[332px] h-[544px] gap-4 bg-gray-950 flex flex-col shadow-blue-950 p-4 overflow-hidden">
      {/* Image */}
      <img className="h-[196px] rounded-lg object-contain" src={image} alt={name} />

      {/* Project Name */}
      <span className="text-gray-400 text-xl font-bold">{name}</span>

      {/* Tools */}
      <div className="w-full flex flex-wrap gap-y-1">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="bg-blue-950 max-w-fit text-blue-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-950 dark:text-blue-600"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Description */}
      <span className="text-gray-500 text-lg sm:text-lg max-w-xl overflow-hidden text-ellipsis line-clamp-3">
        {description}
      </span>

      {/* Buttons */}
      <div className="flex gap-2 items-center justify-center mt-4">
        <a href={gitLink} target="_blank" rel="noreferrer">
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 hover:cursor-pointer"
          >
            View Code
          </button>
        </a>
        <a href={liveLink} target="_blank" rel="noreferrer">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none hover:cursor-pointer">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              View Live
            </span>
          </button>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard;
