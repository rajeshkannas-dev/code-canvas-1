import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Gamepad2 } from 'lucide-react';

const services = [
  { title: "Web Development", icon: <Globe className="w-8 h-8 mb-4 text-neonBlue group-hover:scale-110 transition-transform" /> },
  { title: "App Development", icon: <Smartphone className="w-8 h-8 mb-4 text-neonBlue group-hover:scale-110 transition-transform" /> },
  { title: "Game Development", icon: <Gamepad2 className="w-8 h-8 mb-4 text-neonBlue group-hover:scale-110 transition-transform" /> }
];

const Services = () => {
  return (
    <section id="services-section" className="relative w-full min-h-screen py-24 px-8 md:px-24 z-10 flex items-center pointer-events-none">
      <div className="flex flex-col lg:flex-row items-center gap-16 pointer-events-auto w-full max-w-7xl mx-auto">
        
        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow-purple">About Us</h2>
          <h3 className="text-2xl font-semibold mb-4 text-neonBlue">100+ Team Strength</h3>
          <h4 className="text-xl font-medium mb-6 text-white">Together, We Can Conquer Any Challenge</h4>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            Our team of highly skilled and experienced developers delivers exceptional user experiences across web and mobile applications. Over the years, we have consistently achieved our goals, building websites and apps with high traffic and strong user ratings. Our mission is to help startups grow into industry leaders by creating innovative solutions with a team of dedicated problem solvers.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="glass-card neon-border-blue flex flex-col items-center text-center p-6 group hover:-translate-y-2 transition-transform cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {service.icon}
                <h4 className="text-lg font-bold text-white group-hover:text-neonBlue transition-colors">{service.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Side */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative rounded-2xl overflow-hidden glass-card neon-border-purple p-2 w-full max-w-lg shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:shadow-[0_0_60px_rgba(168,85,247,0.5)] transition-shadow duration-500">
            <img 
              src="/about_us.png" 
              alt="Futuristic Game Development Studio" 
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050014]/80 via-transparent to-transparent pointer-events-none rounded-xl"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
