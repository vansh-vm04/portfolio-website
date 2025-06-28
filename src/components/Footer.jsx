import React from "react";
import { github } from "../utils/data";

const Footer = () => {
  return (
    <div>
      <footer className= "shadow-sm py-4 bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto ">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Built and Designed By {" "}<a className="text-purple-500" href={github}>Vansh</a>
          </span>
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "} All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
