'use client';
import Image from 'next/image';
import { useState } from 'react';

const partners = [
  { name: 'Empresa 1', logo: '/fotos/socios-estrategicos/socio-1.png' },
  { name: 'Empresa 2', logo: '/fotos/socios-estrategicos/socio-2.png' },
  { name: 'Empresa 3', logo: '/fotos/socios-estrategicos/socio-3.png' },
  { name: 'Empresa 4', logo: '/fotos/socios-estrategicos/socio-4.png' },
  { name: 'Empresa 5', logo: '/fotos/socios-estrategicos/socio-5.png' },
  { name: 'Empresa 6', logo: '/fotos/socios-estrategicos/socio-6.png' },
  { name: 'Empresa 7', logo: '/fotos/socios-estrategicos/socio-7.png' },
  { name: 'Empresa 8', logo: '/fotos/socios-estrategicos/socio-8.png' },
];

export default function StrategicPartnersSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[var(--color-background)] py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-[var(--color-primary)] text-center mb-10">
        SOCIOS ESTRATÉGICOS
      </h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        {partners.map((partner, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`p-4 bg-white rounded-xl border shadow-md hover:scale-105 transition-transform ${
              activeIndex === index ? 'ring-2 ring-[var(--color-accent)]' : ''
            }`}
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={100}
              height={100}
              className="mx-auto object-contain"
            />
          </button>
        ))}
      </div>

      {/* Mostrar imagen activa con detalle si querés */}
      {/* <div className="mt-10 flex justify-center">
        <Image
          src={partners[activeIndex].logo}
          alt={partners[activeIndex].name}
          width={160}
          height={160}
        />
      </div> */}
    </section>
  );
}
