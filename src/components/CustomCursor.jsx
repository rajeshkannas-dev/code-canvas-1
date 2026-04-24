import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "spring",
        damping: 30,
        mass: 0.5,
        stiffness: 400,
      }
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-neonBlue pointer-events-none z-[9999] neon-glow hidden md:block"
        variants={variants}
        animate="default"
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-neonBlue rounded-full pointer-events-none z-[10000] hidden md:block"
        variants={dotVariants}
        animate="default"
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
