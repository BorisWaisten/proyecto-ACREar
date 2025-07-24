'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ArgMaps from '@/components/home/arg-maps';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/language-context';

export default function MapSection({ regional, provincias ,textTooltip}) {
  const [selectedId, setSelectedId] = useState(provincias[0].id);
  const provincia = provincias.find((p) => p.id === selectedId);
  const { language } = useLanguage();
  

  // Solución hydration: detectar desktop solo en cliente
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Grid flexible mejorado según cantidad de items
  const itemCount = provincia.activities.length;
  let gridClass = '';
  
  if (isDesktop) {
    // Desktop: Grid equilibrado con filas y columnas
    if (itemCount <= 3) {
      gridClass = 'grid grid-cols-3 gap-4';
    } else if (itemCount <= 4) {
      gridClass = 'grid grid-cols-2 gap-4';
    } else if (itemCount <= 6) {
      gridClass = 'grid grid-cols-3 gap-3';
    } else if (itemCount <= 8) {
      gridClass = 'grid grid-cols-4 gap-3';
    } else if (itemCount <= 10) {
      gridClass = 'grid grid-cols-5 gap-2';
    } else if (itemCount <= 12) {
      gridClass = 'grid grid-cols-4 gap-2';
    } else if (itemCount <= 15) {
      gridClass = 'grid grid-cols-5 gap-2';
    } else {
      gridClass = 'grid grid-cols-6 gap-2';
    }
  } else {
    // Mobile: Grid compacto
    if (itemCount <= 3) {
      gridClass = 'grid grid-cols-3 gap-2';
    } else if (itemCount <= 4) {
      gridClass = 'grid grid-cols-2 gap-3';
    } else if (itemCount <= 6) {
      gridClass = 'grid grid-cols-3 gap-2';
    } else if (itemCount <= 8) {
      gridClass = 'grid grid-cols-4 gap-2';
    } else if (itemCount <= 12) {
      gridClass = 'grid grid-cols-4 gap-2';
    } else {
      gridClass = 'grid grid-cols-5 gap-1';
    }
  }
  
  const visibleActivities = provincia.activities;
  const visibleIcons = provincia.icons;

  return (
    <motion.section
      className="sm:w-[70%] mx-auto min-h-[400px] sm:min-h-[500px] md:h-[600px] lg:h-[600px] relative overflow-hidden mt-4 sm:mt-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >

      {/* Contenido centrado y limitado */}
      <div className="relative z-10 max-w-7xl mx-auto sm:px-6 space-y-10">
        <h2 className="w-full text-xl md:text-2xl font-bold text-center text-[var(--color-primary)]">
          {regional.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            className="w-full scale-[1.4] py-4 sm:py-0  max-w-[300px] mx-auto min-h-[250px] md:w-[250px] md:pr-20 md:scale-110 md:min-h-[400px] md:h-full md:pl-2 rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="absolute right-4 p-1 sm:p-0 sm:top-0 sm:right-40 text-[0.5rem] rounded-full border-1 border-[rgb(223,116,28,.8)] bg-[rgb(24,49,70,0.8)]  text-[rgb(223,116,28)] sm:text-[0.6rem] text-center">{textTooltip}</span>
            <ArgMaps onSelect={setSelectedId} />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={provincia?.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg md:text-2xl font-bold text-center mb-4 mt-4 sm:mt-0 sm:mb-6">
                  {provincia.name}
              </p>
              <div className="flex flex-col w-full h-full text-[var(--color-primary)]  justify-start">
                <div className="relative flex flex-col items-center">
                  {/* Grid mejorado que se adapta a la cantidad de actividades */}
                  <div className="w-full">
                    <div className={`${gridClass} justify-items-center items-start mt-1 mb-4 sm:mb-0`}>
                      {visibleActivities.map((act, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-start w-full max-w-[80px] sm:max-w-[90px] md:max-w-[80px] lg:max-w-[70px] xl:max-w-[85px]">
                          <Image
                            src={visibleIcons[idx]}
                            alt={act}
                            width={36}
                            height={36}
                            className="mb-1 w-5 h-5 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
                          />
                          <p className="text-[0.5rem] md:text-[0.65rem] lg:text-[0.7rem] w-full text-center leading-tight">{act}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>


    </motion.section>
  );
}
