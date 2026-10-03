import { Note } from '@/entities/note/model/types';
import Button from '@/shared/ui/Button/Button';
import Field from '@/shared/ui/Field/Field';
import clsx from 'clsx';
import styles from './EditForm.module.scss';

interface EditFormProps {
  className?: string;
  note: Pick<Note, 'title'>;
}

export default function EditForm({ className, note }: EditFormProps) {
  return (
    <form className={clsx(styles.form, className)}>
      <Field
        className={styles.field}
        placeholder="title of note..."
        defaultValue={note.title}
        name="title"
      />
      <Button className={styles.button} type="submit">
        save
      </Button>
    </form>
  );
}
