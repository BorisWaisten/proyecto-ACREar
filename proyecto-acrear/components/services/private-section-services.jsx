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
    {
      title: 'INTERNACIONALIZACIÓN DE EMPRESAS',
      description:
        'Acompañamos a las empresas en su proceso de internacionalización con estrategias a medida, facilitando su inserción en los mercados globales.',
    },
    {
      title: 'FORMACIÓN',
      description:
        'Brindamos capacitaciones relativas a nuevas tendencias del comercio internacional, requerimientos de los mercados de destino, aspectos culturales, herramientas de comercio exterior y logística internacional.',
    },
    {
      title: 'PROMOCIÓN DE EXPORTACIONES',
      description:
        'Impulsamos la promoción de la producción regional en ferias, rondas de negocios y plataformas internacionales, posicionando la oferta argentina en mercados exigentes.',
    },
    {
      title: 'BÚSQUEDA DE CLIENTES EN DESTINO',
      description:
        'Acompañamos a las empresas desde el diagnóstico hasta la expansión comercial para facilitar su inserción internacional.',
    },
    {
      title: 'SERVICIOS ADUANEROS',
      description:
        'Acompañamos cada operación para garantizar agilidad, seguridad y eficiencia, gestionando documentación y cumplimiento normativo.',
    },
    {
      title: 'SERVICIO EN DEPÓSITO FISCAL',
      description:
        'Ofrecemos servicios de depósito fiscal para facilitar el almacenamiento, optimizando tiempos y costos logísticos.',
    },
    {
      title: 'GESTIÓN CONTABLE Y FISCAL EN COMERCIO EXTERIOR',
      description:
        'Asistimos en la tramitación de impuestos locales e internacionales, garantizando cumplimiento y optimización tributaria.',
    },
    {
      title: 'ASESORAMIENTO EN FINANCIAMIENTO',
      description:
        'Asesoramos a empresas en el acceso a créditos, programas de apoyo y vinculación con inversores para proyectos productivos y expansión internacional.',
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
