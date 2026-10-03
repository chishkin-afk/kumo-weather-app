import Section from '@/shared/ui/Section/Section';
import { ForecastSection } from '@/widgets/forecast-section';
import { HeroSection } from '@/widgets/hero-section';
import { StatisticsSection } from '@/widgets/statistics-section';

export default function HomePage() {
  return (
    <>
      <Section id="weather">
        <HeroSection />
      </Section>
      <StatisticsSection />
      <ForecastSection />
    </>
  );
}
