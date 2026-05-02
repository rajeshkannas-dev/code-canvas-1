import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import CanvasContainer from './components/CanvasContainer';
import Navbar from './components/Navbar';
import Loader from './components/Loader';

import Hero from './sections/Hero';
import Services from './sections/Services';
import Process from './sections/Process';
import Features from './sections/Features';
import ProjectShowcase from './sections/ProjectShowcase';
import TechStack from './sections/TechStack';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import FooterCTA from './sections/FooterCTA';
import Footer from './sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <SmoothScroll>
      <CustomCursor />
      <CanvasContainer />
      <Navbar />
      <main className="relative z-10 w-full font-sans">
        <Hero />
        <div className="bg-darkBg/80 backdrop-blur-sm relative z-10">
          <Services />
          <Process />
          <Features />
          <ProjectShowcase />
          <TechStack />
          <Testimonials />
          <FAQ />
          <FooterCTA />
          <Footer />
        </div>
      </main>
    </SmoothScroll>
    </>
  );
}

export default App;
