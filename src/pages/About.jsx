import React from "react";
import { motion } from "framer-motion";
import websiteImage from '../images/website image.avif';
import JohnSmith from '../images/jonesmith.jpg';
import EmilyJohnson from '../images/EmilyJohnson.jpg';
import aboutus from '../images/aboutus-removebg-preview.png'

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Jane Doe",
    role: "CEO & Founder",
    image: websiteImage,
    bio: "Jane leads the team with over 10 years of experience in the tech industry.",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Lead Developer",
    image: JohnSmith,
    bio: "John is an expert in building scalable and innovative solutions.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "UI/UX Designer",
    image: EmilyJohnson,
    bio: "Emily designs intuitive and beautiful user interfaces.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-indigo-100 via-pink-200 to-red-300 py-16 px-6 sm:px-12">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-800 max-w-3xl mx-auto mb-6 leading-relaxed">
          We are a passionate team dedicated to delivering innovative solutions with a focus on collaboration, creativity, and excellence. Let’s create something amazing together!
        </p>

        {/* Centered Image without Animation */}
        <img
          src={aboutus}
          alt="About Us"
          className="w-full max-w-4xl mx-auto rounded-xl shadow-lg mb-8"
        />
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl mx-auto mb-16 transform hover:scale-105 transition-all duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-indigo-700 text-center mb-6">
          Our Mission
        </h2>
        <p className="text-lg text-gray-600 text-center">
          Our mission is to empower businesses with cutting-edge technology and creative solutions, driving growth and fostering innovation in every project we undertake.
        </p>
      </motion.div>

      {/* Team Section */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold text-indigo-700 mb-6">Meet Our Team</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Our team is composed of passionate and talented individuals from diverse backgrounds, each bringing unique skills and perspectives to the table.
        </p>
      </motion.div>

      {/* Team Members */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
            <p className="text-sm text-indigo-600 mb-2">{member.role}</p>
            <p className="text-gray-600 text-sm">{member.bio}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call-to-Action Section */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">
          Ready to Collaborate?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Let’s turn your ideas into reality. Contact us today to start your next project.
        </p>
        <a
          href="/contact"
          className="bg-indigo-600 text-white py-3 px-8 rounded-full font-semibold shadow-md hover:bg-indigo-700 transition"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  );
};

export default About;
