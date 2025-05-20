'use client';
import { useEffect, useRef, useState } from 'react';

const items = [
  {
    key: 'mision',
    label: 'MISIÓN',
    content: `Fortalecer la matriz productiva y exportadora de las economías regionales de la Argentina, impulsando la internacionalización de sus empresas y productos, promoviendo el agregado de valor, la diversificación de la canasta exportadora y el acceso a mercados estratégicos.`,
  },
  {
    key: 'vision',
    label: 'VISIÓN',
    content: `Convertirnos en la institución de referencia en el fortalecimiento de las economías regionales, reconocida por su capacidad de promoción del desarrollo competitivo, inclusivo y exportador.`,
  },
  {
    key: 'objetivo-general',
    label: 'OBJETIVO GENERAL',
    content: `Fortalecer las capacidades institucionales y productivas del sector público y privado, impulsando la internacionalización de las economías regionales.`,
  },
  {
    key: 'objetivos-especificos',
    label: 'OBJETIVOS ESPECÍFICOS',
    content: `
● Sector público: Fortalecer capacidades empresariales y promocionar producción provincial mediante asesoramiento, articulación institucional, promoción comercial y financiamiento.\n
● Sector privado: Apoyar el posicionamiento internacional con promoción, financiamiento y representación.\n
● Articulación: Generar vínculo activo entre sector público y privado.\n
● Productos: Promover productos argentinos con valor agregado en el exterior.
    `,
  },
];

export default function MissionSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Sidebar tipo “cartas” */}
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <button
            key={item.key}
            onClick={() => setActiveIndex(index)}
            className={`text-left w-full px-4 py-3 rounded-md border transition-all duration-300 shadow-sm font-semibold tracking-wide ${
              activeIndex === index
                ? 'bg-[var(--color-accent)] text-white border-[var(--color-primary)] shadow-lg'
                : 'bg-white text-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Contenido activo */}
      <div className="md:col-span-2  flex flex-col justify-center">
      <div
        key={items[activeIndex].key}
        className="transition-all  duration-500 animate-fade-in bg-white p-6 rounded-xl border border-[var(--color-primary)]"
      >
        <div className="flex items-center  gap-3 mb-2">
          {/* Flecha decorativa */}
          <div className="p-2 flex rounded-full ">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18" cy="18" r="16" fill="#cd8a53" stroke="#183146" strokeWidth="2" />
              <path
                d="M14 12L18 18L14 24"
                stroke="#183146"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 12L24 18L20 24"
                stroke="#183146"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </div>

            {/* Título */}
            <h3 className="text-lg md:text-xl font-bold text-[var(--color-primary)]">
              {items[activeIndex].label}
            </h3>
          </div>

          {/* Contenido */}
          <p className="text-sm md:text-base text-gray-800 whitespace-pre-line">
            {items[activeIndex].content}
          </p>
        </div>


      </div>
    </section>
  );
}
