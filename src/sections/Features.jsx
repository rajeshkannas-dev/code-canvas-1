import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Layout, Monitor, Lightbulb } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="relative w-full min-h-[80vh] py-24 px-8 z-10 flex flex-col items-center justify-center overflow-hidden pointer-events-none">
      <h2 className="text-4xl md:text-6xl font-bold mb-24 text-glow-purple">Core Features</h2>
      
      <div className="relative w-[300px] h-[300px] flex items-center justify-center pointer-events-auto">
        {/* Core Element */}
        <motion.div 
          className="absolute w-24 h-24 bg-neonPurple rounded-full blur-xl opacity-50"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute w-16 h-16 bg-white rounded-full flex items-center justify-center z-10 shadow-[0_0_30px_#6a5cff]">
          <span className="text-darkBg font-bold text-xl">CORE</span>
        </div>

        {/* Orbiting Elements */}
        <OrbitingIcon icon={<Zap />} label="Performance" delay={0} />
        <OrbitingIcon icon={<Layout />} label="UI/UX" delay={-2} />
        <OrbitingIcon icon={<Monitor />} label="Scalability" delay={-4} />
        <OrbitingIcon icon={<Lightbulb />} label="Innovation" delay={-6} />
      </div>
    </section>
  );
};

const OrbitingIcon = ({ icon, label, delay }) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 w-4 h-4 -ml-2 -mt-2"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear", delay }}
    >
      <div className="absolute top-[-120px] left-[-20px] group cursor-default">
        <motion.div 
          className="w-12 h-12 bg-darkBg border border-neonPurple rounded-full flex items-center justify-center text-neonPurple neon-glow-purple"
          whileHover={{ scale: 1.2, backgroundColor: "#6a5cff", color: "#fff" }}
        >
          {icon}
        </motion.div>
        <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap top-14 left-1/2 -translate-x-1/2 text-sm font-bold text-glow-purple">
          {label}
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
