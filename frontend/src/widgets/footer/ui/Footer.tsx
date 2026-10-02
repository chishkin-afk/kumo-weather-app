import CustomLink from '@/shared/ui/CustomLink/CustomLink';
import Logo from '@/shared/ui/Logo/Logo';
import Separator from '@/shared/ui/Separator/Separator';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <>
      <Separator />
      <footer className={styles.footer}>
        <div className={styles.title}>
          <Logo />
          <p>Powered by accuweather</p>
        </div>
        <div className={styles.actions}>
          <CustomLink href="#">privacy policy</CustomLink>
          <CustomLink href="#">user aggretments</CustomLink>
        </div>
      </footer>
    </>
  );
}
