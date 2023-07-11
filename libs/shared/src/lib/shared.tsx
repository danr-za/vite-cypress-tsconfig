import styles from './shared.module.css';
import { PropsWithChildren } from 'react';

/* eslint-disable-next-line */
export interface SharedProps {}

export function Shared(props: PropsWithChildren<SharedProps>) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Shared!</h1>
      {props.children}
    </div>
  );
}

export default Shared;
