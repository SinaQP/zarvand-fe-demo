import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface LayoutContextProps {
   headerBadge?: ReactNode;
   setHeaderBadge?: Dispatch<SetStateAction<ReactNode>>;
   headerClassName?: string;
   setHeaderClassName?: Dispatch<SetStateAction<string>>;
   badgeClassName?: string;
   setBadgeClassName?: Dispatch<SetStateAction<string>>;
   extraHeaderContent?: ReactNode;
   setExtraHeaderContent?: Dispatch<SetStateAction<ReactNode>>;
   className?: string;
}
