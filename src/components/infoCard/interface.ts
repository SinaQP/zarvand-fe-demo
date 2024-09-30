import { ReactNode } from 'react';

export interface Props {
   title: ReactNode;
   children?: ReactNode;
   className?: string;
   containerClassName?: string;
   isPrimary?: boolean;
}