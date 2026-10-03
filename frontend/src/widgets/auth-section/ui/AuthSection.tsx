import { LoginForm } from '@/features/login-form';
import { RegisterForm } from '@/features/register-form';
import CustomLink from '@/shared/ui/CustomLink/CustomLink';
import Section from '@/shared/ui/Section/Section';
import styles from './AuthSection.module.scss';

interface AuthSectionProps {
  action: 'login' | 'register';
}

export default async function AuthSection({ action }: AuthSectionProps) {
  return (
    <Section className={styles.section}>
      <div className={styles.info}>
        <h2 className={styles.title}>{"Let's get started"}</h2>
        <p className={styles.description}>
          {
            "Once you log in, all the app's features will become available to you."
          }
        </p>
      </div>
      <div className={styles.action}>
        {action === 'login' ? <LoginForm /> : <RegisterForm />}
        <p>
          {action === 'login' ? "Don't have an " : 'Already have an '}
          <CustomLink
            href={`?action=${action === 'login' ? 'register' : 'login'}`}
          >
            account
          </CustomLink>
          ?
        </p>
      </div>
    </Section>
  );
}
