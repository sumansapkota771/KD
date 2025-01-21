import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion for animation
import partner from '../images/partner.jpg'; // Replace with your image path

const TechPartnerSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    // Apply the animation for the entire section using motion.section
    <motion.section
      className="text-center p-8 font-sans bg-blue-100"
      initial={{ opacity: 0, y: -50 }} // Start from above with 0 opacity
      animate={{ opacity: 1, y: 0 }}   // Fade in and slide to normal position
      transition={{ duration: 5, ease: "easeInOut" }}  // Set the duration to 5 seconds for the whole section
    >
      <h1 className="text-4xl font-bold mb-10 text-gray-800">IF YOU ARE REALLY LOOKING FOR</h1>
      <p className="text-base mx-auto mb-8 leading-relaxed max-w-4xl text-gray-600">
        A long term and dependable partner with expertise in the technology field? Choose One Tech Nepal. We offer
        excellent customer service and high-quality solutions at an affordable price range. If you value reliability
        and quality, we're the right fit for you. Whatsapp us today at 
        <a 
          href="https://wa.me/9779841843316" 
          className="text-blue-500 hover:underline ml-1"
        >
          9779841843316
        </a> 
        to hire us as your brand partner!
      </p>

      {/* Image with hover effect */}
      <div className="relative inline-block mb-8">
        <img
          src={partner} // Replace with your image URL
          alt="Editing Workstation"
          className={`rounded-lg max-w-full h-auto shadow-lg transition-all duration-500 ease-in-out ${
            hovered ? 'scale-110 z-10 filter brightness-110 rounded-3xl shadow-2xl' : 'scale-100 z-0 filter brightness-100 rounded-lg shadow-none'
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      </div>

      <div className="flex justify-center gap-8 mt-8 flex-wrap">
        {[
          "5 Years of Excellence",
          "Nepali IT Engineers & Team",
          "Ethical Work Practices",
          "On Time Delivery",
        ].map((text, index) => (
          <div key={index} className="text-center">
            <span className="text-green-500 text-xl mb-2 block">✔</span>
            <p className="text-sm text-gray-700">{text}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default TechPartnerSection;
