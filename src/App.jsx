import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import TechPartnerSection from "./components/TechPartnerSection";
import ProductDevelopmentTimeline from "./components/ProductDevelopmentTimeline";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio"; // Import Portfolio
import About from "./pages/About"; // Import About
import Contact from "./pages/Contact"; // Import Contact
import SideIcons from "./components/sideIcons";
import { useRef } from "react";
import { motion } from "framer-motion";


function App() {
  const timelineRef = useRef(null);

  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Navbar (always visible) */}
        <Navbar />
        <SideIcons />

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection  scrollToTimeline={() => timelineRef.current?.scrollIntoView({ behavior: "smooth" })} />
                  
                  <TechPartnerSection />
                  <div ref={timelineRef}>
                    <ProductDevelopmentTimeline />
                  </div>
                </>
              }
            />

            {/* Independent Pages */}
            <Route path="/services" element={<Services />} />
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>

        {/* Footer (always visible) */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
