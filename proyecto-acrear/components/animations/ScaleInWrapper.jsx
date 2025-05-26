'use client';
import { motion } from 'framer-motion';

export default function ScaleInWrapper({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
