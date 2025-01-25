import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import videoSource from '../images/Untitled design (1).mp4'; // Update the path to your video file

// Import technology stack logos
import reactLogo from '../images/react-logo.png';
import cssLogo from '../images/css-logo.png';
import pythonLogo from '../images/python-logo.png';
import gitLogo from '../images/git-logo.png';
import nodeLogo from '../images/node-logo.svg';
import jsLogo from '../images/js-logo.webp';
import htmlLogo from '../images/html-logo.webp';
import seoLogo from '../images/seo-logo.png';
import wordpressLogo from '../images/wordpress-logo.png';
import angularLogo from '../images/angular-logo.webp';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef(null);
  const videoRef = useRef(null); // Ref for video element
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (imageRef.current) {
      const { width, height } = imageRef.current.getBoundingClientRect();
      setImageDimensions({ width, height });
    }
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow down the video playback speed
    }
  }, []);

  const technologyLogos = [
    reactLogo,
    cssLogo,
    pythonLogo,
    gitLogo,
    nodeLogo,
    jsLogo,
    htmlLogo,
    seoLogo,
    wordpressLogo,
    angularLogo,
  ];

  const getRandomPosition = () => {
    const margin = 40;
    const { width, height } = imageDimensions;
    const x = Math.random() * (width - margin * 2) + margin;
    const y = Math.random() * (height - margin * 2) + margin;
    const rotate = Math.random() * 20 - 10;
    const transformOrigin = `${Math.random() * 100}% ${Math.random() * 100}%`;

    return { x, y, rotate, transformOrigin };
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center px-6 sm:px-12">
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl min-h-screen"
        animate={{
          x: [0, 10, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Welcome Text - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-snug">
            Welcome To{' '}
            <span className="text-green-600">Kode</span>
            <span className="text-blue-600">Dristi</span> Softwares
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">Your Idea to Our Code.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium flex items-center mx-auto lg:mx-0"
          >
            Get Started <ChevronRight className="ml-2" />
          </motion.button>
        </motion.div>

        {/* Right Side Content - Video with Animation */}
        <div className="lg:w-1/2 relative perspective-container" ref={imageRef}>
          <motion.div
            className="w-full sm:w-[80%] lg:w-[120%] h-auto mx-auto"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={{
              x: [0, 5, 0],
              y: [0, 5, 0],
            }}
            transition={{
              duration: 6, // Slowed down the animation duration
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <video
              ref={videoRef}
              src={videoSource}
              autoPlay
              muted
              loop
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>

          {/* Random Animated Logos */}
          {technologyLogos.map((logo, index) => {
            const randomStartPosition = getRandomPosition();
            const randomEndPosition = getRandomPosition();
            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  zIndex: -1,
                  left: `${randomStartPosition.x}px`,
                  top: `${randomStartPosition.y}px`,
                  transformOrigin: randomStartPosition.transformOrigin,
                  rotate: `${randomStartPosition.rotate}deg`,
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1],
                  x: [randomStartPosition.x, randomEndPosition.x],
                  y: [randomStartPosition.y, randomEndPosition.y],
                  rotate: [randomStartPosition.rotate, randomEndPosition.rotate],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6 + Math.random() * 3,
                  ease: 'easeInOut',
                  repeatDelay: 0,
                }}
              >
                <img src={logo} alt="Technology Stack" className="w-10 h-10 object-contain" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
