import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import styles from './CustomLink.module.scss';

type CustomLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children?: ReactNode;
  };

export default function CustomLink(props: CustomLinkProps) {
  const { className, children, ...rest } = props;
  return (
    <Link className={clsx(styles.link, className)} {...rest}>
      {children}
    </Link>
  );
}
