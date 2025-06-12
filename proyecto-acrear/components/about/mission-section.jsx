'use client';
import { useState } from 'react';

export default function MissionSection({ about }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemsPerPage = 1;

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

  const totalPages = Math.ceil(items[activeIndex].content.split('\n').length / itemsPerPage);
  const contentLines = items[activeIndex].content.split('\n');
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentContent = contentLines.slice(startIndex, endIndex).join('\n');

  const handlePageChange = (newPage) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="w-full sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:h-[70vh] md:flex-row md:items-center gap-8 p-8 md:p-12">

          {/* Sidebar */}
          <div className="flex flex-row justify-center md:flex-col gap-4 md:w-[280px]">
            {items.map((item, index) => (
              <button
                key={item.key}
                onClick={() => {
                  setActiveIndex(index);
                  setCurrentPage(1);
                }}
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
          <div className="flex flex-col gap-4 lg:w-[50%] lg:h-[78%] md:mx-auto bg-white  md:p-2 rounded-xl border border-[var(--color-primary)] shadow-sm transition-all duration-500 animate-fade-in">
            <div className="flex items-center gap-4 p-4">
              <div className="p-2 flex rounded-full">
                <svg width="32" height="32" className="md:w-12 md:h-12" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="16" fill="#cd8a53" stroke="#183146" strokeWidth="2" />
                  <path d="M14 12L18 18L14 24" stroke="#183146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 12L24 18L20 24" stroke="#183146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-[var(--color-primary)]">
                {items[activeIndex].label}
              </h3>
            </div>
            
            <div className=" w-[90%]  h-full mb-12 lg:mb-0 mx-auto overflow-y-auto">
              <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0 ' : 'opacity-100 '}`}>
                <p className="text-sm md:text-[0.9rem] text-justify lg:text-[1.13rem] text-[var(--color-primary)] whitespace-pre-line leading-relaxed">
                  {currentContent}
                </p>
              </div>
            </div>
            
            {/* Paginación */}
            {totalPages > 1 && (
              <div className="h-12 flex items-center  justify-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 rounded-md transition-all duration-300 ${
                    currentPage === 1
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-accent)]'
                  }`}
                >
                  Anterior
                </button>
                <span className="px-3 py-1">
                  Página {currentPage} de {totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 rounded-md transition-all duration-300 ${
                    currentPage === totalPages
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-accent)]'
                  }`}
                >
                  Siguiente
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
