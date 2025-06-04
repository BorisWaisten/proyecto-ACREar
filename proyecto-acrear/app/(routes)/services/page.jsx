'use client'
import PrivateSectorServices from '@/components/services/private-section-services';
import PublicSectorServices from '@/components/services/public-section-services';
import { useLanguage } from '@/context/language-context';
import { services } from '@/data/section/services';
import AnimatedBackground from '@/components/animations/AnimatedBackground';
import { motion } from 'framer-motion';

export default function ServiciosPage() {
  const { lang } = useLanguage();

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
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
    >
      <motion.div 
        className="relative h-[50vh] md:h-screen bg-cover bg-center" 
        style={{ backgroundImage: 'url(/fotos/evento-2.jpg)'}}
        variants={contentVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent flex items-center justify-center">
          <motion.h1 
            className="text-[1.5rem] sm:text-[2rem] md:text-[3rem] w-full text-center p-4 font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {services[lang].title}
          </motion.h1>
        </div>
      </motion.div>

      <AnimatedBackground>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <PublicSectorServices publicServices={services[lang].publicServices} title={services[lang].publicTitle} />
          <PrivateSectorServices privateServices={services[lang].privateServices} title={services[lang].privateTitle} />
        </motion.div>
      </AnimatedBackground>
    </motion.div>
  );
}
