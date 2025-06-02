'use client';
import CoverSection from '@/components/about/cover-section';
import MissionSection from '@/components/about/mission-section';
import StaffSection from '@/components/about/staff-section';
import { useLanguage } from '@/context/language-context';
import {aboutData} from '@/data/section/about';
import AnimatedBackground from '@/components/animations/AnimatedBackground';

export default function AboutPage() {
  const { lang } = useLanguage();

  return (
    <>
      <CoverSection title={aboutData[lang].title}/>
      <AnimatedBackground>
        <MissionSection about={aboutData[lang]}/>
      </AnimatedBackground>
      <StaffSection about={aboutData[lang]}/>
    </>
  );
}
