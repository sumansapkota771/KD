import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProductDevelopmentTimeline = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  const [animationFinished, setAnimationFinished] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationFinished(true); // Stop cursor blinking when animation is done
  };

  return (
    <motion.section className="bg-green-50 py-16 px-4">
      <div className="text-center mb-12">
        <motion.h2
          ref={headingRef}
          className={`text-4xl font-bold text-gray-800 ${headingInView ? (animationFinished ? "typewriter-finished-paused" : "typewriter-effect") : ""}`}
          onAnimationEnd={handleAnimationComplete} // Set state when animation ends
        >
          Product Development Timeline
        </motion.h2>
        <p className="text-lg text-gray-600 mt-4">A step-by-step guide to how we build your product</p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-8">
          {/* Left column for steps */}
          <div className="relative flex flex-col justify-between items-center h-full">
            {/* Connecting vertical line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-300"></div>

            {/* Steps */}
            {[ref1, ref2, ref3, ref4, ref5].map((ref, index) => (
              <motion.div
                key={index}
                ref={ref}
                className="relative z-10"
                initial={{ opacity: 0, x: -100 }}
                animate={eval(`inView${index + 1}`) ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1 }}
              >
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right column for content */}
          <div className="col-span-2 flex flex-col justify-between space-y-8">
            {[ref1, ref2, ref3, ref4, ref5].map((ref, index) => (
              <motion.div
                key={index}
                ref={ref}
                className="text-left"
                initial={{ opacity: 0, x: 100 }}
                animate={eval(`inView${index + 1}`) ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1 }}
              >
                <h3
                  className="text-xl font-bold text-green-600"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {["Research & Discovery", "Design & Prototyping", "Development", "Testing & QA", "Launch"][index]}
                </h3>
                <p className="text-gray-600 mt-2">
                  {[
                    "We understand your requirements and analyze the market and competitors to identify the best approach for your product.",
                    "Our design team creates intuitive and user-friendly prototypes to visually demonstrate your product’s features.",
                    "We begin coding, ensuring a smooth and functional product through collaborative teamwork and regular testing.",
                    "Rigorous testing is done to ensure the product is bug-free and meets all requirements for a flawless user experience.",
                    "Once everything is perfect, we launch your product, ensuring the best performance and smooth user experience.",
                  ][index]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductDevelopmentTimeline;
