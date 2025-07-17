'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function AboutSection({ about }) {
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
  
  // Hook para detectar el scroll dentro de la sección
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Logo background transformations - más suave y sin escala en móvil
  const logoScale = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], isMobile ? [1, 1, 1, 1] : [1.2, 1.05, 0.95, 0.85]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);
  
  // Dark overlay más gradual - optimizado para móvil
  const overlayOpacity = useTransform(
    scrollYProgress, 
    isMobile ? [0, 0.02, 0.04, 0.06] : [0, 0.03, 0.06, 0.09], 
    isMobile ? [0, 0.4, 0.7, 0.8] : [0, 0.3, 0.6, 0.75]
  );
  
  // Content animations - optimizadas para móvil: aparecen más temprano
  const titleOpacity = useTransform(
    scrollYProgress, 
    isMobile ? [0, 0.002, 0.005] : [0.01, 0.02, 0.06], 
    isMobile ? [0.4, 0.8, 1] : [0, 1, 1]
  );
  const titleScale = useTransform(scrollYProgress, [0.01, 0.02], isMobile ? [1, 1] : [1.2, 1]);
  const titleY = useTransform(scrollYProgress, [0.01, 0.02], isMobile ? [15, 0] : [30, 0]);
  
  const contentOpacity = useTransform(
    scrollYProgress, 
    isMobile ? [0.002, 0.01, 0.5] : [0.05, 0.07, 0.8], 
    isMobile ? [0.5, 1, 1] : [0, 1, 1]
  );
  const contentScale = useTransform(scrollYProgress, [0.05, 0.06], isMobile ? [1, 1] : [1.15, 1]);
  const contentY = useTransform(scrollYProgress, [0.01, 0.06], isMobile ? [15, 0] : [25, 0]);
  
  const finalTextOpacity = useTransform(
    scrollYProgress, 
    isMobile ? [0.01, 0.03, 0.7] : [0.05, 0.07, 0.9], 
    isMobile ? [0.5, 1, 1] : [0, 1, 1]
  );
  const finalTextScale = useTransform(scrollYProgress, [0.05, 0.07], isMobile ? [1, 1] : [1.1, 1]);
  const finalTextY = useTransform(scrollYProgress, [0.05, 0.07], isMobile ? [15, 0] : [20, 0]);

  const slideX = useTransform(
    scrollYProgress, 
    [0.85, 1], 
    [0, -100] 
  );

  const logoInitialOpacity = useTransform(scrollYProgress, [0, 0.02], [1, 1]);

  return (
    <section 
      ref={containerRef}
      className={`relative ${isMobile ? 'min-h-[500px]' : 'h-[700px] md:h-[100vh]'}`}
    >
      {/* Logo background layer (centrado, animado, relativo a la sección) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          scale: logoScale,
          opacity: logoInitialOpacity
        }}
      >
        <div className="relative">
          <Image
            src="/logos/logo-acrear2.png"
            alt="Logo ACREarg"
            width={400}
            height={400}
            className="drop-shadow-2xl w-40 h-40 md:w-70 md:h-70 lg:w-80 lg:h-80 xl:w-[300px] xl:h-[300px]"
            priority
          />
        </div>
      </motion.div>

      {/* Dark overlay with gradient (relativo a la sección) */}
      <motion.div
        className="absolute inset-0 h-full bg-gradient-to-b from-black via-black/80 to-transparent"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content layer (centrado, animado, relativo a la sección) */}
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className={`mx-auto text-center px-4 md:px-6 ${isMobile ? 'space-y-3 max-w-sm' : 'max-w-4xl space-y-4 md:space-y-8 lg:space-y-12'}`}>
          {/* Title with cinematic reveal */}
          <motion.div
            style={{
              opacity: titleOpacity,
              scale: titleScale,
              y: titleY
            }}
          >
            <h2 className="text-lg md:text-4xl font-bold mb-3 md:mb-6 bg-gradient-to-r from-white via-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
              {about?.title || "ACREarg"}
            </h2>
            {/* Decorative line */}
            <motion.div 
              className="w-20 md:w-32 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto rounded-full"
              initial={{ width: 0 }}
              style={{ opacity: titleOpacity }}
              animate={{ width: scrollYProgress.get() > (isMobile ? 0.08 : 0.3) ? (isMobile ? "5rem" : "8rem") : 0 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          {/* Main content with glass morphism - optimizado para móvil */}
          <motion.div
            className={`backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl md:rounded-3xl ${isMobile ? 'p-4' : 'p-4 md:p-8 lg:p-12'}`}
            style={{
              opacity: contentOpacity,
              scale: contentScale,
              y: contentY
            }}
          >
            <div className={`${isMobile ? 'space-y-2' : 'space-y-4 md:space-y-6'} w-full mx-auto text-justify`}>
              <p className={`${isMobile ? 'text-sm leading-tight' : 'text-base md:text-lg leading-relaxed'} font-medium text-gray-100`}>
                {about?.text1 || "Descubre la innovación que está transformando el futuro"}
              </p>
              <p className={`${isMobile ? 'text-sm leading-tight' : 'text-base md:text-lg leading-relaxed'} font-bold text-gray-300`}>
                {about?.text2 || "Con tecnología de vanguardia y un diseño excepcional"}
              </p>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
