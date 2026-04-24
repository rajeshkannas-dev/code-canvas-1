import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center px-8 md:px-24 z-10 pointer-events-none">
      <div className="w-full md:w-1/2 pointer-events-auto mt-12 md:mt-16">
        

        {/* Headline */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-8 font-sans leading-tight uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-white">Let's Help</div>
          <div className="text-white">Technology Meet</div>
          <div className="text-neonBlue mt-2 text-glow">Innovators</div>
        </motion.h1>
        
        {/* Paragraph */}
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed"
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
