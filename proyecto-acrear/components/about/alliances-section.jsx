'use client';
import { useState } from 'react';
import Image from 'next/image';

const allianceData = [
  {
    key: 'socios',
    label: 'Socios Estratégicos',
    logos: ['/socios/socio-1.png', '/socios/socio-2.png', '/socios/socio-3.png', '/socios/socio-4.png', '/socios/socio-5.png', '/socios/socio-6.png', '/socios/socio-7.png', '/socios/socio-8.png'],
  },
  {
    key: 'empresas',
    label: 'Empresas Vinculadas',
    logos: ['/empresas/empresa-1.png', '/empresas/empresa-2.png', '/empresas/empresa-3.png'],
  },
  {
    key: 'entidades',
    label: 'Entidades que nos apoyan',
    logos: ['/entidades/entidad-1.png', '/entidades/entidad-2.png', '/entidades/entidad-3.png', '/entidades/entidad-4.png', '/entidades/entidad-5.png', '/entidades/entidad-6.png', '/entidades/entidad-7.png', '/entidades/entidad-8.png'],
  },
];

export default function AlliancesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = allianceData[activeTab];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-[var(--color-secondary)] grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Sidebar tipo carta */}
      <div className="flex flex-col gap-4 col-span-1">
        {allianceData.map((item, i) => (
          <button
            key={item.key}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-4 rounded-xl border font-semibold shadow-md tracking-wide transition-all duration-300
              ${activeTab === i
                ? 'bg-[var(--color-accent)] text-white border-[var(--color-primary)] scale-[1.03]'
                : 'bg-white text-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-white'}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Contenido central: logos */}
      <div className="col-span-1 md:col-span-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center transition-all duration-500 animate-fade-in">
          {current.logos.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Logo ${i + 1}`}
              width={100}
              height={100}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
