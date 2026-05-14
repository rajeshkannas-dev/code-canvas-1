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
    <section className="relative w-full py-24 px-4 md:px-12 lg:px-24 z-10 pointer-events-none">
      <div className="w-full text-center mb-16 md:mb-28 pointer-events-auto z-10 relative">
        <h2 className="text-lg md:text-2xl font-extrabold uppercase tracking-[0.2em] text-glow-indigo inline-block relative">
          Tech Stack
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-brandIndigo to-transparent opacity-50"></span>
        </h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pointer-events-auto">
        {tech.map((item, idx) => {
          const Icon = item.icon;
          return (
              <motion.div
              key={idx}
              className="h-28 glass-card border border-white/10 flex flex-col items-center justify-center gap-3 hover:border-brandIndigo hover:bg-brandIndigo/10 transition-colors duration-300 cursor-default group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 300 }}
            >
              <Icon className="w-8 h-8 text-slate-400 group-hover:text-brandIndigo transition-colors duration-300" strokeWidth={1.5} />
              <span className="text-sm font-medium text-slate-500 group-hover:text-slate-300 transition-colors duration-300">{item.name}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;
