import { ReactNode, useState } from 'react';
import { LayoutContext } from './layout.context';

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
   const [headerBadge, setHeaderBadge] = useState<ReactNode>(null);
   const [headerText, setHeaderText] = useState<string>('');
   const [headerClassName, setHeaderClassName] = useState<string>('');
   const [headerId, setHeaderId] = useState<string>('');
   const [badgeId, setBadgeId] = useState<string>('');
   const [badgeClassName, setBadgeClassName] = useState<string>('');
   const [className, setClassName] = useState<string>('');
   const [maskedPhoneNumber, setMaskedPhoneNumber] = useState<string>('');
   const [nationalCode, setNationalCode] = useState<string[]>([]);
   const [headerSubtitle, setHeaderSubtitle] = useState<string>('');
   const [extraHeaderContent, setExtraHeaderContent] =
      useState<ReactNode>(null);
   const layoutContextValue = {
      headerBadge,
      headerText,
      setHeaderText,
      setHeaderBadge,
      headerClassName,
      setHeaderClassName,
      badgeClassName,
      setBadgeClassName,
      extraHeaderContent,
      setExtraHeaderContent,
      className,
      setClassName,
      headerId,
      setHeaderId,
      badgeId,
      setBadgeId,
      nationalCode,
      setNationalCode,
      maskedPhoneNumber,
      setMaskedPhoneNumber,
      headerSubtitle,
      setHeaderSubtitle,
   };

   return (
      <LayoutContext.Provider value={layoutContextValue}>
         {children}
      </LayoutContext.Provider>
   );
};
