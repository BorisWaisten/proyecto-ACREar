'use client';
import Image from 'next/image';

const supporters = [
  '/logos/support1.png',
  '/logos/support2.png',
  '/logos/support3.png',
  '/logos/support4.png',
  '/logos/support5.png',
];

export default function SupportingEntitiesSection() {
  return (
    <section className="bg-[var(--color-background)] py-12 overflow-hidden">
      <h2 className="text-2xl font-bold text-[var(--color-primary)] text-center mb-10">
        ENTIDADES QUE NOS APOYAN
      </h2>
      <div className="animate-marquee-reverse whitespace-nowrap flex gap-10 px-6">
        {supporters.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`Entidad ${idx}`}
            width={100}
            height={100}
            className="inline-block object-contain"
          />
        ))}
      </div>
    </section>
  );
}
