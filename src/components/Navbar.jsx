import React from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Our Speciality', href: '#' },
];

const Navbar = () => {
  // Since this is currently just the Home landing page, "Home" is always active.
  const activePath = '/';

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full z-50 px-8 md:px-24 py-6 flex items-center justify-between bg-darkBg/40 backdrop-blur-md border-b border-white/5"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
       <img 
  src="/logo.png" 
  alt="Logo" 
  className="h-12 w-auto drop-shadow-[0_0_5px_rgba(0,240,255,0.3)]" 
/>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link, idx) => {
          const isActive = activePath === link.href;
          return (
            <a 
              key={idx} 
              href={link.href}
              className={`transition-colors duration-300 text-sm font-semibold uppercase tracking-wider relative group ${
                isActive ? 'text-neonBlue text-glow' : 'text-gray-300 hover:text-neonBlue'
              }`}
            >
              {link.name}
              <span 
                className={`absolute -bottom-2 left-0 h-0.5 bg-neonBlue transition-all duration-300 neon-glow ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} 
              />
            </a>
          );
        })}
        
        <a href="#">
          <motion.button
            className="px-6 py-2 bg-transparent border border-neonPurple text-neonPurple font-semibold rounded-full hover:bg-neonPurple hover:text-white transition-all duration-300 neon-glow-purple ml-4 text-sm uppercase tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
