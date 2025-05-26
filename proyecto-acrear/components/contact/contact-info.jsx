'use client';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/data/section/contact';

export default function ContactInfo() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.es;

  return (
    <div className="bg-[var(--color-terciary)] rounded-lg shadow-lg p-8 flex-1 flex flex-col gap-6">
      <h3 className="text-xl font-bold text-[var(--color-secondary)]">{t.contactInfo}</h3>
      <div className="flex items-center gap-4">
        <Image src="/logos/logoEmail.png" width={32} height={32} alt="Email" />
        <a href="mailto:contacto@acrearg.org" className="text-[var(--color-primary)] hover:text-[var(--color-accent)] transition">
          contacto@acrearg.org
        </a>
      </div>
      <div className="flex items-center gap-4">
        <Image src="/logos/logoPhone.png" width={32} height={32} alt="Teléfono" />
        <a href="tel:+541112345678" className="text-[var(--color-primary)] hover:text-[var(--color-accent)] transition">
          +54 11 1234 5678
        </a>
      </div>
      {/* <div className="flex items-center gap-4">
        <Image src="/icons/location.svg" width={32} height={32} alt="Ubicación" />
        <p className="text-[var(--color-primary)]">
          Av. Siempre Viva 123, Ciudad Autónoma de Buenos Aires
        </p>
      </div> */}
    </div>
  );
}
