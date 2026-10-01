'use client';

import { IconCloud } from '@/shared/ui/icons/weather';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const scrolled = Math.max(0, window.scrollY);

      const maxBlur = 25;
      const maxScroll = 300;
      const progress = Math.min(scrolled / maxScroll, 1);
      const blur = progress * maxBlur;

      sectionRef.current.style.filter = `blur(${blur}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.info}>
        <div>
          <IconCloud className={styles.weather__icon} />
          <h2 className={styles.title}>Nizhny Novgorod</h2>
          <p className={styles.description}>
            Today,{' '}
            <span className={styles.description__accent}>25 september</span>
          </p>
        </div>
        <div className={styles.weather}>
          <h3 className={styles.weather__temperature}>
            +25 <span className={styles.weather__unit}>°C</span>
          </h3>
          <p className={styles.description}>cloudy</p>
        </div>
      </div>
      <Image
        className={styles.image}
        src="/hero-image.png"
        alt="hero image"
        width={576}
        height={384}
        loading="eager"
      />
    </section>
  );
}
