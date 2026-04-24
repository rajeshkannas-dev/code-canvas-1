import React from 'react';
import { motion } from 'framer-motion';

const tech = ["React", "Three.js", "GSAP", "Tailwind", "Figma", "Node.js", "Next.js", "WebGL"];

const TechStack = () => {
  return (
    <section className="relative w-full py-24 px-8 md:px-24 z-10 pointer-events-none">
      <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-glow-purple pointer-events-auto">Tech Stack</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pointer-events-auto">
        {tech.map((item, idx) => (
          <motion.div
            key={idx}
            className="h-24 glass-card border border-white/10 flex items-center justify-center hover:border-neonPurple hover:bg-neonPurple/10 transition-colors duration-300 cursor-default"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-xl font-semibold text-gray-300 hover:text-white transition-colors">{item}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
