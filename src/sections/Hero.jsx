import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[100svh] flex items-center px-4 md:px-12 lg:px-24 z-10 pointer-events-none pb-20 md:pb-0 pt-24 md:pt-0">
      
      {/* Subtle Background Layers - carefully placed to not block the 3D scene on the right */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft radial gradient strictly behind text */}
        <div className="absolute left-0 top-0 w-[100%] md:w-[80%] h-full bg-[radial-gradient(ellipse_at_left_center,_rgba(10,10,10,0.8),_transparent_70%)]" />
        
        {/* Transparent grid and noise */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-30" />
        
        {/* Animated Orbs - strictly on the left/top-left */}
        <motion.div 
          className="absolute -top-10 md:-top-20 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-brandIndigo/20 rounded-full blur-[80px] md:blur-[100px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/4 left-[10%] md:left-[20%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brandCyan/10 rounded-full blur-[90px] md:blur-[120px]"
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="relative w-full md:w-[70%] lg:w-[60%] z-10 pointer-events-auto mt-12 md:mt-16">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 origin-left"
        >
          <div className="relative inline-block group cursor-default hover:scale-105 transition-transform duration-500">
            {/* Default State (Before Hover) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight uppercase transition-opacity duration-500 group-hover:opacity-0 flex flex-col">
              <div className="text-white">Let's Help</div>
              <div className="text-white">Technology Meet</div>
              <div className="mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brandIndigo to-brandCyan drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]">Innovators</div>
            </h1>

            {/* Hover State (Vertical Gradient) */}
            <h1 className="absolute top-0 left-0 w-full h-full text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight uppercase transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none bg-gradient-to-b from-brandIndigo to-brandCyan bg-clip-text text-transparent flex flex-col">
              <div>Let's Help</div>
              <div>Technology Meet</div>
              <div className="mt-2">Innovators</div>
            </h1>
          </div>
        </motion.div>
        
        {/* Paragraph */}
        <motion.p 
          className="text-sm md:text-base text-slate-400 mb-10 max-w-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Technology empowers people, helping them become more creative and productive. People can learn things they never thought possible — it’s all about unlocking potential.
        </motion.p>
        
        {/* Button */}
        <motion.button
          className="px-8 py-3 bg-transparent border border-brandCyan text-brandCyan font-semibold rounded-full hover:bg-brandCyan hover:text-darkBg transition-all duration-300 brand-glow tracking-widest text-sm"
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
