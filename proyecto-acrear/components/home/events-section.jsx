'use client';
import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';


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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: function() {
      return (
        <div className="w-3 h-3 p-2 mt-2 bg-white rounded-full opacity-50 hover:opacity-100 transition-opacity" />
      );
    },
  };

  return (
    <section className="w-full md:h-screen md:pt-[6rem] lg:pt-[8rem] bg-[var(--color-secondary)] px-4">

      <div>
        <Slider {...settings}>
          {eventsLocal.map((event, index) => (
            <div key={index} className="px-4">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={event.img}
                  alt={event.title}
                  width={1200}
                  height={500}
                  className="object-cover w-full md:h-[30rem]"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-4">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-sm md:text-base mb-4">{event.text}</p>
                  <Link href={event.link}>
                    <button className="bg-[var(--color-accent)] hover:brightness-90 text-white font-semibold px-6 py-2 rounded-full transition-all">
                      {events.button}
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
