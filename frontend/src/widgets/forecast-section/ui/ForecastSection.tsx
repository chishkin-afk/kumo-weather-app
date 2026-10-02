import Section from '@/shared/ui/Section/Section';
import Weather from '@/shared/ui/Weather/Weather';
import { IconPartlySunny, IconRain } from '@/shared/ui/icons/weather';
import styles from './Forecast.module.scss';

export default function ForecastSection() {
  return (
    <Section id="forecast" className={styles.section} title="WEEKLY FORECAST">
      <div className={styles.forecast}>
        <Weather Icon={IconRain} temp="+14 °C" date={new Date()} />
        <Weather Icon={IconPartlySunny} temp="+14 °C" date={new Date()} />
        <Weather Icon={IconRain} temp="+14 °C" date={new Date()} />
        <Weather Icon={IconRain} temp="+14 °C" date={new Date()} />
        <Weather Icon={IconRain} temp="+14 °C" date={new Date()} />
        <Weather Icon={IconRain} temp="+14 °C" date={new Date()} />
        <Weather Icon={IconRain} temp="+14 °C" date={new Date()} />
      </div>
    </Section>
  );
}
