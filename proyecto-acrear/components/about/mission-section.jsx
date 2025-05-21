'use client';
import { useState } from 'react';
import Image from 'next/image';

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
    <section className=" mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] bg-white overflow-hidden ">

        {/* Columna izquierda: misión + contenido */}
        <div className="flex flex-col md:flex-row gap-6 px-6 py-16 bg-[var(--color-background)]">

          {/* Sidebar */}
          <div className="flex flex-col gap-4 w-full md:w-[200px]">
            {items.map((item, index) => (
              <button
                key={item.key}
                onClick={() => setActiveIndex(index)}
                className={`text-left px-4 py-3 rounded-xl border font-semibold shadow-md tracking-wide transition-all duration-300
                  ${activeIndex === index
                    ? 'bg-[var(--color-accent)] text-white border-[var(--color-primary)] scale-[1.03]'
                    : 'bg-white text-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contenido activo */}
          <div className="flex-1 h-full bg-white p-6 rounded-xl border border-[var(--color-primary)] shadow-sm transition-all duration-500 animate-fade-in">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 flex rounded-full">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="16" fill="#cd8a53" stroke="#183146" strokeWidth="2" />
                  <path d="M14 12L18 18L14 24" stroke="#183146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 12L24 18L20 24" stroke="#183146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[var(--color-primary)]">
                {items[activeIndex].label}
              </h3>
            </div>
            <p className="text-sm md:text-base text-[var(--color-primary)] whitespace-pre-line">
              {items[activeIndex].content}
            </p>
          </div>
        </div>

        {/* Columna derecha: desarrollo sostenible con fondo azul completo */}
        <div className="bg-[var(--color-primary)] flex flex-col justify-center items-center text-white p-6">
          <h4 className="text-center text-base font-semibold mb-2 uppercase">
            Comprometidos con el desarrollo sostenible en Argentina
          </h4>
          <p className="text-xs text-[var(--color-accent)] mb-5">Contribuyendo con:</p>
          <Image
            src="/logos/logo-sdg.svg"
            alt="Sustainable Development Goals"
            width={200}
            height={200}
            className="rounded-full md:scale-150"
          />
        </div>
      </div>
    </section>
  );
}
