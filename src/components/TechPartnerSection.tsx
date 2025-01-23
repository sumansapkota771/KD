import React, { useState } from "react";
import { motion } from "framer-motion";
import partner from "../images/partner.jpg"; // Replace with your image path

const TechPartnerSection = () => {
  const [hovered, setHovered] = useState(false);

  // Animation Variants for reusability
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="text-center bg-gradient-to-b from-blue-100 via-blue-50 to-white p-10 font-sans relative overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Floating animated sparkles */}
      {Array.from({ length: 30 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute bg-gradient-to-r from-pink-400 to-yellow-500 rounded-full opacity-50"
          style={{
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: ["0%", "50%", "0%"],
            x: ["0%", "25%", "-25%"],
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
      ))}

      <motion.h1
        className="text-4xl font-extrabold mb-10 text-gray-800"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.2 }}
      >
        IF YOU ARE REALLY LOOKING FOR
      </motion.h1>

      <motion.p
        className="text-lg mx-auto mb-10 leading-relaxed max-w-4xl text-gray-700"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.4 }}
      >
        A long-term and dependable partner with expertise in the technology field? Choose One Tech Nepal. We offer
        excellent customer service and high-quality solutions at an affordable price range. If you value reliability
        and quality, we're the right fit for you. Whatsapp us today at
        <a
          href="https://wa.me/9779841843316"
          className="text-blue-500 hover:underline ml-1"
        >
          9779841843316
        </a>
        to hire us as your brand partner!
      </motion.p>

      {/* Animated Image */}
      <motion.div
        className="relative inline-block mb-12"
        whileHover={{ scale: 1.1, rotate: 2 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <img
          src={partner}
          alt="Editing Workstation"
          className={`rounded-2xl max-w-full h-auto shadow-xl transition-all duration-500 ease-in-out ${
            hovered ? "brightness-110" : "brightness-100"
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      </motion.div>

      {/* Features with animations */}
      <motion.div
        className="flex justify-center gap-8 mt-8 flex-wrap"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {[
          "5 Years of Excellence",
          "Nepali IT Engineers & Team",
          "Ethical Work Practices",
          "On-Time Delivery",
        ].map((text, index) => (
          <motion.div
            key={index}
            className="text-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-green-500 text-2xl mb-2 block">✔</span>
            <p className="text-sm text-gray-700">{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TechPartnerSection;
