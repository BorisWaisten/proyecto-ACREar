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
        // Remove any non-numeric characters and convert to number
        const num = parseInt(stat.number.replace(/[^0-9]/g, ''));
        return num;
      });

      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
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
    <section className="relative w-full py-16 overflow-hidden">
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-background)] via-[var(--color-accent)]/5 to-[var(--color-primary)]/5">
        {/* Patrón de puntos */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-accent) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Líneas diagonales animadas */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            background: `repeating-linear-gradient(
              45deg,
              var(--color-accent) 0px,
              var(--color-accent) 1px,
              transparent 1px,
              transparent 20px
            )`,
            animation: 'moveLines 20s linear infinite'
          }} />
        </div>

        {/* Círculos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border-2 border-[var(--color-accent)]/20"
              style={{
                width: `${(i + 1) * 200}px`,
                height: `${(i + 1) * 200}px`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: i * 2
              }}
            />
          ))}
        </div>

        {/* Nuevos efectos visuales */}
        {/* Líneas horizontales animadas */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            background: `repeating-linear-gradient(
              90deg,
              var(--color-accent) 0px,
              var(--color-accent) 1px,
              transparent 1px,
              transparent 30px
            )`,
            animation: 'moveHorizontalLines 15s linear infinite'
          }} />
        </div>

        {/* Partículas flotantes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-[var(--color-accent)]/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Efecto de ondas */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            background: `radial-gradient(
              circle at center,
              var(--color-accent) 0%,
              transparent 70%
            )`,
            animation: 'pulse 4s ease-in-out infinite'
          }} />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center text-[var(--color-primary)] mb-12"
        >
          {counter.title}
        </motion.h2>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
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
              className="relative flex flex-col items-center justify-center p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg transform transition-all duration-500"
            >
              {/* Efecto de brillo al hover */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--color-accent)]/10 to-[var(--color-primary)]/10 opacity-0 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : ''}`} />
              
              {/* Número con animación */}
              <motion.div 
                className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2"
                animate={hoveredIndex === index ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                {stat.number.includes('+') ? `${counts[index]}+` : counts[index]}
              </motion.div>

              {/* Línea decorativa */}
              <div className="w-16 h-1 bg-[var(--color-accent)]/30 mb-4" />

              {/* Etiqueta con efecto de hover */}
              <motion.div 
                className="text-lg md:text-xl text-[var(--color-primary)] text-center"
                animate={hoveredIndex === index ? { y: -2 } : {}}
                transition={{ duration: 0.2 }}
              >
                {stat.label}
              </motion.div>

              {/* Partículas decorativas */}
              <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-[var(--color-accent)]/20 rounded-full"
                    initial={{ 
                      x: Math.random() * 100 - 50,
                      y: Math.random() * 100 - 50,
                      scale: 0
                    }}
                    animate={hoveredIndex === index ? {
                      x: Math.random() * 200 - 100,
                      y: Math.random() * 200 - 100,
                      scale: [0, 1, 0],
                      opacity: [0, 0.5, 0]
                    } : {}}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Estilos para las animaciones */}
      <style jsx>{`
        @keyframes moveLines {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100px 100px;
          }
        }

        @keyframes moveHorizontalLines {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100px 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
} 