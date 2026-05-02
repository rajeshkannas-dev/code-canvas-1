import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Hexagon, Zap, Wind, PenTool, Server, FastForward, Atom } from 'lucide-react';

const tech = [
  { name: "Unity", icon: Gamepad2 },
  { name: "Three.js", icon: Hexagon },
  { name: "GSAP", icon: Zap },
  { name: "Tailwind", icon: Wind },
  { name: "Figma", icon: PenTool },
  { name: "Node.js", icon: Server },
  { name: "Next.js", icon: FastForward },
  { name: "React", icon: Atom },
];

const TechStack = () => {
  return (
    <section className="relative w-full py-24 px-8 md:px-24 z-10 pointer-events-none">
      <div className="w-full text-center mb-20 md:mb-28 pointer-events-auto z-10 relative">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-[0.2em] text-glow-purple inline-block relative">
          Tech Stack
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-neonPurple to-transparent opacity-50"></span>
        </h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pointer-events-auto">
        {tech.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              className="h-28 glass-card border border-white/10 flex flex-col items-center justify-center gap-3 hover:border-neonPurple hover:bg-neonPurple/10 transition-colors duration-300 cursor-default group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="w-8 h-8 text-gray-400 group-hover:text-neonPurple transition-colors duration-300" strokeWidth={1.5} />
              <span className="text-sm md:text-base font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">{item.name}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;
