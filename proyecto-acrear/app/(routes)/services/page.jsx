'use client'
import PrivateSectorServices from '@/components/services/private-section-services';
import PublicSectorServices from '@/components/services/public-section-services';
import { useLanguage } from '@/context/language-context';
import { services } from '@/data/section/services';

export default function ServiciosPage() {
  const { lang } = useLanguage();
  return (
    <>
      {/* Portada igual a Nosotros */}
      <div className="relative h-[80vw] sm:h-[50vw] md:h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/fotos/evento-2.jpg)' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className=" text-[1.5rem] sm:text-[2rem] md:text-[3rem] w-full text-center bg-[var(--color-background)] p-4 font-bold text-[var(--color-primary)]">{services[lang].title}</h1>
        </div>
      </div>

      <PublicSectorServices publicServices={services[lang].publicServices} title={services[lang].publicTitle} />
      <PrivateSectorServices privateServices={services[lang].privateServices} title={services[lang].privateTitle} />
    </>
  );
}
