import { PropsWithChildren } from 'react';

/* eslint-disable-next-line */
export interface UiProps {}

export function Button({ children }: PropsWithChildren<UiProps>) {
  return <button>{children}</button>;
}

export default Button;
