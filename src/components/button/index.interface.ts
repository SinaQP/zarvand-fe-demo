import { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react';

export interface Props
   extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
   > {
   children?: ReactElement | ReactElement[] | string;
   className?: string;
   haveLoading?: boolean;
}
