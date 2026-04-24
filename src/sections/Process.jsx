import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { title: "Idea", desc: "Conceptualizing the futuristic vision." },
  { title: "Design", desc: "Crafting the immersive UI/UX." },
  { title: "Develop", desc: "Building with cutting-edge tech." },
  { title: "Launch", desc: "Deploying to the digital universe." }
];

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" ref={containerRef} className="relative w-full min-h-screen py-24 px-8 md:px-24 z-10 bg-darkBg/80 backdrop-blur-sm">
      <h2 className="text-4xl md:text-6xl font-bold mb-24 text-center text-glow">Our Process</h2>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/10 rounded-full">
          <motion.div 
            className="w-full bg-neonBlue rounded-full neon-glow"
            style={{ height: lineHeight }}
          />
        </div>

        {steps.map((step, index) => (
          <motion.div 
            key={index}
            className={`flex items-center justify-between w-full mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-5/12" />
            <div className="w-2/12 flex justify-center z-10">
              <div className="w-6 h-6 rounded-full bg-darkBg border-4 border-neonBlue neon-glow" />
            </div>
            <div className="w-5/12 glass-card neon-border hover:scale-105 transition-transform duration-300 cursor-default">
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
