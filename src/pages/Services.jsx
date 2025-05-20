import React from "react";
import { motion } from "framer-motion";
import webdev from "../images/web_dev.png";
import ecommerce from "../images/e-commerce.png";
import appdev from "../images/appdev.png";
import brand from "../images/branding.png";
import seo from "../images/seo.png";
import annualmaintain from "../images/annualmaintain.png";

const portfolioItems = [
  {
    id: 1,
    title: "Web Design Project",
    description: "A modern and responsive web design for a startup.",
    image: webdev,
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "An e-commerce platform with seamless UX/UI.",
    image: ecommerce,
  },
  {
    id: 3,
    title: "Mobile App Design",
    description: "A sleek mobile app design for fitness enthusiasts.",
    image: appdev,
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategy for a brand.",
    image: brand,
  },
  {
    id: 5,
    title: "SEO Optimization",
    description: "SEO strategies to boost online visibility.",
    image: seo,
  },
  {
    id: 6,
    title: "Web Hosting",
    description: "Reliable web hosting solutions for businesses.",
    image: annualmaintain,
  },
];

const Services = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const to = "dristicode@gmail.com";
    const subject = encodeURIComponent("Inquiry from Kodedristi Website");
    const body = encodeURIComponent("Hello Kodedristi Team,");
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <div className="pt-40 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-4 sm:px-8">
      {/* Page Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="mt-4 text-gray-600">
          Take a look at some of our recent projects and designs.
        </p>
      </motion.div>

      {/* Portfolio Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call-to-Action */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl  font-bold text-gray-800">
          Interested in working with us?
        </h2>
        <p className="text-gray-600 mt-2">
          Let’s bring your ideas to life with our expertise.
        </p>
        
        <button
          onClick={handleClick}
          className="mt-4 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg font-medium shadow-md hover:bg-blue-700 transition"
        >
          Get in Touch
        </button>
      </motion.div>
    </div>
  );
};

export default Services;
