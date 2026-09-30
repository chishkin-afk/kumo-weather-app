import Button from '@/shared/ui/Button/Button';
import CustomLink from '@/shared/ui/CustomLink/CustomLink';
import Logo from '@/shared/ui/Logo/Logo';
import clsx from 'clsx';
import { Link } from '../model/types';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
  links: Link[];
}

export default function Header(props: HeaderProps) {
  return (
    <header className={clsx(styles.header, props.className)}>
      <Logo />
      <div className={styles.actions}>
        <nav className={styles.nav}>
          {props.links.map(link => (
            <CustomLink key={link.path} href={link.path} title={link.path}>
              {link.name}
            </CustomLink>
          ))}
        </nav>
        {/* TODO: пробросить кнопку через пропсы */}
        <Button>list</Button>
      </div>
    </header>
  );
}
