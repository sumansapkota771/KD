// import React from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
// import StatSection from './components/StatSection';
// import { StickyScrollRevealDemo } from './components/StickyScrollRevealDemo';
import TechPartnerSection from './components/TechPartnerSection'
import AlternateTimeline from './components/ui/AlternateTimeline';
import ProductDevelopmentTimeline from './components/ProductDevelopmentTimeline';

// import TimelineDemo from './components/TimelineDemo';






function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
       <TechPartnerSection/>
       {/* <AlternateTimeline/> */}
       <ProductDevelopmentTimeline/>
    
      <Footer />
    </div>
  );
}

export default App;