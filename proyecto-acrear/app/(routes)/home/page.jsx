'use client'
import AboutSection from '@/components/home/about-section';
import OurAllianceUS from '@/components/home/alliances-section';
import CounterSection from '@/components/home/counter-section';
import EventsSection from '@/components/home/events-section';
import MapSection from '@/components/home/maps-section';
import OfficesSection from '@/components/home/offices-section';
import ServicesSection from '@/components/home/services-section';
import VideoSection from '@/components/home/video-section';
import {home} from '@/data/section/home';
import { useLanguage } from '@/context/language-context';
import { provincias } from '@/data/provincias';
import AnimatedBackground from '@/components/animations/AnimatedBackground';

export default function HomePage() {
  const { lang, toggleLang } = useLanguage();

  const textTooltip = lang === 'es' ? 'Seleccione provincia' : 'Select province';

  return (
    <>
      <AnimatedBackground>
        <EventsSection events={home[lang].events}/>
        <CounterSection counter={home[lang].counter} />
        <AboutSection about={home[lang].about}/>
        <VideoSection video={home[lang].video}/>
        <MapSection regional={home[lang].regional} provincias={provincias[lang]} textTooltip={textTooltip}/>
        <ServicesSection services={home[lang].services}/>
        <OfficesSection offices = {home[lang].offices}/>
        <OurAllianceUS alliances={home[lang].alliances}/>
      </AnimatedBackground>
    </>
  );
}
