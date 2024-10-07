import { ReactNode, useState } from 'react';
import { LayoutContext } from './layout.context';

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
   const [headerBadge, setHeaderBadge] = useState<ReactNode>(null);
   const [headerClassName, setHeaderClassName] = useState<string>('');
   const [headerId, setHeaderId] = useState<string>('');
   const [badgeId, setBadgeId] = useState<string>('');
   const [badgeClassName, setBadgeClassName] = useState<string>('');
   const [className, setClassName] = useState<string>('');
   const [extraHeaderContent, setExtraHeaderContent] =
      useState<ReactNode>(null);
   const layoutContextValue = {
      headerBadge,
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
   };

   return (
      <LayoutContext.Provider value={layoutContextValue}>
         {children}
      </LayoutContext.Provider>
   );
};
