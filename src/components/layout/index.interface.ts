import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface LayoutContextProps {
   headerText?: string;
   setHeaderText?: Dispatch<SetStateAction<string>>;
   headerBadge?: ReactNode;
   setHeaderBadge?: Dispatch<SetStateAction<ReactNode>>;
   headerClassName?: string;
   setHeaderClassName?: Dispatch<SetStateAction<string>>;
   badgeClassName?: string;
   setBadgeClassName?: Dispatch<SetStateAction<string>>;
   extraHeaderContent?: ReactNode;
   setExtraHeaderContent?: Dispatch<SetStateAction<ReactNode>>;
   className?: string;
   setClassName?: Dispatch<SetStateAction<string>>;
   headerId?: string;
   setHeaderId?: Dispatch<SetStateAction<string>>;
   badgeId?: string;
   setBadgeId?: Dispatch<SetStateAction<string>>;
   maskedPhoneNumber: string;
   setMaskedPhoneNumber: Dispatch<SetStateAction<string>>;
   nationalCode: string[];
   setNationalCode: Dispatch<SetStateAction<string[]>>;
}
