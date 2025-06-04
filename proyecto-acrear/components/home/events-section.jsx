'use client';
import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function EventsSection({ events }) {
  const eventsLocal = [
    {
      ...events.acrearg
    },
    {
      ...events.internacionale
    },
    {
     ...events.asistencie
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    cssEase: 'ease-in-out',
    customPaging: function(i) {
      return (
        <button
          className="rounded-full"
          tabIndex={0}
          aria-label={`Ir al slide ${i + 1}`}
        />
      );
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren"
      }
    }
  };

  const slideVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3
      }
    }
  };

  return (
    <motion.section 
      className="w-full h-[90vh] md:h-screen bg-[var(--color-secondary)] relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div>
        <Slider {...settings}>
          {eventsLocal.map((event, index) => (
            <div key={index}>
              <motion.div 
                className="relative overflow-hidden h-full md:h-screen shadow-lg"
                variants={slideVariants}
              >
                <motion.div
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 8, ease: "linear" }}
                  className="h-full"
                >
                  <Image
                    src={event.img}
                    alt={event.title}
                    width={1200}
                    height={500}
                    className="object-cover w-full h-[90vh] md:h-screen"
                  />
                </motion.div>
                <motion.div 
                  className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white text-center p-4"
                  variants={contentVariants}
                >
                  <motion.h3 
                    className="text-sm md:text-2xl font-bold mb-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {event.title}
                  </motion.h3>
                  <motion.p 
                    className="text-[.7rem] text-center md:text-base mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {event.text}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <Link href={event.link}>
                      <button className="text-sm sm:text-base bg-[var(--color-accent)] hover:brightness-90 text-white font-semibold px-6 py-2 rounded-full transition-all">
                        {events.button}
                      </button>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        .slick-dots {
          bottom: 2rem !important;
          z-index: 50;
          display: flex !important;
          justify-content: center;
          gap: 0.5rem;
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
          background-color: white;
          opacity: 0.7;
        }
        .slick-dots li.slick-active button {
          opacity: 1;
        }
        .slick-dots li button:before {
          display: none;
        }
      `}</style>
    </motion.section>
  );
}
