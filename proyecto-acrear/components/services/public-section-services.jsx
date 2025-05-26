'use client';

import { motion } from 'framer-motion';
import Slider from 'react-slick';


export default function PublicSectorServices() {
  const servicios = [
    {
      title: 'CONSULTORÍA',
      description:
        'Brindamos consultorías e informes especializados al sector público nacional, provincial y municipal en temas de comercio exterior e internacionalización de empresas de las economías regionales de la Argentina.',
    },
    {
      title: 'FORTALECIMIENTO DE LAS CAPACIDADES',
      description:
        'Impulsamos acciones que mejoren la competitividad exportadora, el agregado de valor y la integración de las empresas en cadenas globales.',
    },
    {
      title: 'MISIONES INSTITUCIONALES Y COMERCIALES',
      description:
        'Conectamos instituciones con contrapartes internacionales mediante agendas comerciales, institucionales y visitas técnicas.',
    },
    {
      title: 'CAPACITACIONES',
      description:
        'Ofrecemos programas de formación profesional ajustados a las necesidades del sector público en comercio exterior e internacionalización.',
    },
    {
      title: 'FINANCIAMIENTO PARA EL DESARROLLO REGIONAL',
      description:
        'Asistimos a gobiernos locales en la formulación de proyectos y búsqueda de financiamiento nacional/internacional para infraestructura y comercio exterior.',
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-[var(--color-background)] py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-center text-lg font-semibold text-[var(--color-secondary)] uppercase mb-8 tracking-wide">
        SECTOR PÚBLICO
      </h2>

      {/* Mobile Carousel */}
      <div className="block lg:hidden">
        <Slider {...settings}>
          {servicios.map((item, i) => (
            <div key={i} className="px-2">
              <motion.div
                className="bg-[#214D64] h-[12rem] text-white p-6 rounded-xl border-2 border-[#CD8A53] shadow-lg"
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
