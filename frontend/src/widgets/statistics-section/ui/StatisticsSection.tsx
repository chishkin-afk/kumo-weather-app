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
import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import styles from './StatisticsSection.module.scss';

export default function StatisticsSection() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stats = statsRef.current;
    if (!stats) return;

    const items = stats.querySelectorAll(`.${styles.item}`);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.playAnim);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );

    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Separator />
      <Section className={styles.section} id="stats" title="STATISTICS">
        <div ref={statsRef} className={styles.stats}>
          <Metric
            className={styles.item}
            title="humidity"
            Icon={IconHumidity}
            value="47"
            unit="%"
          />
          <Metric
            className={styles.item}
            title="wind"
            Icon={IconWind}
            value="4"
            unit="mph"
          />
          <Metric
            className={styles.item}
            title="uv"
            Icon={IconUvIndex}
            value="4"
          />
          <Metric
            className={clsx(styles.item, styles.metricFull)}
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
