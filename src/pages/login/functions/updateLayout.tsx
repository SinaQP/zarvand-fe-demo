import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import ConfirmationEntry from '../confirmationEntry';
import CounterBadge from '../counter';
import styles from '../index.module.scss';

interface UpdateLayoutProps {
   showConfirmationForm: boolean;
   setShowConfirmationForm: Dispatch<SetStateAction<boolean>>;
   setExtraHeaderContent?: (content: React.ReactNode) => void;
   setHeaderBadge?: (badge: React.ReactNode) => void;
   setHeaderClassName?: (className: string) => void;
   setBadgeClassName?: (className: string) => void;
   headerClassName: string;
}

export const updateLayout = ({
   showConfirmationForm,
   setExtraHeaderContent,
   setHeaderBadge,
   setHeaderClassName,
   setBadgeClassName,
   headerClassName,
   setShowConfirmationForm,
}: UpdateLayoutProps) => {
   setExtraHeaderContent &&
      setExtraHeaderContent(
         showConfirmationForm ? <ConfirmationEntry /> : null,
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
   setHeaderClassName && setHeaderClassName(headerClassName);
   setBadgeClassName && setBadgeClassName(styles['header-badge']);
};
