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
      <h2 className="text-4xl md:text-6xl font-bold mb-16 text-glow-purple pointer-events-auto">FAQ</h2>
      
      <div className="w-full max-w-3xl pointer-events-auto">
        {faqs.map((faq, idx) => (
          <div key={idx} className="mb-4">
            <button
              className={`w-full text-left p-6 glass-card border transition-colors duration-300 flex justify-between items-center ${activeIndex === idx ? 'border-neonPurple bg-white/10' : 'border-white/10 hover:border-white/30'}`}
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            >
              <span className="text-xl font-semibold text-white">{faq.question}</span>
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
                  <div className="p-6 text-gray-300 border-l border-r border-b border-neonPurple/50 rounded-b-xl bg-darkBg/50 backdrop-blur-md">
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
