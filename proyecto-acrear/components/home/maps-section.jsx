'use client';
import { useState } from 'react';
import Image from 'next/image';
import ArgMaps from '@/components/home/arg-maps';
import { provincias } from '@/data/provincias';

export default function MapSection() {
  const [selectedId, setSelectedId] = useState(provincias[0].id);
  const provincia = provincias.find((p) => p.id === selectedId);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 space-y-10">
      {/* Título */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[var(--color-primary)]">
        NUESTRAS ECONOMÍAS REGIONALES
      </h2>

      {/* Contenido principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mapa interactivo */}
        <div className="w-full h-full rounded-xl overflow-hidden shadow-md">
          <ArgMaps onSelect={setSelectedId} />
        </div>

      <div className="flex flex-col text-[var(--color-primary)] justify-center mx-auto">
        <p className='text-lg md:pb-6 md:text-2xl font-bold text-center'>{provincia.name}</p>
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
      </div>
    </section>
  );
}
