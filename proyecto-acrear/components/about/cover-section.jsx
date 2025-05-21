'use client';
import Image from 'next/image';

export default function CoverSection() {
  return (
            <div className="relative md:h-[30vw] bg-cover bg-center" style={{ backgroundImage: 'url(/fotos/nosotros-1.jpg)' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                <h1 className=" md:text-[4rem] w-full text-center bg-[var(--color-background)] p-4 font-bold text-[var(--color-primary)]">NOSOTROS</h1>
                </div>
            </div>
  );
}
