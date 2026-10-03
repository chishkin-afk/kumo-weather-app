import { EditForm } from '@/features/edit-form';
import { IconCloud } from '@/shared/ui/icons/weather';
import Section from '@/shared/ui/Section/Section';
import styles from './NoteSection.module.scss';

export default function NoteSection() {
  return (
    <Section className={styles.section}>
      <div className={styles.actions}>
        <div className={styles.note}>
          <h2 className={styles.note__title}>Title of note</h2>
          <p className={styles.note__description}>
            By <span className={styles.note__date}>25.06.2026</span>
          </p>
        </div>
        <EditForm
          className={styles.form}
          note={{
            title: 'title of the note',
          }}
        />
      </div>
      <div className={styles.info}>
        <IconCloud className={styles.icon} />
        <p className={styles.temperature}>
          +25 <span className={styles.unit}>°C</span>
        </p>
        <p className={styles.description}>cloudy</p>
      </div>
    </Section>
  );
}
