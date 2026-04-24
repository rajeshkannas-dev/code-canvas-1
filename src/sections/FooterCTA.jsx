import React from 'react';
import { motion } from 'framer-motion';

const FooterCTA = () => {
  return (
    <section id="contact" className="relative w-full py-32 px-8 z-10 flex flex-col items-center justify-center overflow-hidden pointer-events-none">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <motion.div 
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-neonBlue rounded-full blur-[100px]"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-neonPurple rounded-full blur-[100px]"
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 5 }}
        />
      </div>

      <div className="relative z-10 text-center pointer-events-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">Let's Build Your Next<br/><span className="text-glow">Digital Experience</span></h2>
        
        <motion.button
          className="mt-8 px-12 py-5 bg-white text-darkBg font-bold text-xl rounded-full hover:shadow-[0_0_40px_#00f0ff] transition-shadow duration-300 relative group overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 group-hover:opacity-0 transition-opacity">Start Project</span>
          <div className="absolute inset-0 bg-gradient-to-r from-neonBlue to-neonPurple opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
          <span className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300">Start Project</span>
        </motion.button>
      </div>

      <div className="absolute bottom-8 text-gray-500 text-sm pointer-events-auto">
        © 2026 Code Canvas Agency. All rights reserved.
      </div>
    </section>
  );
};

export default FooterCTA;
