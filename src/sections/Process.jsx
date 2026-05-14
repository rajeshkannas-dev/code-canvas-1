import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { title: "Idea", desc: "Conceptualizing the futuristic vision." },
  { title: "Design", desc: "Crafting the immersive UI/UX." },
  { title: "Develop", desc: "Building with cutting-edge tech." },
  { title: "Launch", desc: "Deploying to the digital universe." }
];

const ProcessStep = ({ step, index }) => {
  return (
    <motion.div 
      className={`flex items-center w-full mb-12 md:mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="hidden md:block w-5/12" />
      
      <div className="w-12 md:w-2/12 flex justify-center z-10 shrink-0">
        <motion.div 
          className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-darkBg border-4"
          initial={{ borderColor: "rgba(255,255,255,0.2)", boxShadow: "0 0 0px rgba(34,211,238,0)" }}
          whileInView={{ borderColor: "#22d3ee", boxShadow: "0 0 15px rgba(34,211,238,0.8)" }}
          viewport={{ margin: "10000px 0px -40% 0px" }}
          transition={{ duration: 0.4 }}
        />
      </div>
      
      <motion.div 
        className="w-full md:w-5/12 glass-card border relative overflow-hidden cursor-default ml-4 md:ml-0"
        initial={{ borderColor: "rgba(255,255,255,0.1)", scale: 1 }}
        whileInView={{ borderColor: "rgba(34,211,238,0.5)", scale: 1.05 }}
        viewport={{ margin: "10000px 0px -40% 0px" }}
        transition={{ duration: 0.4 }}
      >
        <motion.div 
          className="absolute top-0 left-0 w-1 h-full bg-brandCyan origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ margin: "10000px 0px -40% 0px" }}
          transition={{ duration: 0.4 }}
        />
        <h3 className="text-base font-semibold mb-2 text-slate-300">{step.title}</h3>
        <p className="text-sm text-slate-400">{step.desc}</p>
      </motion.div>
    </motion.div>
  );
};

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" ref={containerRef} className="relative w-full min-h-screen py-24 px-4 md:px-12 lg:px-24 z-10">
      <div className="w-full text-center mb-16 md:mb-28 pointer-events-auto z-10 relative">
        <h2 className="text-lg md:text-2xl font-extrabold uppercase tracking-[0.2em] text-glow inline-block relative">
          Our Process
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-brandCyan to-transparent opacity-50"></span>
        </h2>
      </div>
      
      <div className="relative max-w-4xl mx-auto pl-6 md:pl-0">
        {/* Vertical Line */}
        <div className="absolute left-[24px] md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/10 rounded-full">
          <motion.div 
            className="w-full bg-brandCyan rounded-full brand-glow origin-top"
            style={{ height: lineHeight }}
          />
        </div>

        {steps.map((step, index) => (
          <ProcessStep key={index} step={step} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Process;
