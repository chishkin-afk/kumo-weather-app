'use client';

import Button from '@/shared/ui/Button/Button';
import CustomLink from '@/shared/ui/CustomLink/CustomLink';
import { IconBurger } from '@/shared/ui/icons';
import IconClosed from '@/shared/ui/icons/IconClosed/IconClosed';
import Logo from '@/shared/ui/Logo/Logo';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Link } from '../model/types';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
  links: Link[];
  linkButton?: Link;
}

export default function Header(props: HeaderProps) {
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = isOpenMobile ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpenMobile]);

  return (
    <header className={clsx(styles.header, props.className)}>
      <Logo />
      <button
        className={styles.burger}
        onClick={() => setIsOpenMobile(prev => !prev)}
      >
        {isOpenMobile ? (
          <IconClosed className={styles.burger__icon} />
        ) : (
          <IconBurger className={styles.burger__icon} />
        )}
      </button>
      <div className={clsx(styles.actions, isOpenMobile ? styles.opened : '')}>
        <nav className={styles.nav}>
          {props.links.map(link => (
            <CustomLink
              onClick={() => setIsOpenMobile(false)}
              key={link.path}
              href={link.path}
              title={link.path}
            >
              {link.name}
            </CustomLink>
          ))}
        </nav>
        {props.linkButton && (
          <Button
            className={styles.button}
            title={props.linkButton.path}
            onClick={() => router.push(props.linkButton!.path)}
          >
            {props.linkButton.name}
          </Button>
        )}
      </div>
    </header>
  );
}
