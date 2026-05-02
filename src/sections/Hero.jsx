import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center px-8 md:px-24 z-10 pointer-events-none">
      <div className="w-full md:w-1/2 pointer-events-auto mt-12 md:mt-16">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 origin-left"
        >
          <div className="relative inline-block group cursor-default hover:scale-105 transition-transform duration-500">
            {/* Default State (Before Hover) */}
            <h1 className="text-3xl md:text-5xl font-bold font-sans leading-tight uppercase transition-opacity duration-500 group-hover:opacity-0 flex flex-col">
              <div className="text-white">Let's Help</div>
              <div className="text-white">Technology Meet</div>
              <div className="mt-2 text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonBlue drop-shadow-[0_0_8px_rgba(0,240,255,0.3)]">Innovators</div>
            </h1>

            {/* Hover State (Vertical Gradient) */}
            <h1 className="absolute top-0 left-0 w-full h-full text-3xl md:text-5xl font-bold font-sans leading-tight uppercase transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none bg-gradient-to-b from-neonPurple to-neonBlue bg-clip-text text-transparent flex flex-col">
              <div>Let's Help</div>
              <div>Technology Meet</div>
              <div className="mt-2">Innovators</div>
            </h1>
          </div>
        </motion.div>
        
        {/* Paragraph */}
        <motion.p 
          className="text-sm md:text-base text-gray-300 mb-10 max-w-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Technology empowers people, and they can be creative and productive. People can learn things they might not have thought possible; it's all about potential.
        </motion.p>
        
        {/* Button */}
        <motion.button
          className="px-10 py-3 bg-transparent border-2 border-neonBlue text-neonBlue font-semibold rounded-full hover:bg-neonBlue hover:text-darkBg transition-all duration-300 neon-glow tracking-widest text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          EXPLORE
        </motion.button>

      </div>
    </section>
  );
};

export default Hero;
