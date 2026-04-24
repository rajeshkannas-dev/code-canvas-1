import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "Neon Nexus", type: "Web App" },
  { title: "Cyber Trade", type: "FinTech" },
  { title: "Aura Space", type: "E-Commerce" },
  { title: "Velocity AI", type: "SaaS" },
];

const ProjectShowcase = () => {
  const containerRef = useRef();
  const scrollerRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.to(scrollerRef.current, {
        x: () => -(scrollerRef.current.scrollWidth - window.innerWidth + 100),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "center center",
          end: () => "+=" + scrollerRef.current.scrollWidth,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-darkBg/80 backdrop-blur-sm flex flex-col justify-center overflow-hidden z-10 pointer-events-none">
      <h2 className="text-4xl md:text-6xl font-bold px-8 md:px-24 mb-10 text-glow pointer-events-auto">Featured Work</h2>
      
      <div className="flex px-8 md:px-24 pointer-events-auto" ref={scrollerRef}>
        {projects.map((project, idx) => (
          <div key={idx} className="w-[80vw] md:w-[40vw] flex-shrink-0 mr-8 group perspective-1000">
            <motion.div 
              className="w-full h-[50vh] glass-card neon-border flex flex-col items-center justify-center relative overflow-hidden transition-transform duration-500 group-hover:border-neonBlue cursor-default"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-3xl font-bold mb-2 text-white z-10">{project.title}</h3>
              <p className="text-neonBlue z-10">{project.type}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
