'use client';
import dynamic from 'next/dynamic';

const OfficeMap = dynamic(() => import('./OfficeMap'), { ssr: false });

export default function OfficesSection({ offices }) {
  const locationsLocal = [...offices.locations]
  return (
    <section className="w-full py-4 sm:py-10 px-4 bg-[var(--color-secondary)] text-center">
      <h2 className="text-xl md:text-2xl lg:text-2xl font-bold text-[var(--color-accent)] mb-4 sm:mb-8">{offices.title}</h2>

      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4 md:gap-6">
          {locationsLocal.map((loc, index) => {
            // Construir URL de Google Maps con lat/lng
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`;
            return (
              <a
                key={index}
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-[280px] md:w-[180px] lg:w-[180px] xl:w-[180px] rounded-2xl overflow-hidden border-2 border-[var(--color-accent)] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] bg-[var(--color-secondary)] shadow-md"
              >
                <h3 className="text-[var(--color-primary)] font-semibold text-sm md:text-md py-2 bg-[var(--color-accent)] text-center">
                  {loc.name}
                </h3>
                <OfficeMap lat={loc.lat} lng={loc.lng} name={loc.name} address={loc.address} />
                <h3 className='text-white text-center py-2 text-xs bg-transparent'>
                  OpenStreetMap
                </h3>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
