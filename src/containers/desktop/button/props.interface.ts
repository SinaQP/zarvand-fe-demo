import { ButtonHTMLAttributes, ReactElement } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
      children?: ReactElement | ReactElement[] | string;
      className?: string;
}

export default Props;
