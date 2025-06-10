import React from "react";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {motion} from "framer-motion";

const SideComponent = () => {
    const links = [
    {
      id: 1,
      icon: <FaGithub size={24} />,
      url: "https://github.com/vansh-vm04",
      name: "GitHub",
    },
    {
      id: 2,
      icon: <SiLeetcode size={24} />,
      url: "https://leetcode.com/vansh2704",
      name: "LeetCode",
    },
    {
      id: 3,
      icon: <FaLinkedin size={24} />,
      url: "https://linkedin.com/in/vansh027",
      name: "LinkedIn",
    },
  ];

  return (
    <motion.div
        id="links"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeIn",
        }}
        viewport={{ once: true }} className="max-md:hidden fixed top-1/3 left-3 z-50 flex flex-col gap-4">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-all"
        >
          <span className="bg-white shadow-md p-2 rounded-full hover:bg-indigo-100">
            {link.icon}
          </span>
        </a>
      ))}
    </motion.div>
  );
};

export default SideComponent;
