'use client';
import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';

const events = [
  {
    title: 'INTERNACIONALIZÁ TU EMPRESA',
    text: 'Te acompañamos en cada etapa de la exportación.',
    img: '/fotos/evento-1.png', // reemplazar con tus imágenes reales
    link: '/',
  },
  {
    title: 'ACREarg',
    text: 'Promovemos el desarrollo de las economías regionales de la Argentina.',
    img: '/fotos/evento-2.jpg',
    link: '/',
  },
  {
    title: 'ASISTENCIA TÉCNICA A LAS EMPRESAS',
    text: 'Fortalecé las capacidades de tu equipo.',
    img: '/fotos/evento-3.jpg',
    link: '/',
  },
];

export default function EventsSection() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="w-full py-16 bg-[var(--color-secondary)] px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-accent)] text-center mb-12">
        EVENTOS
      </h2>

      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          {events.map((event, index) => (
            <div key={index} className="px-4">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={event.img}
                  alt={event.title}
                  width={1200}
                  height={500}
                  className="object-cover w-full h-[300px] md:h-[400px]"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-4">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-sm md:text-base mb-4">{event.text}</p>
                  <Link href={event.link}>
                    <button className="bg-[var(--color-accent)] hover:brightness-90 text-white font-semibold px-6 py-2 rounded-full transition-all">
                      Ver más
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
