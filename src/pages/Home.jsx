import React from 'react';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Process from '../sections/Process';
import Features from '../sections/Features';
import ProjectShowcase from '../sections/ProjectShowcase';
import TechStack from '../sections/TechStack';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import FooterCTA from '../sections/FooterCTA';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <div className="bg-darkBg/80 backdrop-blur-sm relative z-10">
        <Services />
        <Process />
        <Features />
        <ProjectShowcase />
        <TechStack />
        <Testimonials />
        <FAQ />
        <FooterCTA />
        <Footer />
      </div>
    </>
  );
};

export default Home;
