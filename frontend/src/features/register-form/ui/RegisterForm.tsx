import Button from '@/shared/ui/Button/Button';
import Field from '@/shared/ui/Field/Field';
import styles from './RegisterForm.module.scss';

export default function RegisterForm() {
  return (
    <form className={styles.form}>
      <Field
        className={styles.field}
        placeholder="username..."
        name="username"
        required
      />
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
      <Field
        className={styles.field}
        placeholder="confirm password..."
        name="confirmPassword"
        type="password"
        required
      />
      <Button className={styles.button} type="submit">
        sign up
      </Button>
    </form>
  );
}
