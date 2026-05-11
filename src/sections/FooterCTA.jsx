import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { QrCode, ScanLine, CheckCircle2 } from 'lucide-react';

const FooterCTA = () => {
  const [formData, setFormData] = useState({ name: '', email: '', project: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  // Framer motion values for drag interactions
  const y = useMotionValue(0);
  const scale = useTransform(y, [0, 150], [1, 0.95]);
  const opacity = useTransform(y, [0, 150], [1, 0.8]);

  const handleDragEnd = (e, info) => {
    // If the ticket is dragged down far enough towards the slot
    if (info.offset.y > 100) {
      setIsScanning(true);
      // Simulate validation scan delay
      setTimeout(() => {
        setIsScanning(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="relative w-full min-h-screen bg-transparent flex flex-col items-center justify-center overflow-hidden z-10 pt-24 pb-0">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[600px] bg-neonBlue/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Proper Contact Us Section Heading */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center z-20 w-full px-4 pointer-events-auto">
        <h2 className="text-lg md:text-2xl font-extrabold uppercase tracking-[0.2em] text-glow inline-block relative text-white">
          CONTACT US
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-neonBlue to-transparent opacity-50"></span>
        </h2>
      </div>

      <div className="relative w-full max-w-4xl h-[700px] md:h-[750px] flex flex-col items-center justify-start mt-16 md:mt-24">
        
        <AnimatePresence>
          {!isSubmitted && (
            <motion.div
              style={{ y, scale, opacity }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }} // Snaps back if not dropped far enough
              dragElastic={{ top: 0, bottom: 0.8 }} // Allow pulling down
              onDragEnd={handleDragEnd}
              exit={{ y: 400, opacity: 0, transition: { duration: 0.8, ease: "anticipate" } }} // Animate going INTO the slot on submit
              className="relative w-[340px] md:w-[480px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,240,255,0.1)] z-20 cursor-grab active:cursor-grabbing flex flex-col"
            >
              {/* Scan Overlay (active when dropped in slot) */}
              {isScanning && (
                <motion.div 
                  className="absolute inset-0 z-50 pointer-events-none overflow-hidden rounded-3xl"
                >
                  {/* Scanning Laser Line */}
                  <motion.div 
                    initial={{ y: "-10%" }} 
                    animate={{ y: "110%" }} 
                    transition={{ duration: 1.5, ease: "linear" }}
                    className="w-full h-1 bg-neonBlue shadow-[0_0_30px_#00f0ff]"
                  />
                  <div className="absolute inset-0 bg-neonBlue/10 mix-blend-overlay" />
                </motion.div>
              )}

              {/* Ticket Top */}
              <div className="w-full bg-black/60 p-5 md:p-6 border-b border-white/10 flex justify-between items-center relative">
                <div>
                  <h3 className="text-[10px] md:text-xs font-bold text-gray-400 tracking-widest uppercase">PROJECT TICKET</h3>
                  <h4 className="text-base md:text-lg font-bold text-white tracking-wider mt-1">CODE CANVAS</h4>
                </div>
                <QrCode className="w-8 h-8 md:w-10 md:h-10 text-neonBlue" />
              </div>

              {/* Ticket Body (Form) */}
              <div className="p-6 md:p-8 flex flex-col gap-6 relative z-10 pointer-events-none">
                {/* Inputs */}
                <div className="flex flex-col gap-1 pointer-events-auto">
                  <label className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">YOUR NAME</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-transparent border-b border-white/20 text-white font-mono text-sm focus:outline-none focus:border-neonBlue transition-colors py-1 placeholder-gray-700"
                    placeholder="ENTER NAME"
                  />
                </div>

                <div className="flex flex-col gap-1 pointer-events-auto">
                  <label className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent border-b border-white/20 text-white font-mono text-sm focus:outline-none focus:border-neonPurple transition-colors py-1 placeholder-gray-700"
                    placeholder="ENTER EMAIL"
                  />
                </div>

                <div className="flex flex-col gap-1 pointer-events-auto">
                  <label className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">PROJECT TYPE</label>
                  <input 
                    type="text" 
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="bg-transparent border-b border-white/20 text-white font-mono text-sm focus:outline-none focus:border-neonBlue transition-colors py-1 placeholder-gray-700"
                    placeholder="WEB / APP / GAME"
                  />
                </div>

                {/* New Message Field */}
                <div className="flex flex-col gap-1 pointer-events-auto">
                  <label className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">PROJECT MESSAGE</label>
                  <textarea 
                    rows="2"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-transparent border-b border-white/20 text-white font-mono text-sm focus:outline-none focus:border-neonPurple transition-colors py-1 placeholder-gray-700 resize-none"
                    placeholder="BRIEF DESCRIPTION..."
                  />
                </div>
              </div>

              {/* Ticket Bottom */}
              <div className="w-full bg-black/60 p-4 md:p-6 border-t border-white/10 flex flex-col items-center justify-center gap-2 relative">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-neonBlue animate-pulse" />
                  <p className="text-[10px] md:text-[12px] font-semibold text-gray-400 tracking-[0.4em] uppercase">DRAG TO SEND</p>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

        {/* 3D Validation Slot Area (z-30 ensures ticket slides BEHIND it, simulating insertion) */}
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 flex flex-col items-center justify-start pointer-events-none z-30">
          
          {/* The Physical Slot Opening */}
          <div 
            className="w-[360px] md:w-[520px] h-4 bg-[#020202] rounded-full border border-white/10 shadow-[inset_0_5px_15px_rgba(0,0,0,1)] relative overflow-hidden flex items-center justify-center"
            style={{ perspective: "500px", transform: "rotateX(20deg)" }}
          >
            {/* Glowing inner edge */}
            <div className="w-[90%] h-[1px] bg-gradient-to-r from-transparent via-neonBlue to-transparent opacity-80" />
            <div className="absolute inset-0 bg-neonBlue/10 animate-pulse mix-blend-overlay" />
          </div>
          
          {/* Solid base block to hide the ticket as it slides behind (into) it */}
          <div className="w-full h-full bg-[#050505] border-t border-white/5 flex flex-col items-center pt-8 relative shadow-[0_-10px_40px_rgba(0,240,255,0.05)]">
            {/* Subtle glow casting up from the slot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-neonBlue/40 blur-md" />
            
            <div className="flex items-center gap-3">
              <ScanLine className="w-5 h-5 md:w-6 md:h-6 text-neonBlue animate-pulse" />
              <span className="text-[10px] md:text-xs font-bold text-neonBlue tracking-[0.4em] uppercase">
                {isSubmitted ? "PROJECT CHANNEL" : "SUBMIT PROJECT"}
              </span>
            </div>
          </div>

        </div>

        {/* Success Message */}
        {isSubmitted && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 20 }} // Delayed to allow ticket exit animation
            className="absolute inset-0 flex flex-col items-center justify-center text-center z-40 px-8 pb-32"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-neonBlue/10 border border-neonBlue/30 flex items-center justify-center shadow-[0_0_50px_rgba(0,240,255,0.2)] mb-8">
              <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-neonBlue" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white tracking-[0.2em] uppercase mb-4">PROJECT RECEIVED</h3>
            <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
              Thanks for reaching out. Your project request has been successfully received. We'll get back to you shortly.
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default FooterCTA;
