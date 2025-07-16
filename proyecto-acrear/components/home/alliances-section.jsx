'use client';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

export default function NuestraComunidad({ alliances }) {
  // Lista de logos chicos que necesitan scale
  const smallLogos = [
    '/empresas/empresa-5.png',
    '/empresas/empresa-1.png',
    '/entidades/entidad-3.png',
    '/entidades/entidad-7.png',
    '/socios/socio-5.png',
    '/socios/socio-7.png',
    '/socios/socio-4.png'
  ];

  // Función para verificar si un logo es pequeño
  const isSmallLogo = (logoPath) => {
    return smallLogos.includes(logoPath);
  };

  // Unificamos todos los logos en un solo array (mantenemos la estructura original)
  const allLogos = [
    ...alliances.partners.logos,
    ...alliances.companies.logos,
    ...alliances.entities.logos,
  ];

  const settings = {
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 640, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
    ],
    arrows: false,
  };

  return (
    <section className="w-full relative overflow-hidden py-20">
      {/* Contenido centrado y limitado */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-xl md:text-2xl text-center font-bold mb-10 text-[var(--color-primary)]">
          {alliances.title}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Slider {...settings}>
            {allLogos.map((logo, i) => (
              <div key={i} className="">
                <div className={`h-28 sm:h-44 sm:w-32 flex items-center justify-center mx-auto p-4 ${
                  isSmallLogo(logo) 
                    ? 'scale-125  sm:scale-[1.6] md:scale-[2.2] lg:scale-[2]' // Scale aumentado para logos chicos
                    : ' sm:scale-125 md:scale-[1.5] lg:scale-[1.2]'   // Scale normal para logos regulares
                }`}>
                  <Image
                    src={logo}
                    alt={`logo-${i}`}
                    width={180}
                    height={120}
                    quality={100}
                    className="object-contain w-full h-full max-w-[180px] max-h-[120px]"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

        <p className="text-lg md:text-xl text-center mt-4">
          {alliances.description}
        </p>
      </div>
    </section>
  );
}
