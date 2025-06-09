'use client';
import ContactInfo from '@/components/contact/contact-info';
import ContactForm from '@/components/contact/contact-form';
import { useLanguage } from '@/context/language-context';
import { contactData } from '@/data/section/contact';
import Image from 'next/image';
import AnimatedBackground from '@/components/animations/AnimatedBackground';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = contactData[lang];

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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
          <motion.h2 
            className="text-[1.5rem] sm:text-[2rem] md:text-[3rem] font-bold text-white  my-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t.title}
          </motion.h2>

          <motion.div 
            className="flex flex-col md:flex-row w-full max-w-7xl gap-8 mx-auto"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  delayChildren: 0.4,
                  staggerChildren: 0.2
                }
              }
            }}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="flex-1"
              variants={{
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 }
              }}
            >
              <ContactInfo contactData={t}/>
            </motion.div>
            
            <motion.div 
              className="flex-1"
              variants={{
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 }
              }}
            >
              <ContactForm contactData={t}/>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
