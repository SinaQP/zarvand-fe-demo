import { ReactNode } from 'react';

export interface Props {
   children: ReactNode;
   headerBadge?: ReactNode;
   extraHeaderContent?: ReactNode;
   headerClassName?: string;
   badgeClassName?: string;
   className?: string;
}

export interface LayoutContextProps {
   headerBadge?: ReactNode;
   badgeClassName?: string;
   extraHeaderContent?: ReactNode;
}
