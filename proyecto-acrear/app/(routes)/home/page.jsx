'use client'
import AboutSection from '@/components/home/about-section';
import OurAllianceUS from '@/components/home/alliances-section';
import EventsSection from '@/components/home/events-section';
import MapSection from '@/components/home/maps-section';
import OfficesSection from '@/components/home/offices-section';
import ServicesSection from '@/components/home/services-section';
import VideoSection from '@/components/home/video-section';
import {home} from '@/data/section/home';
import { useLanguage } from '@/context/language-context';
import { provincias } from '@/data/provincias';

export default function HomePage() {
  const { lang, toggleLang } = useLanguage();
  return (
    <>
      <EventsSection events={home[lang].events}/>
      <AboutSection about={home[lang].about} />
      <VideoSection video={home[lang].video}/>
      <MapSection regional={home[lang].regional} provincias={provincias[lang]}/>
      <ServicesSection services={home[lang].services}/>
      <OfficesSection offices = {home[lang].offices}/>
      <OurAllianceUS alliances={home[lang].alliances}/>
    </>
  );
}
