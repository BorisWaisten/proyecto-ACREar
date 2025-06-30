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
  
  // Dark overlay más gradual
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.03, 0.06, 0.09], [0, 0.3, 0.6, 0.75]);
  
  // Content animations - sin escala en móvil para evitar zoom
  const titleOpacity = useTransform(scrollYProgress, isMobile ? [0, 0.01, 0.02] : [0.01, 0.02, 0.06], isMobile ? [0.2,.5, 1] : [0, 1, 1]);
  const titleScale = useTransform(scrollYProgress, [0.01, 0.02], isMobile ? [1, 1] : [1.2, 1]);
  const titleY = useTransform(scrollYProgress, [0.01, 0.02], [30, 0]);
  
  const contentOpacity = useTransform(scrollYProgress, isMobile ? [0.05, 0.07, 0.8] : [0.05, 0.07, 0.8], isMobile ? [0.2, 1, 1] : [0, 1, 1]);
  const contentScale = useTransform(scrollYProgress, [0.05, 0.06], isMobile ? [1, 1] : [1.15, 1]);
  const contentY = useTransform(scrollYProgress, [0.05, 0.06], [25, 0]);
  
  const finalTextOpacity = useTransform(scrollYProgress, [0.05, 0.07, 0.9], [0, 1, 1]);
  const finalTextScale = useTransform(scrollYProgress, [0.05, 0.07], isMobile ? [1, 1] : [1.1, 1]);
  const finalTextY = useTransform(scrollYProgress, [0.05, 0.07], [20, 0]);


  const slideX = useTransform(
    scrollYProgress, 
    [0.85, 1], 
    [0, -100] 
  );

  const logoInitialOpacity = useTransform(scrollYProgress, [0, 0.02], [1, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[700px] md:h-[120vh]"
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
            className="drop-shadow-2xl w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px]"
            priority
          />
        </div>
      </motion.div>

      {/* Dark overlay (relativo a la sección) */}
      <motion.div
        className="absolute inset-0 h-full bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content layer (centrado, animado, relativo a la sección) */}
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-6 space-y-4 md:space-y-8 lg:space-y-12">
          {/* Title with cinematic reveal */}
          <motion.div
            style={{
              opacity: titleOpacity,
              scale: titleScale,
              y: titleY
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
              {about?.title || "ACREar"}
            </h2>
            {/* Decorative line */}
            <motion.div 
              className="w-24 md:w-32 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto rounded-full"
              initial={{ width: 0 }}
              style={{ opacity: titleOpacity }}
              animate={{ width: scrollYProgress.get() > 0.3 ? "8rem" : 0 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          {/* Main content with glass morphism */}
          <motion.div
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12"
            style={{
              opacity: contentOpacity,
              scale: contentScale,
              y: contentY
            }}
          >
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg lg:text-xl leading-relaxed font-medium text-gray-100">
                {about?.text1 || "Descubre la innovación que está transformando el futuro"}
              </p>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-300">
                {about?.text2 || "Con tecnología de vanguardia y un diseño excepcional"}
              </p>
            </div>
          </motion.div>

          {/* Final text with special effect */}
          <motion.div
            className="relative"
            style={{
              opacity: finalTextOpacity,
              scale: finalTextScale,
              y: finalTextY
            }}
          >
            <motion.p 
              className="text-xl md:text-2xl lg:text-4xl font-bold italic relative"
              style={{
                background: `linear-gradient(45deg, var(--color-primary), var(--color-accent), white)`,
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              {about?.text3 || "El futuro comienza aquí"}
            </motion.p>
            {/* Glowing effect */}
            <motion.div
              className="absolute inset-0 blur-lg opacity-50"
              style={{
                background: `linear-gradient(45deg, var(--color-primary), var(--color-accent))`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              animate={{ 
                opacity: [0.3, 0.7, 0.3] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              {about?.text3 || "El futuro comienza aquí"}
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
