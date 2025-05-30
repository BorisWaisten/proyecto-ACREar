'use client';
import { useState } from 'react';

export default function MissionSection({ about }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      key: 'mision',
      label: about.mission.title,
      content: about.mission.text,
    },
    {
      key: 'vision',
      label: about.vision.title,
      content: about.vision.text,
    },
    {
      key: 'objetivo-general',
      label: about.objectiveGeneral.title,
      content: about.objectiveGeneral.text,
    },
    {
      key: 'objetivos-especificos',
      label: about.objectiveSpecifics.title,
      content: about.objectiveSpecifics.objectives
        .map(obj => `• ${obj.title}: ${obj.text}`)
        .join('\n'),
    },
  ];

  return (
    <section className="w-full px-6 py-16 bg-white ">
      <div className="max-w-5xl md:h-[70vh] mx-auto">
        <div className="flex flex-col  md:flex-row gap-6 bg-[var(--color-background)] rounded-xl p-6 shadow-lg">

          {/* Sidebar */}
          <div className="flex flex-row justify-center md:flex-col  gap-4  md:w-[200px] ">
            {items.map((item, index) => (
              <button
                key={item.key}
                onClick={() => setActiveIndex(index)}
                className={`text-[.7rem] p-1 md:text-left md:px-4 md:py-3 rounded-xl border font-semibold shadow-md tracking-wide transition-all duration-300
                ${activeIndex === index
                  ? 'bg-[var(--color-accent)] text-white border-[var(--color-primary)] scale-[1.03]'
                  : 'bg-white text-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contenido activo */}
          <div className="flex-1  bg-white p-6 rounded-xl border border-[var(--color-primary)] shadow-sm transition-all duration-500 animate-fade-in">
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
      </div>
    </section>
  );
}
