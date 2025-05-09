import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

import logo from "../images/Logo-02 (2).png";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-10">
          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl text-gray-900">
                <img src={logo} alt="Logo" className="h-20 mr-2" />
              </span>
            </div>
            <p className="text-gray-400">
              Transforming visions into exceptional digital experiences.
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-4 md:col-start-6 ">
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "Consulting",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-black">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect - shifted right */}
          <div className="md:col-span-4 md:col-start-11">
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              {[Github, Twitter, Linkedin, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-black"
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} KodeDristi . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
