import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import CanvasContainer from './components/CanvasContainer';
import Navbar from './components/Navbar';
import Loader from './components/Loader';

import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import PolicyPage from './pages/PolicyPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

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

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.glass-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <ScrollToTop />
      <SmoothScroll>
      <CustomCursor />
      <CanvasContainer />
      <Navbar />
      <main className="relative z-10 w-full font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<PolicyPage title="Terms and Conditions" />} />
          <Route path="/privacy" element={<PolicyPage title="Privacy Policy" />} />
          <Route path="/refund" element={<PolicyPage title="Refund Policy" />} />
        </Routes>
      </main>
    </SmoothScroll>
    </>
  );
}

export default App;
