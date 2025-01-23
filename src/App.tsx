// import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import TechPartnerSection from './components/TechPartnerSection'
import ProductDevelopmentTimeline from './components/ProductDevelopmentTimeline';

function App() {
  return (
   <Router><div className="min-h-screen bg-white">
      <Navbar />
       <HeroSection />
       <TechPartnerSection/>
       <ProductDevelopmentTimeline/>
      <Footer />
    </div>  
    </Router> 
  );
}

export default App;