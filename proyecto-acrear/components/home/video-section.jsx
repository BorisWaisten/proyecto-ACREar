'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function VideoSection({video}) {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Hook para detectar el scroll en esta sección
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animaciones responsive con slide lateral para móvil
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0.95]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.1], [0.98, 1]); // Menos escala en móvil
  const videoOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.95]);
  const videoScale = useTransform(scrollYProgress, [0, 0.15], [1.02, 1]); // Escala más sutil
  
  // Slide lateral - siempre se calcula, se aplica condicionalmente
  const slideX = useTransform(
    scrollYProgress, 
    [0, 0.15, 0.85, 1], 
    [100, 0, 0, 0] // Entra desde la derecha
  );
  
  // Blur más sutil para mejor performance en móvil
  const videoBlur = useTransform(scrollYProgress, [0, 0.1], [4, 0]);

  return (
    <motion.section 
      ref={containerRef}
      className="relative w-full h-auto md:h-[70vh] lg:h-screen p-2 md:p-1 flex flex-col items-center justify-center overflow-hidden"
      style={{
        opacity: sectionOpacity,
        scale: sectionScale,
        x: isMobile ? slideX : 0 // Aplica slide solo en móvil
      }}
    >

      
      {/* Container del video con animaciones responsive */}
      <motion.div 
        className="relative w-full aspect-video overflow-hidden rounded-md md:rounded-lg lg:rounded-xl shadow-lg md:shadow-2xl mx-2 md:mx-0"
        style={{
          scale: videoScale,
        }}
      >
        {/* Video principal con efectos */}
        <motion.video
          className="w-full h-full object-cover"
          src="/video-section.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="auto"
          poster=""
          style={{
            opacity: videoOpacity,
            filter: useTransform(
              [videoBlur],
              ([blur]) => `contrast(1.1) brightness(1.05) saturate(1.1) blur(${blur}px)`
            ),
            imageRendering: 'crisp-edges',
          }}
        />
        
        {/* Efecto de brillo optimizado para móvil */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 md:via-white/10 to-transparent"
          animate={{ x: [-200, 200] }} // Movimiento más corto en móvil
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatDelay: 4
          }}
          style={{ 
            clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
            opacity: useTransform(scrollYProgress, [0, 0.15, 0.85], [0, 0.2, 0.2])
          }}
        />
        
        {/* Border decorativo responsive */}
        <motion.div
          className="absolute inset-0 border border-[var(--color-primary)]/15 md:border-2 md:border-[var(--color-primary)]/20 rounded-md md:rounded-lg lg:rounded-xl"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2, 0.8], [0, 1, 1])
          }}
        />
      </motion.div>

 
    </motion.section>
  );
}
