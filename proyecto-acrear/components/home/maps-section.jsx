'use client';
import { useState } from 'react';
import Image from 'next/image';
import ArgMaps from '@/components/home/arg-maps';
import { motion, AnimatePresence } from 'framer-motion';

export default function MapSection({ regional, provincias }) {
  const [selectedId, setSelectedId] = useState(provincias[0].id);
  const provincia = provincias.find((p) => p.id === selectedId);

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

        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          {/* Mapa interactivo */}
          <motion.div
            className="w-[250px] pr-10 scale-[1.6] sm:pr-0 sm:scale-100  sm:w-full min-h-[250px] sm:h-full md:h-full pl-2 sm:pl-0 rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ArgMaps onSelect={setSelectedId} />
          </motion.div>

          {/* Animación al cambiar provincia */}
          <AnimatePresence mode="wait">
            <motion.div
              key={provincia?.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col w-full h-full text-[var(--color-primary)] justify-center ">
                <p className="text-lg md:pb-6 md:text-2xl font-bold text-center">
                  {provincia.name}
                </p>
                {provincia.activities.map((act, idx) => (
                  <div key={idx} className="flex sm:w-[100px] sm:mb-4 md:w-[450px] sm:mx-auto items-center gap-4">
                    <Image
                      src={provincia.icons[idx]}
                      alt={act}
                      width={60}
                      height={60}
                      className="mb-2 w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16"
                    />
                    <p className="text-xs md:w-full sm:text-sm text-balance sm:text-center md:text-lg">{act}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>


    </motion.section>
  );
}
