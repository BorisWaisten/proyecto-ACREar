'use client';
import { useState } from 'react';
import Image from 'next/image';
import ArgMaps from '@/components/home/arg-maps';
import { provincias } from '@/data/provincias';
import { motion, AnimatePresence } from 'framer-motion';

export default function MapSection() {
  const [selectedId, setSelectedId] = useState(provincias[0].id);
  const provincia = provincias.find((p) => p.id === selectedId);

  return (
    <motion.section
      className="max-w-7xl mx-auto px-6 py-16 space-y-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[var(--color-primary)]">
        NUESTRAS ECONOMÍAS REGIONALES
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mapa interactivo */}
        <motion.div
          className="w-full h-full rounded-xl overflow-hidden shadow-md"
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
            key={provincia?.id} // Esto es crucial: fuerza re-render con animación
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col text-[var(--color-primary)] justify-center mx-auto">
              <p className="text-lg md:pb-6 md:text-2xl font-bold text-center">
                {provincia.name}
              </p>
              {provincia.activities.map((act, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <Image
                    src={provincia.icons[idx]}
                    alt={act}
                    width={60}
                    height={60}
                    className="mb-2"
                  />
                  <p className="text-sm text-center">{act}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
