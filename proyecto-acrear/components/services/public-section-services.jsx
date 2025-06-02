'use client';

import { motion } from 'framer-motion';
import Slider from 'react-slick';


export default function PublicSectorServices({ publicServices, title }) {


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    cssEase: 'ease-in-out',
    customPaging: function(i) {
      return (
        <button
          className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white shadow-md border-2 border-[var(--color-accent)] flex items-center justify-center transition-all duration-300 focus:outline-none"
          tabIndex={0}
          aria-label={`Ir al slide ${i + 1}`}
        />
      );
    },
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
    <section className=" py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-center text-lg font-semibold text-[var(--color-secondary)]  mb-8 tracking-wide">
        {title}
      </h2>

      {/* Mobile Carousel */}
      <div className="block lg:hidden relative">
        <Slider {...settings}>
          {publicServices.map((item, i) => (
            <div key={i} className="px-2">
              <motion.div
                className="bg-[#214D64] h-[12rem] text-white p-6 rounded-xl border-2 border-[#CD8A53] "
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
        {/* Dots estilos globales */}
        <style jsx global>{`
          .slick-dots {
            bottom: -2.5rem !important;
            display: flex !important;
            justify-content: center;
            gap: 0.5rem;
            z-index: 20;
          }
          .slick-dots li {
            margin: 0;
          }
          .slick-dots li.slick-active button {
            background: var(--color-accent) !important;
            border-color: var(--color-accent) !important;
            transform: scale(1.2);
            box-shadow: 0 0 0 4px rgba(194,139,76,0.15);
          }
          .slick-dots li button {
            transition: all 0.3s cubic-bezier(.4,0,.2,1);
            opacity: 0.7;
          }
          .slick-dots li.slick-active button {
            opacity: 1;
          }
        `}</style>
      </div>

      {/* Desktop: pirámide inversa */}
      <div className="hidden lg:flex flex-col items-center space-y-10">
        {/* Fila superior (3) */}
        <div className="flex justify-center gap-6 w-full ">
          {publicServices.slice(0, 3).map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#214D64] text-white p-6 rounded-xl border-2 border-[#CD8A53] shadow-lg w-1/3"
              custom={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-center mb-2">{item.title}</h3>
              <p className="text-sm text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Fila inferior centrada (2) */}
        <div className="flex justify-center gap-6 w-full ">
          {publicServices.slice(3).map((item, j) => (
            <motion.div
              key={j + 3}
              className="bg-[#214D64] text-white p-6 rounded-xl border-2 border-[#CD8A53] shadow-lg w-1/3 "
              custom={j + 3}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-center mb-2">{item.title}</h3>
              <p className="text-sm text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
