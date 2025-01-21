import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';

import logo from '../images/Logo-02 (2).png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              {/* <Code2 className="h-8 w-8 text-blue-600" /> */}
              <span className="font-bold text-xl text-gray-900">
              <img src={logo} alt="Logo" className="h-20 mr-2" /></span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                {item}
              </a>
            ))}
            <button className="w-full text-left block px-3 py-2 text-white bg-blue-600 rounded-md font-medium">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;