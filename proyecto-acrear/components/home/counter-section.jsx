'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';

export default function CounterSection({ counter }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counts, setCounts] = useState([0, 0, 0]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (isInView) {
      const targetNumbers = counter.stats.map(stat => {
        const num = parseInt(stat.number.replace(/[^0-9]/g, ''));
        return num;
      });

      const duration = 2000; 
      const steps = 60; 
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts(targetNumbers.map(target => {
          const current = Math.floor(target * progress);
          return current;
        }));

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isInView, counter.stats]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="max-w-4xl mx-auto md:h-[40vh] pt-6  sm:py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl font-bold text-center text-[var(--color-primary)] mb-12"
        >
          {counter.title}
        </motion.h2>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-12"
        >
          {counter.stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative flex flex-col items-center justify-center p-2 sm:p-4 md:p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg transform transition-all duration-500"
            >
              {/* Efecto de brillo al hover */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--color-accent)]/10 to-[var(--color-primary)]/10 opacity-0 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : ''}`} />
              
              {/* Número con animación */}
              <motion.div 
                className="text-2xl sm:text-3xl md:text-5xl font-bold text-[var(--color-accent)] mb-2"
                animate={hoveredIndex === index ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                {stat.number.includes('+') ? `+${counts[index]}` : counts[index]}
              </motion.div>

              {/* Línea decorativa */}
              <div className="w-10 sm:w-16 h-1 bg-[var(--color-accent)]/30 mb-2 sm:mb-4" />

              {/* Etiqueta con efecto de hover */}
              <motion.div 
                className="text-sm md:text-lg text-[var(--color-primary)] text-center"
                animate={hoveredIndex === index ? { y: -2 } : {}}
                transition={{ duration: 0.2 }}
              >
                {stat.label}
              </motion.div>


            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 