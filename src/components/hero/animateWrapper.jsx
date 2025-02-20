"use client";

import { motion } from 'framer-motion';

const AnimateWrapper = ({ delay, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Start slightly below and invisible
      animate={{ opacity: 1, y: 0 }}  // Fade in and move up to the final position
      transition={{ duration: 0.5, delay }} // Animation duration and delay
      style={{ display: 'flex', width: '100%', height: '100%' }} // Ensure it doesn't interfere with layout
    >
      {children}
    </motion.div>
  );
};

export default AnimateWrapper;