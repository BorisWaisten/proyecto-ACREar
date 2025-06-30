'use client';
import dynamic from 'next/dynamic';

const OfficeMap = dynamic(() => import('./OfficeMap'), { ssr: false });

export default function OfficesSection({ offices }) {
  const locationsLocal = [...offices.locations]
  return (
    <section className="w-full py-16 px-4 bg-[var(--color-secondary)] text-center">
      <h2 className="text-xl md:text-2xl font-bold text-[var(--color-accent)] mb-12">{offices.title}</h2>

      <div className="grid grid-cols-1 bg-[var(--color-secondary)] md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {locationsLocal.map((loc, index) => (
          <div key={index} className="rounded-xl  overflow-hidden border-2 border-[var(--color-accent)]">
            <h3 className="text-[var(--color-primary)] font-semibold text-lg py-2 bg-[var(--color-accent)]">
              {loc.name}
            </h3>
            <OfficeMap lat={loc.lat} lng={loc.lng} name={loc.name} />
            <h3 className='text-white'>
              OpenStreetMap
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
