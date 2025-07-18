'use client';

import { motion } from 'framer-motion';
import Slider from 'react-slick';


export default function PrivateSectorServices({ privateServices , title}) {

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
          slidesToScroll: 1,
          fade: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          fade: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
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
    <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-center text-lg sm:text-xl uppercase font-semibold text-[var(--color-secondary)]  mb-8 tracking-wide">
        {title}
      </h2>

      {/* Mobile Carousel */}
      <div className="block md:hidden relative">
        <Slider {...settings}>
          {privateServices.map((item, i) => (
            <div key={i} className="px-2">
              <motion.div
                className="bg-[#214D64] h-[13rem] sm:h-[14rem] md:h-[15rem] text-white p-4 sm:p-5 md:p-6 mx-1 sm:mx-2 rounded-xl border-2 border-[#CD8A53] shadow-lg"
                custom={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="text-base md:text-lg font-bold text-center text-balance mb-2">{item.title}</h4>
                <p className="text-xs md:text-sm text-justify leading-relaxed"
                  style={{ 
                    textJustify: 'inter-word'
                  }}
                >{item.description}</p>
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

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {privateServices.map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#214D64] text-white p-6 rounded-xl border-2 border-[#CD8A53] w-full max-w-sm shadow-lg hover:scale-105 transition-transform duration-300"
            custom={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-sm h-8 font-bold text-left mb-3">{item.title}</h4>
            <p className="text-[.7rem] text-left leading-relaxed hyphens-auto" 
               style={{ 
                 wordSpacing: '-0.13em',
                 textJustify: 'inter-word'
               }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
