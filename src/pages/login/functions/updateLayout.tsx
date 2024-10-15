import { Dispatch, ReactNode, SetStateAction } from 'react';
import ConfirmationEntry from '../confirmationEntry';
import CounterBadge from '../counter';
import styles from '../index.module.scss';

interface UpdateLayoutProps {
   showConfirmationForm: boolean;
   setShowConfirmationForm: Dispatch<SetStateAction<boolean>>;
   setExtraHeaderContent?: (content: ReactNode) => void;
   setHeaderBadge?: (badge: ReactNode) => void;
   setBadgeId?: (className: string) => void;
   setHeaderId?: (className: string) => void;
   headerClassName: string;
}

export const updateLayout = ({
   showConfirmationForm,
   setExtraHeaderContent,
   setHeaderBadge,
   setBadgeId,
   setHeaderId,
   headerClassName,
   setShowConfirmationForm,
}: UpdateLayoutProps) => {
   setExtraHeaderContent &&
      setExtraHeaderContent(
         true ? <ConfirmationEntry /> : null,
      );
   setHeaderBadge &&
      setHeaderBadge(
         true ? (
            <CounterBadge
               initialCount={120}
               setShowConfirmationForm={setShowConfirmationForm}
            />
         ) : null,
      );
   setHeaderId && setHeaderId(headerClassName);
   setBadgeId && setBadgeId(styles['header-badge']);
};
