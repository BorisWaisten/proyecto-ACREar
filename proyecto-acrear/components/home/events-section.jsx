'use client';
import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
          className=" rounded-full "
          tabIndex={0}
          aria-label={`Ir al slide ${i + 1}`}
        />
      );
    },
  };

  return (
    <section className="w-full h-[50vh] md:h-screen bg-[var(--color-secondary)] relative">
      <div>
        <Slider {...settings}>
          {eventsLocal.map((event, index) => (
            <div key={index}>
              <div className="relative overflow-hidden shadow-lg">
                <Image
                  src={event.img}
                  alt={event.title}
                  width={1200}
                  height={500}
                  className="object-cover w-full h-[50vh] md:h-screen"
                />
                <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white text-center p-4">
                  <h3 className="text-sm md:text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-[.7rem] text-center md:text-base mb-4">{event.text}</p>
                  <Link href={event.link}>
                    <button className="text-sm sm:text-base bg-[var(--color-accent)] hover:brightness-90 text-white font-semibold px-6 py-2 rounded-full transition-all">
                      {events.button}
                    </button>
                  </Link>
                </div>
              </div>
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
    </section>
  );
}
