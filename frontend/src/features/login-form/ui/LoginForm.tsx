import Button from '@/shared/ui/Button/Button';
import Field from '@/shared/ui/Field/Field';
import clsx from 'clsx';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export default function LoginForm({ className }: LoginFormProps) {
  return (
    <form className={clsx(styles.form, className)}>
      <Field
        className={styles.field}
        placeholder="email..."
        type="email"
        name="email"
        required
      />
      <Field
        className={styles.field}
        placeholder="password..."
        name="password"
        type="password"
        required
      />
      <Button className={styles.button} type="submit">
        sign in
      </Button>
    </form>
  );
}
