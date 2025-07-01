'use client';
import Link from 'next/link';
import Image from 'next/image';
import SocialIcons from './social-icons';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/language-context';
import { footer } from '@/data/footer';

export default function Footer() {
  const router = useRouter();
  const { lang } = useLanguage();

  return (
    <footer className="relative text-white bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-primary)]">
      {/* Elemento decorativo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Logo */}
          <div className="flex flex-col items-start pl-8 sm:pl-0 md:items-center  animate-fade-in transition-all duration-500">
            <Image className='cursor-pointer scale-[1.7] sm:w-40 sm:h-30 sm:scale-[1.6]' src="/logos/logo-acrearg-blanco2.svg" alt="Logo ACREarg" width={120} height={60} onClick={() => router.push('/')} />
          </div>

          {/* Compañía */}
          <div className="animate-fade-in transition-all duration-500">
            <h4 className="font-bold mb-3 text-base md:text-lg transition-colors duration-300">{footer[lang].company.title}</h4>
            <ul className="space-y-2 text-md md:text-base">
              {footer[lang].company.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-[var(--color-primary)] transition-all">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="animate-fade-in transition-all duration-500">
            <h4 className="font-bold mb-3 text-base md:text-lg transition-colors duration-300">{footer[lang].contact.title}</h4>
            <ul className="text-md md:text-base space-y-2">
              <li className="hover:text-[var(--color-primary)] transition-all flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {footer[lang].contact.email}
              </li>
              <li className="hover:text-[var(--color-primary)] transition-all flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {footer[lang].contact.phone}
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="flex flex-col  animate-fade-in transition-all duration-500">
              <h4 className="font-bold mb-3 text-start  text-base md:text-lg  transition-all duration-300">{footer[lang].social.title}</h4>
            <div className='flex flex-col items-start md:items-center justify-center'>
              <SocialIcons />
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="mt-6 md:mt-4 pt-4 md:pt-2 border-t border-white/20">
          <p className="text-center text-xs md:text-sm text-white/80">
            {footer[lang].copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
