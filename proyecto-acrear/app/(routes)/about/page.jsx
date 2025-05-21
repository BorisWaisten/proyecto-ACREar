'use client';
import AlliancesSection from '@/components/about/alliances-section';
import CoverSection from '@/components/about/cover-section';
import MissionSection from '@/components/about/mission-section';
import StaffSection from '@/components/about/staff-section';
import StrategicPartnersSection from '@/components/about/strategic-partners-section';

export default function AboutPage() {
  return (
    <>
      <CoverSection />
      <MissionSection />
      <StaffSection />
      <AlliancesSection />
    </>
  );
}
