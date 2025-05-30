'use client';
import CoverSection from '@/components/about/cover-section';
import MissionSection from '@/components/about/mission-section';
import StaffSection from '@/components/about/staff-section';
import { useLanguage } from '@/context/language-context';
import {aboutData} from '@/data/section/about';
export default function AboutPage() {
  const { lang } = useLanguage();

  return (
    <>
      <CoverSection title={aboutData[lang].title}/>
      <MissionSection about={aboutData[lang]}/>
      <StaffSection about={aboutData[lang]}/>
    </>
  );
}
