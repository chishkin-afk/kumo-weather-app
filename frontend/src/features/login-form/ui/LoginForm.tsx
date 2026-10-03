import Button from '@/shared/ui/Button/Button';
import Field from '@/shared/ui/Field/Field';
import styles from './LoginForm.module.scss';

export default function LoginForm() {
  return (
    <form className={styles.form}>
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
