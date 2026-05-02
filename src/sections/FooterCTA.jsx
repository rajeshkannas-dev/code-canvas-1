import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const FooterCTA = () => {
  return (
    <section id="contact" className="relative w-full py-32 px-8 md:px-24 z-10 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl">
        <div className="text-center mb-16">
          <div className="w-full text-center mb-16 md:mb-20 pointer-events-auto z-10 relative">
            <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-[0.2em] text-glow inline-block relative">
              Get In Touch
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-neonBlue to-transparent opacity-50"></span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">Ready to build your next digital experience? Drop us a message and our team will get back to you within 24 hours.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info */}
          <motion.div 
            className="w-full md:w-1/3 flex flex-col gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 border border-white/10 hover:border-neonBlue transition-colors group cursor-default">
              <Mail className="w-8 h-8 text-neonBlue mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold mb-2">Email Us</h4>
              <p className="text-gray-400 text-sm">hello@codecanvas.com</p>
            </div>
            <div className="glass-card p-8 border border-white/10 hover:border-neonPurple transition-colors group cursor-default">
              <Phone className="w-8 h-8 text-neonPurple mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold mb-2">Call Us</h4>
              <p className="text-gray-400 text-sm">+971 50 123 4567</p>
            </div>
            <div className="glass-card p-8 border border-white/10 hover:border-neonBlue transition-colors group cursor-default">
              <MapPin className="w-8 h-8 text-neonBlue mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold mb-2">Visit Us</h4>
              <p className="text-gray-400 text-sm">Dubai Design District, UAE</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="w-full md:w-2/3 glass-card p-8 md:p-12 border border-white/10 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="text-sm text-gray-400 mb-2 block uppercase tracking-wider font-semibold">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-neonBlue transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-sm text-gray-400 mb-2 block uppercase tracking-wider font-semibold">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-neonPurple transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm text-gray-400 mb-2 block uppercase tracking-wider font-semibold">Message</label>
                <textarea 
                  rows="5"
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-neonBlue transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                className="mt-6 px-10 py-4 bg-transparent border border-neonBlue text-neonBlue font-semibold rounded-lg hover:bg-neonBlue hover:text-darkBg transition-all duration-300 neon-glow flex items-center justify-center gap-3 w-full md:w-auto uppercase tracking-wider text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
