import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Globe, Smartphone, PenTool, Target, Database, Layers, Palette, Settings } from 'lucide-react';

const features = [
  { 
    title: "Web Applications", 
    desc: "We design responsive web applications that perform seamlessly across mobile devices, tablets, and desktops.",
    icon: <Globe className="w-12 h-12 mb-4 text-brandCyan" />
  },
  { 
    title: "Mobile Applications", 
    desc: "We specialize in building hybrid, iOS, and Android applications tailored to your business needs.",
    icon: <Smartphone className="w-12 h-12 mb-4 text-brandIndigo" />
  },
  { 
    title: "UI/UX", 
    desc: "Code Canvas has extensive experience in UI/UX design, motion graphics, and digital experiences.",
    icon: <PenTool className="w-12 h-12 mb-4 text-brandCyan" />
  },
  { 
    title: "Branding", 
    desc: "We create strong brand identities that help businesses stand out and make a lasting impression.",
    icon: <Target className="w-12 h-12 mb-4 text-brandIndigo" />
  },
  { 
    title: "Software Creation", 
    desc: "We develop scalable software solutions, including cloud-based CRM and ERP systems, tailored to business requirements.",
    icon: <Database className="w-12 h-12 mb-4 text-brandCyan" />
  },
  { 
    title: "Development of Apps", 
    desc: "Our apps are built using modern technologies, ensuring scalability, performance, and flexibility.",
    icon: <Layers className="w-12 h-12 mb-4 text-brandIndigo" />
  },
  { 
    title: "Site Design", 
    desc: "We design user-friendly, visually appealing websites using the latest technologies and UI/UX practices.",
    icon: <Palette className="w-12 h-12 mb-4 text-brandCyan" />
  },
  { 
    title: "DevOps", 
    desc: "We streamline development and deployment processes through automation, enabling faster and more efficient delivery.",
    icon: <Settings className="w-12 h-12 mb-4 text-brandIndigo" />
  },
];

const ServiceCard = ({ item, idx, isLast }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 110, damping: 18, mass: 1 });
  const mouseYSpring = useSpring(y, { stiffness: 110, damping: 18, mass: 1 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["15deg", "-15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={`w-[85vw] md:w-[22vw] flex-shrink-0 group ${!isLast ? 'mr-6' : ''}`} style={{ perspective: 1000 }}>
      <motion.div 
        className="w-full h-[40vh] min-h-[320px] p-8 glass-card border border-white/10 flex flex-col justify-between relative overflow-hidden transition-colors duration-500 hover:border-brandCyan cursor-default"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02, y: -10 }}
      >
        {/* Background Number */}
        <div className="absolute -bottom-6 -right-2 text-[120px] font-bold text-white/[0.03] group-hover:text-brandCyan/10 transition-colors duration-500 select-none leading-none transform translate-z-0">
          {String(idx + 1).padStart(2, '0')}
        </div>
        
        {/* Hover Gradient Aura */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brandCyan/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform translate-z-0" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-brandIndigo/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform translate-z-0" />

        {/* Top Section: Icon */}
        <div className="relative z-10 flex justify-between items-start transform translate-z-10">
          <motion.div 
            className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-brandCyan/50 transition-colors duration-500 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4 + (idx * 0.2), repeat: Infinity, ease: "easeInOut" }}
          >
            {React.cloneElement(item.icon, { className: "w-8 h-8 text-brandCyan group-hover:text-slate-300 transition-colors duration-500" })}
          </motion.div>
          
          {/* Arrow that appears on hover */}
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-brandCyan transition-all duration-500 group-hover:bg-brandCyan/10">
            <svg className="w-5 h-5 text-brandCyan transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

        {/* Bottom Section: Text */}
        <div className="relative z-10 transform translate-z-10 group-hover:-translate-y-2 transition-transform duration-500">
          <h3 className="text-base font-semibold mb-3 text-slate-300 group-hover:text-brandCyan transition-colors duration-500">{item.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors duration-500">{item.desc}</p>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectShowcase = () => {
  const targetRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [scrollRange, setScrollRange] = React.useState(0);

  React.useLayoutEffect(() => {
    if (scrollerRef.current) {
      const updateRange = () => {
        setScrollRange(-(scrollerRef.current.scrollWidth - window.innerWidth));
      };
      updateRange();
      window.addEventListener("resize", updateRange);
      
      // Also update after fonts load just in case
      if (document.fonts) {
        document.fonts.ready.then(updateRange);
      }
      
      return () => window.removeEventListener("resize", updateRange);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, scrollRange]);

  return (
    <section id="services" ref={targetRef} className="relative w-full md:h-[300vh] z-10 pointer-events-none pb-24 md:pb-0">
      
      {/* Mobile Layout (Vertical Stack) */}
      <div className="md:hidden w-full px-4 flex flex-col pointer-events-auto py-24">
        <div className="w-full mb-16 relative">
          <h2 className="text-lg font-extrabold uppercase tracking-[0.2em] text-glow inline-block relative">
            Services
            <span className="absolute -bottom-6 left-0 w-32 h-[2px] bg-gradient-to-r from-brandCyan to-transparent opacity-50"></span>
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {features.map((item, idx) => (
            <ServiceCard key={idx} item={item} idx={idx} isLast={idx === features.length - 1} />
          ))}
        </div>
      </div>

      {/* Desktop Layout (Horizontal Scroll) */}
      <div className="hidden md:flex sticky top-0 h-screen flex-col justify-center overflow-hidden pointer-events-none">
        <div className="w-full px-8 md:px-12 lg:px-24 mb-20 md:mb-28 pointer-events-auto z-10 relative">
          <h2 className="text-lg md:text-2xl font-extrabold uppercase tracking-[0.2em] text-glow inline-block relative">
            Services
            <span className="absolute -bottom-6 left-0 w-32 h-[2px] bg-gradient-to-r from-brandCyan to-transparent opacity-50"></span>
          </h2>
        </div>
        
        <motion.div ref={scrollerRef} style={{ x }} className="flex w-max pl-8 md:pl-12 lg:pl-24 pointer-events-auto will-change-transform">
          {features.map((item, idx) => (
            <ServiceCard key={idx} item={item} idx={idx} isLast={idx === features.length - 1} />
          ))}
          <div className="w-6 md:w-10 flex-shrink-0" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
