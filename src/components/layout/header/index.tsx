import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useLayoutContext } from '../layout.context';
import HeaderBadge from './headerBadge';

const Header: FC = () => {
   const { headerBadge, extraHeaderContent } = useLayoutContext();
   const [isExpanded, setIsExpanded] = useState(false);

   useEffect(() => {
      if (extraHeaderContent) {
         setIsExpanded(true);
      } else {
         setIsExpanded(false);
      }
   }, [extraHeaderContent]);

   return <header className={`${styles.header} ${isExpanded ? styles.expanded : ''}`}>
      <h1>سامانه پرداخت عوارض شهرداری زرند</h1>
      <div className={styles.extraContent}>{extraHeaderContent && extraHeaderContent}</div>
      {!headerBadge ? <HeaderBadge /> : headerBadge}
   </header>;
};

export default Header;