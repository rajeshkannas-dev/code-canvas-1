import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: "Alex Mercer", role: "CEO, TechNova", text: "The most immersive web experience we've ever had. Truly next level." },
  { name: "Sarah Chen", role: "Founder, Aura", text: "Their 3D design work is unmatched. It feels like stepping into the future." },
  { name: "David Kim", role: "CMO, Velocity", text: "A game-changer for our brand identity. Highly recommended." }
];

const Testimonials = () => {
  return (
    <section className="relative w-full py-24 px-8 md:px-24 z-10 bg-darkBg/50 flex flex-col items-center pointer-events-none">
      <h2 className="text-4xl md:text-6xl font-bold mb-16 text-glow pointer-events-auto">What They Say</h2>
      
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full pointer-events-auto">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            className="flex-1 glass-card border border-white/10 hover:border-neonBlue transition-colors duration-300 relative overflow-hidden group cursor-default"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-neonBlue transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
            <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
            <div>
              <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
              <p className="text-neonBlue text-sm">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
