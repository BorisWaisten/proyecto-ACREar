'use client';

import { motion } from 'framer-motion';
import Slider from 'react-slick';


export default function PrivateSectorServices() {
  const servicios = [
    {
      title: 'INTELIGENCIA COMERCIAL',
      description:
        'Asesoramos sobre mercados internacionales, normativas, documentación, posicionamiento estratégico y más.',
    },
    {
      title: 'MISIÓN COMERCIAL',
      description:
        'Organizamos agendas de negocios para explorar nuevos mercados, generar contactos y cerrar ventas.',
    },
    {
      title: 'CONSULTORÍA EN EXPORTACIÓN',
      description:
        'Brindamos asistencia integral para iniciar o mejorar procesos de exportación.',
    },
    {
      title: 'GESTIÓN DE CERTIFICACIONES',
      description:
        'Asistimos en la obtención de certificaciones de calidad necesarias para mercados internacionales.',
    },
    {
      title: 'FINANCIAMIENTO PARA EXPORTAR',
      description:
        'Orientamos en el acceso a líneas de financiamiento para potenciar la capacidad exportadora.',
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: 'unslick',
      },
    ],
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };

  return (
    <section className="bg-[var(--color-background)] py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-center text-lg font-semibold text-[var(--color-secondary)] uppercase mb-8 tracking-wide">
        SECTOR PRIVADO
      </h2>

      {/* Mobile Carousel */}
      <div className="block lg:hidden">
        <Slider {...settings}>
          {servicios.map((item, i) => (
            <div key={i} className="px-2">
              <motion.div
                className="bg-[#214D64] h-[10rem] text-white p-6 rounded-xl border-2 border-[#CD8A53] shadow-lg"
                custom={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="text-sm font-bold text-center mb-2">{item.title}</h4>
                <p className="text-sm text-center leading-relaxed">{item.description}</p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-3 gap-6 justify-items-center">
        {servicios.map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#214D64] text-white p-6 rounded-xl border-2 border-[#CD8A53] w-full max-w-sm shadow-lg hover:scale-105 transition-transform duration-300"
            custom={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-md sm:text-lg font-bold text-center mb-2">{item.title}</h4>
            <p className="text-sm text-center leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
