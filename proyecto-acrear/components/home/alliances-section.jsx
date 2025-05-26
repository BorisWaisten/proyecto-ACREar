'use client';
import { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AnimatePresence, motion } from 'framer-motion';

const allianceData = [
  {
    key: 'socios',
    label: 'Socios Estratégicos',
    logos: [
      '/socios/socio-1.png',
      '/socios/socio-2.png',
      '/socios/socio-3.png',
      '/socios/socio-4.png',
      '/socios/socio-5.png',
      '/socios/socio-6.png',
      '/socios/socio-7.png',
      '/socios/socio-8.png',
    ],
  },
  {
    key: 'empresas',
    label: 'Empresas Vinculadas',
    logos: [
      '/empresas/empresa-1.png',
      '/empresas/empresa-2.png',
      '/empresas/empresa-3.png',
    ],
  },
  {
    key: 'entidades',
    label: 'Entidades que nos apoyan',
    logos: [
      '/entidades/entidad-1.png',
      '/entidades/entidad-2.png',
      '/entidades/entidad-3.png',
      '/entidades/entidad-4.png',
      '/entidades/entidad-5.png',
      '/entidades/entidad-6.png',
      '/entidades/entidad-7.png',
    ],
  },
];

export default function NuestraComunidad() {
  const [activeIndex, setActiveIndex] = useState(0);
  const selected = allianceData[activeIndex];
  const isReverse = selected.key === 'entidades';

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: isReverse,
    responsive: [
      { breakpoint: 640, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
    ],
    arrows: false,
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-10 text-[var(--color-primary)]">
        Nuestra Comunidad
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {allianceData.map((item, index) => (
          <button
            key={item.key}
            onClick={() => setActiveIndex(index)}
            className={`px-5 py-2 rounded-full border font-semibold text-sm md:text-base transition-all duration-300 ${
              index === activeIndex
                ? 'bg-[var(--color-primary)] text-white'
                : 'bg-white text-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Animación con framer-motion */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.key}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
        >
          <Slider {...settings}>
            {selected.logos.map((logo, i) => (
              <div key={i} className="px-4">
                <div className="lg:h-[8.5rem] flex items-center justify-center">
                  <Image
                    src={logo}
                    alt={`logo-${i}`}
                    width={120}
                    height={80}
                    quality={100}
                    className="object-contain lg:scale-125 max-h-full max-w-full"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
