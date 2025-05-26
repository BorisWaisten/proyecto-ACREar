import AboutSection from '@/components/home/about-section';
import OurAllianceUS from '@/components/home/alliances-section';
import EventsSection from '@/components/home/events-section';
import MapSection from '@/components/home/maps-section';
import OfficesSection from '@/components/home/offices-section';
import ServicesSection from '@/components/home/services-section';
import VideoSection from '@/components/home/video-section';

export default function HomePage() {
  return (
    <>
      <AboutSection />
      <VideoSection />
      <MapSection />
      <ServicesSection />
      <EventsSection />
      <OfficesSection />
      <OurAllianceUS />
    </>
  );
}
