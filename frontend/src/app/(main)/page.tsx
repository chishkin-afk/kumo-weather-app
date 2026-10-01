import Section from '@/shared/ui/Section/Section';
import { HeroSection } from '@/widgets/hero-section';
import styles from './temp.module.scss';

export default function HomePage() {
  return (
    <>
      <Section title="">
        <HeroSection />
      </Section>
      <Section className={styles.sss} title="TITLE">
        {' '}
      </Section>
    </>
  );
}
