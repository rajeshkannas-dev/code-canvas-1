import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About Us', href: '#about', id: 'about' },
  { name: 'Services', href: '#services', id: 'services' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      let current = '';

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is at or above the middle of the screen
          if (rect.top <= window.innerHeight / 2) {
            current = id;
          }
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
          const isActive = activeSection === link.id;
          return (
            <a 
              key={idx} 
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
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
        
        <a href="#contact" onClick={(e) => handleClick(e, '#contact')}>
          <motion.button
            className={`px-6 py-2 bg-transparent border font-semibold rounded-full transition-all duration-300 ml-4 text-sm uppercase tracking-wider ${
              activeSection === 'contact' 
                ? 'border-neonPurple text-white bg-neonPurple neon-glow-purple' 
                : 'border-neonPurple text-neonPurple hover:bg-neonPurple hover:text-white neon-glow-purple'
            }`}
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
