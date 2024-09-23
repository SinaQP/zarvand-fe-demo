import { ReactNode } from 'react';

export interface Props {
   children: ReactNode;
   headerBadge?: ReactNode;
   extraHeaderContent?: ReactNode;
}

export interface LayoutContextProps {
   headerBadge?: ReactNode;
   extraHeaderContent?: ReactNode;
}
