import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useLayoutContext } from '../layout.context';
import HeaderBadge from './headerBadge';
import useWindowWidth from '../../../hooks/useWindowWidth';
import blueSquareIcon from '../../../assets/images/blue-squares.svg';
import whiteSquareIcon from '../../../assets/images/white.squares.svg';
import CityAnimationCard from '../../../pages/login/cityAnimationCard';

const Header: FC<{ className?: string }> = ({ className }) => {
   const { headerBadge, extraHeaderContent } = useLayoutContext();
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
   const blueSquare = useWindowWidth(
      <img src={blueSquareIcon} className={styles['blue-square']} />,
      null,
   );
   const whiteSquare = useWindowWidth(
      <img src={whiteSquareIcon} className={styles['white-square']} />,
      null,
   );

   return (
      <header
         className={`${styles.header} ${
            isExpanded ? styles.expanded : ''
         } ${className}`}
      >
         <h1>{headerText}</h1>
         {blueSquare}
         {whiteSquare}
         <CityAnimationCard />
         <div className={styles.extraContent}>
            {extraHeaderContent && extraHeaderContent}
         </div>
         {!headerBadge ? <HeaderBadge /> : headerBadge}
      </header>
   );
};

export default Header;
