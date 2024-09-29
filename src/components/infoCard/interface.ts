import { ReactNode } from 'react';

export interface Props {
   title: string;
   children?: ReactNode;
   className?: string;
   isPrimary?: boolean;
}