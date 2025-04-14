import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className= "pt-4 shadow-sm dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="#about"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-purple-500">
                Vansh Morwani
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#about" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:underline me-4 md:me-6">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:underline me-4 md:me-6">
                  Projects
                </a>
              </li>
              <li>
                <a href="#education" className="hover:underline me-4 md:me-6">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline me-4 md:me-6">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="#about" className="hover:underline">
              Vansh Morwani
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
