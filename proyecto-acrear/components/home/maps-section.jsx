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

        {/* Info dinámica */}
        <div className="flex flex-col items-center justify-center bg-[var(--color-background)] rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
            {provincia.name}
          </h3>
          <Image
            src={provincia.icon}
            alt={provincia.activity}
            width={120}
            height={120}
            className="mb-4"
          />
          <p className="text-center text-sm text-gray-800">
            {provincia.activity}
          </p>
        </div>
      </div>
    </section>
  );
}
