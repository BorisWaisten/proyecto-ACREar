'use client';
import CoverSection from '@/components/about/cover-section';
import MissionSection from '@/components/about/mission-section';
import StaffSection from '@/components/about/staff-section';
import StrategicPartnersSection from '@/components/about/strategic-partners-section';
import SustainabilitySection from '@/components/about/sustainability-section';

export default function AboutPage() {
  return (
    <>
      <CoverSection />
      <MissionSection />
      <SustainabilitySection />
      <StaffSection />
      <StrategicPartnersSection />
    </>
  );
}
