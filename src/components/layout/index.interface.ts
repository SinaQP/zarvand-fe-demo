import { ReactNode } from 'react';

export interface Props {
   children: ReactNode;
   headerBadge?: ReactNode;
}

export interface LayoutContextProps {
   headerBadge: ReactNode;
}

