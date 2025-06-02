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
    autoplaySpeed: 1500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 640, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 7 } },
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
      </div>


    </section>
  );
}
