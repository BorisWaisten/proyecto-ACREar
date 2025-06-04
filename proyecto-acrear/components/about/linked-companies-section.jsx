'use client';
import Image from 'next/image';

const companies = [
  '/logos/company1.png',
  '/logos/company2.png',
  '/logos/company3.png',
  '/logos/company4.png',
  '/logos/company5.png',
];

export default function LinkedCompaniesSection() {
  return (
    <section className="bg-white py-12 overflow-hidden">
      <h2 className="text-2xl font-bold text-[var(--color-primary)] text-center mb-10">
        EMPRESAS VINCULADAS
      </h2>
      <div className="animate-marquee whitespace-nowrap flex gap-10 px-6">
        {companies.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`Logo ${idx}`}
            width={100}
            height={100}
            className="inline-block object-contain"
          />
        ))}
      </div>
    </section>
  );
}
