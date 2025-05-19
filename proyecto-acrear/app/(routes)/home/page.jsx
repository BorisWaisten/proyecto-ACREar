import AboutSection from '@/components/home/about-section';
import EventsSection from '@/components/home/events-section';
import OfficesSection from '@/components/home/offices-section';
import ServicesSection from '@/components/home/services-section';
import VideoSection from '@/components/home/video-section';

export default function HomePage() {
  return (
    <>
      <AboutSection />
      <VideoSection />
      <ServicesSection />
      <EventsSection />
      <OfficesSection />
    </>
  );
}
