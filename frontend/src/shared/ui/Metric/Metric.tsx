import clsx from 'clsx';
import { ComponentType, SVGProps } from 'react';
import styles from './Metric.module.scss';

interface MetricProps {
  className?: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  value: string;
  unit?: string;
}

export default function Metric(props: MetricProps) {
  const { className, Icon, title, value, unit } = props;

  return (
    <div className={clsx(styles.metric, className)}>
      <div className={styles.title}>
        <Icon className={styles.icon} />
        <h3>{title}</h3>
      </div>
      <p className={styles.value}>
        {value} <span className={styles.unit}>{unit}</span>
      </p>
    </div>
  );
}
