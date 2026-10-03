import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './Section.module.scss';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  title?: string;
}

export default function Section(props: SectionProps) {
  const { id, className, children, title } = props;

  return (
    <section id={id} className={clsx(styles.section, className)}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
}
