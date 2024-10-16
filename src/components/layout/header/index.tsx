import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useLayoutContext } from '../layout.context';
import HeaderBadge from './headerBadge';
import useWindowWidth from '../../../hooks/useWindowWidth';

const Header = () => {
   const { headerBadge, extraHeaderContent, headerClassName, headerId } =
      useLayoutContext();
   const [isExpanded, setIsExpanded] = useState(false);
   useEffect(() => {
      setIsExpanded(!!extraHeaderContent);
   }, [extraHeaderContent]);

   return (
      <header
         className={` ${isExpanded ? styles.expanded : ''}  ${
            headerClassName
               ? ` ${headerClassName}! ${styles.header}`
               : `${styles.header}`
         }`}
         id={headerId}
      >
         <h1>سامانه هوشمند شهروندی</h1>
         <div className={styles.extraContent}>
            {extraHeaderContent && extraHeaderContent}
         </div>
         {!headerBadge ? <HeaderBadge /> : headerBadge}
      </header>
   );
};

export default Header;
