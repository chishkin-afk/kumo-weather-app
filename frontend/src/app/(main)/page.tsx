import Section from '@/shared/ui/Section/Section';
import { HeroSection } from '@/widgets/hero-section';
import StatisticsSection from '@/widgets/statistics-section/ui/StatisticsSection';

export default function HomePage() {
  return (
    <>
      <Section id="weather" title="">
        <HeroSection />
      </Section>
      <StatisticsSection />
    </>
  );
}
