'use client';
import Image from 'next/image';

export default function SustainabilitySection() {
  return (
    <section className="bg-[var(--color-secondary)] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 rounded-xl p-6 shadow-md bg-[var(--color-secondary)] animate-fade-in">
        <h4 className="text-center text-lg font-semibold">
          COMPROMETIDOS CON EL DESARROLLO SOSTENIBLE EN ARGENTINA.
        </h4>
        <p className="text-sm text-[var(--color-accent)] text-center">
          Contribuyendo con:
        </p>
        <Image
          src="/logos/logo-sdg.svg"
          alt="Sustainable Development Goals"
          width={220}
          height={220}
          className="rounded-full bg-white p-2"
        />
      </div>
    </section>
  );
}
