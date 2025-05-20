'use client';
import Image from 'next/image';

export default function CoverSection() {
  return (
    <div className="relative w-full h-[250px] md:h-[70vh]">
      <Image
        src="/fotos/nosotros-1.jpg" // imagen adjuntada
        alt="Portada Nosotros"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0  flex items-center justify-center">
        <h1 className="text-3xl text-center md:text-4xl bg-[var(--color-background)] w-full p-4 text-[var(--color-primary)] font-bold ">NOSOTROS</h1>
      </div>
    </div>
  );
}
