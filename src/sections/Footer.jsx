import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact Us', href: '#contact' }
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleQuickLinkClick = (e, href) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/' + href);
      setTimeout(() => {
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (id === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="w-full bg-black/80 backdrop-blur-sm border-t border-white/5 py-16 px-4 md:px-12 lg:px-24 z-10 relative">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-16">
        
        {/* Brand Section */}
        <div className="w-full md:max-w-sm">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="/logo.png" 
              alt="Code Canvas Logo" 
              className="h-12 w-auto drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]" 
            />
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            The goal of our highly trained and experienced team is to deliver great user experiences for mobile and web applications.
          </p>
        </div>

        {/* Links Group */}
        <div className="flex flex-col sm:flex-row gap-12 md:gap-24">
          
          {/* Quick Links */}
          <div>
          <h4 className="text-base font-semibold text-slate-300 mb-6 uppercase tracking-wider">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} onClick={(e) => handleQuickLinkClick(e, link.href)} className="text-slate-400 hover:text-brandCyan transition-colors duration-300 text-sm">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

          {/* Policies */}
          <div>
          <h4 className="text-base font-semibold text-slate-300 mb-6 uppercase tracking-wider">Policies</h4>
          <ul className="flex flex-col gap-3">
            {[
              { name: 'Terms and Conditions', path: '/terms' },
              { name: 'Privacy Policy', path: '/privacy' },
              { name: 'Refund Policy', path: '/refund' }
            ].map((link, idx) => (
              <li key={idx}>
                <Link to={link.path} className="text-slate-400 hover:text-brandCyan transition-colors duration-300 text-sm">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-white/10 flex justify-center text-center">
        <p className="text-slate-500 text-xs">
          &copy; 2026 Code Canvas. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
