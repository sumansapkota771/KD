import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import logo from '../images/Logo-02 (2).png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white bg-opacity-10 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Link to="/" aria-label="Go to homepage">
                <img
                  src={logo}
                  alt="Homepage Logo"
                  className="h-20 w-auto"
                  loading="lazy"
                />
              </Link>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }} // Adding scale effect on hover for items
                className="relative group"
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-green-600 font-medium"
                >
                  {item}
                </Link>
                {/* Smooth underline animation on hover */}
                <span className="absolute left-0 bottom-0 w-full h-px bg-green-600 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
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
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
