import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About Us', href: '#about', id: 'about' },
  { name: 'Services', href: '#services', id: 'services' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      let current = '';

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu on click
    if (location.pathname !== '/') {
      navigate('/' + href);
      setTimeout(() => {
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (href.startsWith('#')) {
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full z-50 bg-darkBg/80 backdrop-blur-md border-b border-white/5"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="px-4 md:px-12 lg:px-24 py-4 flex items-center justify-between">
        <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
         <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-10 w-auto drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]" 
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={idx} 
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`transition-colors duration-300 text-xs font-semibold uppercase tracking-wider relative group ${
                  isActive ? 'text-brandCyan text-glow' : 'text-slate-400 hover:text-brandCyan'
                }`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-2 left-0 h-0.5 bg-brandCyan transition-all duration-300 brand-glow ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} 
                />
              </a>
            );
          })}
          
          <a href="#contact" onClick={(e) => handleClick(e, '#contact')}>
            <motion.button
              className={`px-6 py-2 bg-transparent border border-brandCyan font-semibold rounded-full transition-all duration-300 ml-4 text-xs uppercase tracking-wider hover:bg-brandCyan hover:text-darkBg brand-glow ${
                activeSection === 'contact' 
                  ? 'text-white' 
                  : 'text-brandCyan'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-300 hover:text-brandCyan transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-darkBg border-b border-white/5"
          >
            <div className="flex flex-col items-center py-6 gap-6">
              {navLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`text-sm font-semibold uppercase tracking-wider ${
                    activeSection === link.id ? 'text-brandCyan text-glow' : 'text-slate-400'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="mt-2">
                <button className="px-8 py-3 bg-brandCyan/10 border border-brandCyan text-brandCyan font-semibold rounded-full text-xs uppercase tracking-wider brand-glow">
                  Contact Us
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
