import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full bg-black/80 backdrop-blur-sm border-t border-white/5 py-16 px-8 md:px-24 z-10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="/logo.png" 
              alt="Code Canvas Logo" 
              className="h-12 w-auto drop-shadow-[0_0_5px_rgba(0,240,255,0.3)]" 
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            The goal of our highly trained and experienced team is to deliver great user experiences for mobile and web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {['Home', 'About Us', 'Services', 'Contact Us'].map((link, idx) => (
              <li key={idx}>
                <a href="#" className="text-gray-400 hover:text-neonBlue transition-colors duration-300 text-sm">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div className="col-span-1">
          <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Policies</h4>
          <ul className="flex flex-col gap-3">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, idx) => (
              <li key={idx}>
                <a href="#" className="text-gray-400 hover:text-neonBlue transition-colors duration-300 text-sm">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div className="col-span-1">
          <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Address</h4>
          <div className="text-gray-400 text-sm leading-relaxed flex flex-col gap-2">
            <p>Code Canvas Studio</p>
            <p>Building 4, Design District</p>
            <p>South Dubai, UAE</p>
            <p className="mt-4 hover:text-neonPurple transition-colors duration-300 cursor-pointer">
              hello@codecanvas.com
            </p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex justify-center text-center">
        <p className="text-gray-500 text-xs">
          &copy; 2026 Code Canvas. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
