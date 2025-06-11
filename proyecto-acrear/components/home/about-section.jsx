'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection({ about }) {
  const containerRef = useRef(null);
  
  // Hook para detectar el scroll dentro de la sección
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Logo background transformations - más suave
  const logoScale = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [1.2, 1.05, 0.95, 0.85]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);
  
  // Dark overlay más gradual
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 0.9], [0, 0.3, 0.6, 0.75]);
  
  // Content animations - transiciones más suaves y graduales
  const titleOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.6], [0, 1, 1]);
  const titleScale = useTransform(scrollYProgress, [0.15, 0.35], [1.2, 1]);
  const titleY = useTransform(scrollYProgress, [0.15, 0.35], [30, 0]);
  
  const contentOpacity = useTransform(scrollYProgress, [0.25, 0.5, 0.8], [0, 1, 1]);
  const contentScale = useTransform(scrollYProgress, [0.25, 0.5], [1.15, 1]);
  const contentY = useTransform(scrollYProgress, [0.25, 0.5], [25, 0]);
  
  const finalTextOpacity = useTransform(scrollYProgress, [0.4, 0.65, 0.9], [0, 1, 1]);
  const finalTextScale = useTransform(scrollYProgress, [0.4, 0.65], [1.1, 1]);
  const finalTextY = useTransform(scrollYProgress, [0.4, 0.65], [20, 0]);

  // Control de visibilidad del container fijo - con slide lateral para móvil
  const containerVisibility = useTransform(
    scrollYProgress, 
    [0, 0.02, 0.98, 1], 
    [0, 1, 1, 0]
  );

  // Animación slide lateral para móvil
  const mobileSlideX = useTransform(
    scrollYProgress, 
    [0.85, 1], 
    [0, -100] // Sale hacia la izquierda
  );

  // Opacidad inicial del logo - visible desde el principio
  const logoInitialOpacity = useTransform(scrollYProgress, [0, 0.02], [0, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[250vh] md:h-[400vh] overflow-hidden"
    >
             {/* Fixed container - con animaciones responsive */}
       <motion.div 
         className="fixed top-6 left-0 w-full h-[60vh] md:h-screen"
         style={{ 
           opacity: containerVisibility,
           x: useTransform(scrollYProgress, [0.85, 1], [0, -100]), // Slide móvil
           pointerEvents: scrollYProgress.get() > 0 && scrollYProgress.get() < 1 ? 'auto' : 'none',
           zIndex: scrollYProgress.get() > 0 && scrollYProgress.get() < 1 ? 50 : -1
         }}
       >
         
         {/* Logo background layer */}
        <motion.div
          className="absolute inset-0 flex  items-center justify-center"
          style={{
            scale: logoScale,
            opacity: useTransform(
              scrollYProgress, 
              [0, 0.08, 0.8, 1], 
              [0, 1, 0.4, 0.4]
            )
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

        {/* Dark overlay that increases on scroll */}
        <motion.div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />

        {/* Content layer - appears on top like Wonder Woman */}
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

            {/* Call to action button that appears at the end */}
            <motion.div
              style={{ opacity: finalTextOpacity }}
              className="pt-4 md:pt-8"
            >
              <motion.button
                className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-gray-900 text-sm md:text-base font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--color-primary)]/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Descubre más</span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                  layoutId="button-bg"
                />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator (only visible at start) */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="flex flex-col items-center text-white/70"
          >
            <span className="text-sm mb-2">Scroll para explorar</span>
            <motion.div
              className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-white/60 rounded-full mx-auto"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating particles for atmosphere */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[var(--color-primary)] rounded-full opacity-30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </motion.div>

      {/* Spacer divs to enable scroll */}
      <div className="h-screen" />
      <div className="h-screen" />
      <div className="h-screen" />
    </section>
  );
}
