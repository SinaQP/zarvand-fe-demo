import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useLayoutContext } from '../layout.context';
import HeaderBadge from './headerBadge';
import useWindowWidth from '../../../hooks/useWindowWidth';

const Header = () => {
   const { headerBadge, extraHeaderContent, headerClassName } = useLayoutContext();
   const [isExpanded, setIsExpanded] = useState(false);
   const headerText = useWindowWidth(
      'پرداخت آسان عوارض شهری بدون نیاز به مراجعه حضوری',
      'سامانه پرداخت عوارض شهرداری زرند',
   );
   useEffect(() => {
      if (extraHeaderContent) {
         setIsExpanded(true);
      } else {
         setIsExpanded(false);
      }
   }, [extraHeaderContent]);


   return (
      <header
         className={`${styles.header} ${
            isExpanded ? styles.expanded : ''
         } ${headerClassName}`}
      >
         <h1>{headerText}</h1>
         <div className={styles.extraContent}>
            {extraHeaderContent && extraHeaderContent}
         </div>
         {!headerBadge ? <HeaderBadge /> : headerBadge}
      </header>
   );
};

export default Header;
