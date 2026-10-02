'use client';

import Metric from '@/shared/ui/Metric/Metric';
import Section from '@/shared/ui/Section/Section';
import Separator from '@/shared/ui/Separator/Separator';
import {
  IconHumidity,
  IconTemp,
  IconUvIndex,
  IconWind,
} from '@/shared/ui/icons';
import { useEffect, useRef } from 'react';
import styles from './StatisticsSection.module.scss';

export default function StatisticsSection() {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(
        entrie => {
          if (entrie.isIntersecting) {
            entrie.target.classList.add(styles.playAnim);
            observer.unobserve(entrie.target);
            console.log('sdf');
          }
        },
        {
          threshold: 0.4,
        },
      );
    });

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Separator />
      <Section className={styles.section} id="stats" title="STATISTICS">
        <div ref={statsRef} className={styles.stats}>
          <Metric title="humidity" Icon={IconHumidity} value="47" unit="%" />
          <Metric title="wind" Icon={IconWind} value="4" unit="mph" />
          <Metric title="uv" Icon={IconUvIndex} value="4" />
          <Metric
            className={styles.metricFull}
            title="avg temp"
            Icon={IconTemp}
            value="+14"
            unit="°C"
          />
        </div>
      </Section>
    </>
  );
}
