import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: "Alex Mercer", role: "CEO, TechNova", text: "The most immersive web experience we've ever had. Truly next level." },
  { name: "Sarah Chen", role: "Founder, Aura", text: "Their 3D design work is unmatched. It feels like stepping into the future." },
  { name: "David Kim", role: "CMO, Velocity", text: "A game-changer for our brand identity. Highly recommended." }
];

const Testimonials = () => {
  return (
    <section className="relative w-full py-24 px-4 md:px-12 lg:px-24 z-10 flex flex-col items-center pointer-events-none">
      <div className="w-full text-center mb-16 md:mb-28 pointer-events-auto z-10 relative">
        <h2 className="text-lg md:text-2xl font-extrabold uppercase tracking-[0.2em] text-glow inline-block relative">
          What They Say
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-brandCyan to-transparent opacity-50"></span>
        </h2>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full pointer-events-auto">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            className="flex-1 glass-card border border-white/10 hover:border-brandCyan transition-colors duration-300 relative overflow-hidden group cursor-default"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-brandCyan transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
            <p className="text-sm text-slate-400 italic mb-6">"{testimonial.text}"</p>
            <div>
              <h4 className="text-slate-300 font-semibold text-sm">{testimonial.name}</h4>
              <p className="text-brandCyan text-xs">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
