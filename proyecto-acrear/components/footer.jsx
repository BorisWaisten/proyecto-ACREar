'use client';
import Link from 'next/link';
import Image from 'next/image';
import SocialIcons from './social-icons';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-background)] text-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo */}
        <div className="flex flex-col items-start animate-fade-in hover:scale-105 transition-all duration-500">
          <Image src="/logos/logo-acrear.svg" alt="Logo ACREar" width={140} height={70} />
        </div>

        {/* Compañía */}
        <div className="animate-fade-in transition-all duration-500 hover:translate-y-[-2px]">
          <h4 className="font-bold mb-3 hover:text-[var(--color-accent)] transition-colors duration-300">Compañía</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/nosotros" className="hover:text-[var(--color-accent)] transition-all">Nosotros</Link></li>
            <li><Link href="/servicios" className="hover:text-[var(--color-accent)] transition-all">Servicios</Link></li>
            <li><Link href="/trading" className="hover:text-[var(--color-accent)] transition-all">Trading</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="animate-fade-in transition-all duration-500 hover:translate-y-[-2px]">
          <h4 className="font-bold mb-3 hover:text-[var(--color-accent)] transition-colors duration-300">Contacto</h4>
          <ul className="text-sm space-y-1">
            <li className="hover:text-[var(--color-accent)] transition-all">Email: contacto@acrear.org</li>
            <li className="hover:text-[var(--color-accent)] transition-all">Teléfono: +54 11 1234 5678</li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className="flex flex-col items-center animate-fade-in transition-all duration-500 hover:scale-[1.02]">
          <h4 className="font-bold mb-3 hover:text-[var(--color-accent)] transition-all duration-300">Redes Sociales</h4>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
