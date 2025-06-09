'use client';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

export default function NuestraComunidad({ alliances }) {
  // Unificamos todos los logos en un solo array
  const allLogos = [
    ...alliances.partners.logos,
    ...alliances.companies.logos,
    ...alliances.entities.logos,
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 640, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
    ],
    arrows: false,
  };

  return (
    <section className="w-full relative overflow-hidden py-20">


      {/* Contenido centrado y limitado */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-10 text-[var(--color-primary)]">
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
              <div key={i} className="px-4">
                <div className="h-28 sm:h-32 flex items-center justify-center p-4">
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
      </div>


    </section>
  );
}
