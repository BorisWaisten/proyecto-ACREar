'use client';
import { useState } from 'react';

export default function MissionSection({ about }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      key: 'mision',
      label: about.mission.title,
      content: about.mission.text,
      type: 'text'
    },
    {
      key: 'vision',
      label: about.vision.title,
      content: about.vision.text,
      type: 'text'
    },
    {
      key: 'objetivo-general',
      label: about.objectiveGeneral.title,
      content: about.objectiveGeneral.text,
      type: 'text'
    },
    {
      key: 'objetivos-especificos',
      label: about.objectiveSpecifics.title,
      objectives: about.objectiveSpecifics.objectives,
      type: 'cards'
    },
  ];

  return (
    <section className="w-[90%] mx-auto sm:w-full  sm:px-6 md:h-[600px] sm:min-h-[300px]">
        <div className={`mx-auto w-[90%] lg:w-[80%] h-full ${activeIndex === 3 ? '' : 'max-w-4xl'}`}>
          <div className="flex flex-col  md:h-full md:flex-row md:items-center gap-8 h-full">

            {/* Sidebar - siempre mantiene su tamaño */}
            <div className="flex flex-row justify-center md:flex-col gap-4 mt-4 md:mt-0 md:w-[250px] flex-shrink-0">
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
                      {items[activeIndex].type === 'cards' ? (
              // Cards para objetivos específicos - centrado vertical
              <div className="w-full flex-1 flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-4 sm:mb-0">
                {items[activeIndex].objectives.map((objective, index) => (
                  <div 
                    key={index}
                    className="bg-white sm:h-[250px]  border-2 border-[var(--color-primary)] text-[var(--color-primary)] p-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <h3 className="text-md font-bold mb-1 text-center border-b-2 border-[var(--color-accent)] ">
                      {objective.title}
                    </h3>
                    <p className=" text-sm sm:text-[.76rem] xl:text-base leading-relaxed text-left tracking-wide">
                      {objective.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Texto normal para otros items
            <div className="flex justify-center items-center mx-auto w-[90%] lg:w-[50%] h-auto mb-4 md:mb-0 sm:min-h-[20vh] sm:max-h-[65vh] bg-white md:p-2 rounded-xl border border-[var(--color-primary)] shadow-sm transition-all duration-500 animate-fade-in">            
              <div className="w-[90%] h-full m-4 lg:mb-2 mx-auto scrollbar-hide">
                <p className="text-sm md:text-base text-balance lg:text-base text-[var(--color-primary)] whitespace-pre-line leading-none tracking-wide">
                  {items[activeIndex].content}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
