'use client';
import CoverSection from '@/components/about/cover-section';
import MissionSection from '@/components/about/mission-section';
import StaffSection from '@/components/about/staff-section';
import { useLanguage } from '@/context/language-context';
import {aboutData} from '@/data/section/about';
import AnimatedBackground from '@/components/animations/AnimatedBackground';
import { motion } from 'framer-motion';

export default function AboutPage() {
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
      <motion.div variants={contentVariants}>
        <CoverSection title={aboutData[lang].title}/>
      </motion.div>
      
      <AnimatedBackground>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <MissionSection about={aboutData[lang]}/>
        </motion.div>
      </AnimatedBackground>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <StaffSection about={aboutData[lang]}/>
      </motion.div>
    </motion.div>
  );
}
