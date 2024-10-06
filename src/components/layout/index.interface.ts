import { Dispatch, ReactNode, SetStateAction } from 'react';

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
   setBadgetClassName?: Dispatch<SetStateAction<string>>;
   extraHeaderContent?: ReactNode;
}
