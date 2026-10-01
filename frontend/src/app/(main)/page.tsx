import Section from '@/shared/ui/Section/Section';
import Separator from '@/shared/ui/Separator/Separator';
import { HeroSection } from '@/widgets/hero-section';
import styles from './temp.module.scss';

export default function HomePage() {
  return (
    <>
      <Section id="weather" title="">
        <HeroSection />
      </Section>
      <Separator />
      <Section id="stats" className={styles.sss} title="TITLE">
        {' '}
      </Section>
    </>
  );
}
