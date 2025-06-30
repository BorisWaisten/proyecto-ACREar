'use client';
import { useState } from 'react';
import Image from 'next/image';
import ArgMaps from '@/components/home/arg-maps';
import { motion, AnimatePresence } from 'framer-motion';

export default function MapSection({ regional, provincias }) {
  const [selectedId, setSelectedId] = useState(provincias[0].id);
  const provincia = provincias.find((p) => p.id === selectedId);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const ITEMS_PER_VIEW = 3;
  const totalItems = provincia.activities.length;
  // Para desktop: mostrar 2 columnas x 4 filas si hay más de 4 actividades, sino 1 columna
  // Para mobile: mostrar 4 columnas x 2 filas si hay más de 4 actividades, sino 1 fila
  let visibleActivities = provincia.activities;
  let visibleIcons = provincia.icons;
  let gridClass = '';
  if (typeof window !== 'undefined' && window.innerWidth >= 768) {
    // Desktop
    if (provincia.activities.length > 4) {
      visibleActivities = provincia.activities.slice(0, 8);
      visibleIcons = provincia.icons.slice(0, 8);
      gridClass = 'grid grid-cols-2 grid-rows-4';
    } else {
      gridClass = 'grid grid-cols-1';
    }
  } else {
    // Mobile
    if (provincia.activities.length > 4) {
      visibleActivities = provincia.activities.slice(0, 8);
      visibleIcons = provincia.icons.slice(0, 8);
      gridClass = 'grid grid-cols-4 grid-rows-2';
    } else {
      gridClass = 'flex justify-center items-center ';
    }
  }

  return (
    <motion.section
      className="w-full min-h-[400px] sm:min-h-[600px] md:h-[70vh] relative overflow-hidden py-10 sm:py-0 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >

      {/* Contenido centrado y limitado */}
      <div className="relative z-10 max-w-7xl mx-auto sm:px-6 space-y-10">
        <h2 className="w-full text-2xl sm:text-2xl md:text-3xl font-bold text-center text-[var(--color-primary)]">
          {regional.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            className="w-full scale-[1.2]  max-w-[300px] mx-auto min-h-[250px] md:w-[250px] md:pr-10 md:scale-100 md:min-h-[250px] md:h-full md:pl-2 rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
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
              <div className="flex flex-col w-3/4 h-full mx-auto text-[var(--color-primary)] justify-center ">
                <p className="text-lg md:pb-6 md:text-2xl my-2 sm:mt-0 font-bold text-center">
                  {provincia.name}
                </p>
                <div className="relative flex flex-col items-center">
                  {/* Desktop: grilla 2x4 o 1xN según cantidad, Mobile: fila/columna */}
                  <div className="w-full">
                    <div className={`${gridClass} gap-2 md:gap-2 lg:gap-3 xl:gap-4 justify-center items-center`}>
                      {visibleActivities.map((act, idx) => (
                        <div key={idx} className="flex flex-col items-center mx-auto w-[80px] sm:w-[80px] md:w-[70px] lg:w-[80px] xl:w-[90px]">
                          <Image
                            src={visibleIcons[idx]}
                            alt={act}
                            width={36}
                            height={36}
                            className="mb-1 w-7 h-7 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
                          />
                          <p className="text-[0.65rem] sm:text-xs md:text-xs lg:text-sm xl:text-base w-full text-center text-balance">{act}</p>
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
