import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import styles from './Field.module.scss';

export default function Field(props: InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...rest } = props;
  return <input className={clsx(styles.field, className)} {...rest} />;
}
