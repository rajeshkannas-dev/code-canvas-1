import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { question: "How long does a typical project take?", answer: "Depending on complexity, between 4 to 12 weeks." },
  { question: "Do you provide 3D assets?", answer: "Yes, our team creates custom, optimized 3D models tailored to your brand." },
  { question: "Are these websites mobile-friendly?", answer: "Absolutely. We ensure smooth degradation for mobile devices while maintaining the core experience." }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative w-full py-24 px-8 md:px-24 z-10 flex flex-col items-center pointer-events-none">
      <div className="w-full text-center mb-20 md:mb-28 pointer-events-auto z-10 relative">
        <h2 className="text-lg md:text-2xl font-extrabold uppercase tracking-[0.2em] text-glow-purple inline-block relative">
          FAQ
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-neonPurple to-transparent opacity-50"></span>
        </h2>
      </div>
      
      <div className="w-full max-w-3xl pointer-events-auto">
        {faqs.map((faq, idx) => (
          <div key={idx} className="mb-4">
            <button
              className={`w-full text-left p-6 glass-card border transition-colors duration-300 flex justify-between items-center ${activeIndex === idx ? 'border-neonPurple bg-white/10' : 'border-white/10 hover:border-white/30'}`}
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            >
              <span className="text-sm font-semibold text-white">{faq.question}</span>
              <motion.div
                animate={{ rotate: activeIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-neonPurple" />
              </motion.div>
            </button>
            <AnimatePresence>
              {activeIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 text-sm text-gray-300 border-l border-r border-b border-neonPurple/50 rounded-b-xl bg-darkBg/50 backdrop-blur-md">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
