import { Dispatch, ReactNode, SetStateAction } from 'react';
import ConfirmationEntry from '../confirmationEntry';
import CounterBadge from '../counter';
import styles from '../index.module.scss';
import { EntryType } from '../index.interface';

interface UpdateLayoutProps {
   showConfirmationForm: boolean;
   setShowConfirmationForm: Dispatch<SetStateAction<boolean>>;
   setExtraHeaderContent?: (content: ReactNode) => void;
   setHeaderBadge?: (badge: ReactNode) => void;
   setBadgeId?: (className: string) => void;
   setHeaderId?: (className: string) => void;
   headerClassName: string;
   setSelectedEntry: Dispatch<SetStateAction<EntryType>>;
}

export const updateLayout = ({
   showConfirmationForm,
   setExtraHeaderContent,
   setHeaderBadge,
   setBadgeId,
   setHeaderId,
   headerClassName,
   setShowConfirmationForm,
   setSelectedEntry,
}: UpdateLayoutProps) => {
   setExtraHeaderContent &&
      setExtraHeaderContent(
         showConfirmationForm ? (
            <ConfirmationEntry
               setShowConfirmationForm={setShowConfirmationForm}
               setSelectedEntry={setSelectedEntry}
            />
         ) : null,
      );
   setHeaderBadge &&
      setHeaderBadge(
         showConfirmationForm ? (
            <CounterBadge
               initialCount={120}
               setShowConfirmationForm={setShowConfirmationForm}
            />
         ) : null,
      );
   setHeaderId && setHeaderId(headerClassName);
   setBadgeId && setBadgeId(styles['header-badge']);
};
