'use client';

import Section from '@/shared/ui/Section/Section';
import Weather from '@/shared/ui/Weather/Weather';
import { IconPartlySunny, IconRain } from '@/shared/ui/icons/weather';
import { useEffect, useRef } from 'react';
import styles from './Forecast.module.scss';

export default function ForecastSection() {
  const forecastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const forecast = forecastRef.current;
    if (!forecast) return;

    const items = forecast.querySelectorAll(`.${styles.item}`);

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
    <Section id="forecast" className={styles.section} title="WEEKLY FORECAST">
      <div ref={forecastRef} className={styles.forecast}>
        <Weather
          className={styles.item}
          Icon={IconRain}
          temp="+14 °C"
          date={new Date()}
        />
        <Weather
          className={styles.item}
          Icon={IconPartlySunny}
          temp="+14 °C"
          date={new Date()}
        />
        <Weather
          className={styles.item}
          Icon={IconRain}
          temp="+14 °C"
          date={new Date()}
        />
        <Weather
          className={styles.item}
          Icon={IconRain}
          temp="+14 °C"
          date={new Date()}
        />
        <Weather
          className={styles.item}
          Icon={IconRain}
          temp="+14 °C"
          date={new Date()}
        />
        <Weather
          className={styles.item}
          Icon={IconRain}
          temp="+14 °C"
          date={new Date()}
        />
        <Weather
          className={styles.item}
          Icon={IconRain}
          temp="+14 °C"
          date={new Date()}
        />
      </div>
    </Section>
  );
}
