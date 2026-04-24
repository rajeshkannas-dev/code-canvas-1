import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import CanvasContainer from './components/CanvasContainer';
import Navbar from './components/Navbar';

import Hero from './sections/Hero';
import Services from './sections/Services';
import Process from './sections/Process';
import Features from './sections/Features';
import ProjectShowcase from './sections/ProjectShowcase';
import TechStack from './sections/TechStack';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import FooterCTA from './sections/FooterCTA';

function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <CanvasContainer />
      <Navbar />
      <main className="relative z-10 w-full font-sans">
        <Hero />
        <Services />
        <Process />
        <Features />
        <ProjectShowcase />
        <TechStack />
        <Testimonials />
        <FAQ />
        <FooterCTA />
      </main>
    </SmoothScroll>
  );
}

export default App;
