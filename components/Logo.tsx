"use client";

import { motion, Variants } from "framer-motion";
import { JSX } from "react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200 },
  },
};

export default function Logo(): JSX.Element {

  return (
    <div className="relative flex items-start">
      {/* Fixed "O" */}
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          rotate: [0, 3, -3, 0], // small tilt
          y: [0, -5, 0]          // subtle floating
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          repeatType: "mirror" 
        }}
        className="fixed flex items-center justify-center w-20 h-20 
        rounded-full bg-gradient-to-br from-brand to-accent 
        text-white text-4xl md:text-5xl font-bold font-display z-50 
        shadow-xl"
      >
        S
      </motion.span>

      {/* Animated "laolu" */}
      <div>
      <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        className="text-6xl md:text-6xl font-extrabold tracking-tight text-brand font-display ml-20"
      >
      </motion.h1>
      </div>
    </div>
  );
}
