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
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto pb-6 md:py-10 px-4">
        <div className="grid grid-cols-1 md:flex md:flex-row items-start md:items-center">
          {/* Logo a la izquierda */}
          <div className="flex flex-col items-start pl-12 sm:pl-0 md:items-center animate-fade-in transition-all duration-500 mb-6 md:mb-0 md:w-1/4">
            <Image className='cursor-pointer scale-[1.7] sm:w-40 sm:h-30 sm:scale-[1.6]' src="/logos/logo-acrearg-blanco2.svg" alt="Logo ACREarg" width={120} height={60} quality={100} onClick={() => router.push('/')} />
          </div>

          {/* Contenido centrado */}
          <div className="grid grid-cols-1 md:flex md:flex-row items-center md:items-start gap-8 md:gap-16 md:justify-center md:flex-1">
            <div className="animate-fade-in flex flex-col items-start pl-4 sm:pl-0 mb-4 sm:mb-0 transition-all duration-500">
              <h4 className="font-bold mb-1 text-base text-center md:text-md transition-colors duration-300">{footer[lang].company.title}</h4>
              <ul className="text-md md:text-sm space-y-[.05rem]">
                {footer[lang].company.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-[var(--color-primary)] transition-all">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-in flex flex-col items-start pl-4 sm:pl-0 mb-4 sm:mb-0 transition-all duration-500">
              <h4 className="font-bold mb-1 text-base text-center md:text-md transition-colors duration-300">{footer[lang].contact.title}</h4>
              <ul className="text-md md:text-xs space-y-[.05rem]">
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

            <div className="flex flex-col pl-4 sm:pl-0 animate-fade-in transition-all duration-500">
              <h4 className="font-bold mb-1 text-start text-base md:text-lg transition-all duration-300">{footer[lang].social.title}</h4>
              <div className='flex flex-col items-start md:items-center justify-center'>
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 md:mt-4 pt-4 md:pt-2 border-t border-white/20">
          <p className="text-center text-xs md:text-sm text-white/80">
            {footer[lang].copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
