import clsx from 'clsx';
import { ComponentType, SVGProps } from 'react';
import styles from './Weather.module.scss';

interface WeatherProps {
  className?: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  temp: string;
  date: Date;
}

export default function Weather({ className, Icon, temp, date }: WeatherProps) {
  const [currentDay, currentMonth] = [date.getDay(), date.getMonth()];
  return (
    <div className={clsx(styles.weather, className)}>
      <Icon />
      <h3>{temp}</h3>
      <p>
        {currentDay < 10 ? `0${currentDay}` : currentDay}.
        {currentMonth < 10 ? `0${currentMonth}` : currentMonth}
      </p>
    </div>
  );
}
