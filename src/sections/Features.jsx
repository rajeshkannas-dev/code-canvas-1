import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Layout, Monitor, Lightbulb, ChevronRight } from 'lucide-react';

const featureData = [
  { 
    id: 'perf', 
    label: "Performance", 
    desc: "Lightning fast load times and heavily optimized runtime efficiency to keep your users engaged without any lag.", 
    icon: <Zap className="w-6 h-6" />,
    color: "text-brandCyan",
    bgColor: "bg-brandCyan",
    bgGlow: "bg-brandCyan/20",
    image: "/images/perf.png"
  },
  { 
    id: 'ui', 
    label: "UI/UX Design", 
    desc: "Stunning, intuitive interfaces that captivate users, ensuring a seamless journey from the first click to final conversion.", 
    icon: <Layout className="w-6 h-6" />,
    color: "text-brandIndigo",
    bgColor: "bg-brandIndigo",
    bgGlow: "bg-brandIndigo/20",
    image: "/images/uiux.png"
  },
  { 
    id: 'scale', 
    label: "Scalability", 
    desc: "Robust cloud architecture designed to effortlessly scale and grow alongside your expanding business demands.", 
    icon: <Monitor className="w-6 h-6" />,
    color: "text-brandCyan",
    bgColor: "bg-brandCyan",
    bgGlow: "bg-brandCyan/20",
    image: "/images/scalability.png"
  },
  { 
    id: 'innov', 
    label: "Innovation", 
    desc: "Leveraging cutting-edge frameworks and creative problem-solving to put you lightyears ahead of the competition.", 
    icon: <Lightbulb className="w-6 h-6" />,
    color: "text-brandIndigo",
    bgColor: "bg-brandIndigo",
    bgGlow: "bg-brandIndigo/20",
    image: "/images/innovation.png"
  }
];

const Features = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % featureData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIdx]);

  return (
    <section id="features" className="relative w-full min-h-screen py-24 px-4 md:px-12 lg:px-24 z-10 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full text-center mb-16 md:mb-28">
        <h2 className="text-lg md:text-2xl font-extrabold uppercase tracking-[0.2em] text-glow-indigo inline-block relative">
          Core Features
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-brandIndigo to-transparent opacity-50"></span>
        </h2>
      </div>
      
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Interactive List */}
        <motion.div 
          className="lg:col-span-5 flex flex-col gap-5 relative z-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {featureData.map((feat, idx) => {
            const isActive = activeIdx === idx;
            return (
              <motion.div
                key={feat.id}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                className={`group relative h-28 cursor-pointer rounded-2xl border transition-all duration-500 overflow-hidden flex items-center ${
                  isActive ? 'border-white/30 bg-white/5 shadow-[0_0_30px_rgba(255,255,255,0.05)]' : 'border-white/5 hover:border-white/20 bg-transparent'
                }`}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
              >
                {/* Active Background Glow */}
                {isActive && (
                  <motion.div 
                    layoutId="activeFeatureBg"
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent z-0"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                <div className="relative z-10 flex items-center justify-between w-full px-6">
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-xl flex shrink-0 items-center justify-center border transition-all duration-500 ${
                      isActive ? `border-white/50 bg-white/10 ${feat.color} shadow-[0_0_15px_currentColor]` : 'border-white/10 text-slate-500 group-hover:text-slate-300'
                    }`}>
                      {feat.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className={`font-semibold text-base tracking-wide transition-colors duration-500 ${isActive ? 'text-slate-300' : 'text-slate-500 group-hover:text-slate-300'}`}>
                        {feat.label}
                      </span>
                      <span className={`text-xs mt-1 max-w-[180px] sm:max-w-[240px] truncate transition-colors duration-500 ${isActive ? 'text-slate-400' : 'text-slate-600 group-hover:text-slate-400'}`}>
                        {feat.desc}
                      </span>
                    </div>
                  </div>
                  
                  <ChevronRight className={`w-6 h-6 shrink-0 transition-all duration-500 ${isActive ? 'text-slate-300 opacity-100 translate-x-0' : 'text-slate-500 opacity-0 -translate-x-4 group-hover:opacity-50'}`} />
                </div>
                
                {/* Active Indicator Line */}
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className={`absolute left-0 top-0 bottom-0 w-1.5 ${feat.bgColor}`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Right Side: Dynamic Display Core */}
        <motion.div 
          className="lg:col-span-7 relative h-[500px] w-full flex items-center justify-center lg:justify-end mt-10 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Decorative Tech Rings */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none hidden md:block" />
          <div className="absolute top-1/2 right-28 -translate-y-1/2 w-[350px] h-[350px] border border-white/5 rounded-full border-dashed animate-[spin_20s_linear_infinite] pointer-events-none hidden md:block" />

          <div className="relative w-full max-w-xl h-full glass-card border border-white/10 rounded-[2rem] overflow-hidden flex flex-col p-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 w-full h-full flex flex-col"
              >
                {/* Top Half: Image */}
                <div className="relative w-full h-[55%] overflow-hidden">
                  <img src={featureData[activeIdx].image} alt={featureData[activeIdx].label} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
                  <div className={`absolute top-6 right-6 w-14 h-14 rounded-2xl flex items-center justify-center border border-white/20 shadow-lg bg-black/40 backdrop-blur-md ${featureData[activeIdx].color}`}>
                    {React.cloneElement(featureData[activeIdx].icon, { className: "w-7 h-7" })}
                  </div>
                </div>

                {/* Bottom Half: Content */}
                <div className="relative w-full h-[45%] px-8 pb-8 flex flex-col justify-end bg-black/40 backdrop-blur-md">
                  <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[60px] pointer-events-none transition-colors duration-1000 ${featureData[activeIdx].bgGlow}`} />
                  
                  <h3 className="text-lg font-semibold text-slate-300 mb-4 tracking-wide relative z-10">
                    {featureData[activeIdx].label}
                  </h3>
                  
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed relative z-10">
                    {featureData[activeIdx].desc}
                  </p>

                  <div className="mt-8 flex gap-3 items-center relative z-10">
                    <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full ${featureData[activeIdx].bgColor}`}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
