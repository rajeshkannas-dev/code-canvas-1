import React from 'react';
import Footer from '../sections/Footer';

const PolicyPage = ({ title }) => {
  return (
    <>
      <div className="bg-darkBg/80 backdrop-blur-sm relative z-10 min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-8 md:px-12">
          <div className="w-full text-center mb-16 md:mb-20 pointer-events-auto z-10 relative">
            <h1 className="text-lg md:text-2xl font-extrabold uppercase tracking-[0.2em] text-glow-indigo inline-block relative text-white">
              {title}
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-brandIndigo to-transparent opacity-50"></span>
            </h1>
          </div>
          <div className="prose prose-invert max-w-none text-slate-400">
            <p className="text-lg leading-relaxed mb-6">
              This is a placeholder page for the {title}. You can update this content later with the actual legal text.
            </p>
            <h2 className="text-2xl font-semibold text-slate-300 mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h2 className="text-2xl font-semibold text-slate-300 mt-8 mb-4">2. Usage</h2>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h2 className="text-2xl font-semibold text-slate-300 mt-8 mb-4">3. Data and Privacy</h2>
            <p className="mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PolicyPage;
