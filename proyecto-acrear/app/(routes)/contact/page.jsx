'use client';
import ContactInfo from '@/components/contact/contact-info';
import ContactForm from '@/components/contact/contact-form';
import { useLanguage } from '@/context/language-context';
import { contactData } from '@/data/section/contact';
import Image from 'next/image';
import AnimatedBackground from '@/components/animations/AnimatedBackground';

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = contactData[lang];

  return (
    <AnimatedBackground>
      <div className="min-h-screen relative flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" /> {/* Dark overlay */}
          <Image
            width={1920}
            height={1080}
            src="/fotos/fondo-contact2.jpg" 
            alt="Contact background" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content with relative positioning to appear above the background */}
        <div className="relative z-20 w-full">
          <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[3rem] font-bold text-white italic my-12 text-center">
            {t.title}
          </h2>

          <div className="flex flex-col md:flex-row w-full max-w-7xl gap-8 mx-auto">
            <ContactInfo className="flex-1" contactData={t}/>
            <ContactForm className="flex-1" contactData={t}/>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
