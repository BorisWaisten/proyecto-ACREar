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
        .map(obj => `${obj.title}: ${obj.text}`)
        .join('\n'),
    },
  ];

  return (
    <section className="w-full sm:px-6 md:h-[70vh] min-h-[45vh]">
      <div className="mx-auto w-[90%] lg:w-[80%] max-w-7xl h-full">
        <div className="flex flex-col md:h-full md:flex-row md:items-center gap-8 h-full">

          {/* Sidebar */}
          <div className="flex flex-row justify-center md:flex-col gap-4 mt-4 md:mt-0 md:w-[280px]">
            {items.map((item, index) => (
              <button
                key={item.key}
                onClick={() => setActiveIndex(index)}
                className={`text-[.8rem] md:text-base p-2 md:px-6 md:py-4 rounded-xl border font-semibold shadow-md tracking-wide transition-all duration-300
                ${activeIndex === index
                  ? 'bg-[var(--color-accent)] text-white border-[var(--color-primary)] scale-[1.03]'
                  : 'bg-white text-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contenido activo */}
          <div className="flex flex-col  w-[90%] lg:w-[50%] h-auto mb-4 md:mb-0 sm:min-h-[30vh] sm:max-h-[65vh] mx-auto bg-white md:p-2 rounded-xl border border-[var(--color-primary)] shadow-sm transition-all duration-500 animate-fade-in">
            <div className="flex items-center p-2">
              <h3 className="text-lg md:text-xl font-bold text-[var(--color-primary)]">
                {items[activeIndex].label}
              </h3>
            </div>
            
            <div className="w-[90%] h-full mb-4 lg:mb-2 mx-auto scrollbar-hide">
              <p className="text-sm md:text-base text-center lg:text-base text-[var(--color-primary)] whitespace-pre-line leading-none tracking-tight">
                {items[activeIndex].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
