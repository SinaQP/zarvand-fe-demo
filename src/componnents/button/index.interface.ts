import { ButtonHTMLAttributes, ReactElement } from 'react';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactElement | ReactElement[] | string;
  className?: string;
}

