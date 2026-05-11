import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Fake progress loading
    const duration = 2000; // 2 seconds
    const interval = 20;
    const step = 100 / (duration / interval);
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 400); // Wait 0.4s at 100% before firing complete
          return 100;
        }
        return prev + step;
      });
    }, interval);
    
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-[#050014] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Abstract Glowing Rings */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Outer blue ring */}
          <motion.div 
            className="absolute inset-0 rounded-full border-t-2 border-r-2 border-neonBlue opacity-60 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          {/* Inner purple ring */}
          <motion.div 
            className="absolute inset-4 rounded-full border-b-2 border-l-2 border-neonPurple opacity-60 shadow-[0_0_20px_rgba(106,92,255,0.4)]"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          {/* Innermost dashed ring */}
          <motion.div 
            className="absolute inset-8 rounded-full border border-white/20 border-dashed"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Progress Number */}
          <div className="absolute font-bold text-2xl tracking-widest text-white text-glow z-10 flex items-baseline translate-x-2">
            {Math.floor(progress)}
            <span className="text-xs text-neonBlue ml-1 font-normal opacity-70">%</span>
          </div>
        </div>

        {/* Brand Text */}
        <div className="mt-14 overflow-hidden h-8 flex items-center justify-center">
          <motion.h1 
            className="text-base md:text-lg font-extrabold uppercase tracking-[0.4em] text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Code Canvas
          </motion.h1>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-[2px] bg-white/10 mt-8 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-neonBlue to-neonPurple"
            style={{ width: `${progress}%` }}
          />
          {/* Scanning glow effect on the bar */}
          <motion.div
            className="absolute top-0 bottom-0 w-16 bg-white/80 blur-[2px]"
            initial={{ left: '-100%' }}
            animate={{ left: '200%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
      
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonBlue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonPurple/10 rounded-full blur-[120px] pointer-events-none" />
    </motion.div>
  );
};

export default Loader;
