import { FC, useEffect, useState } from 'react';
import Layout from '../../components/layout';
import NationalCodeEntry from './nationalCodeEntry';

import { LoginContext } from './context';
import styles from './index.module.scss';
import useWindowWidth from '../../hooks/useWindowWidth';
import blueSquareIcon from '../../assets/images/blue-squares.svg';
import whiteSquareIcon from '../../assets/images/white.squares.svg';
import CityAnimationCard from './cityAnimationCard';
import { useLayoutContext } from '../../components/layout/layout.context';
import { updateLayout } from './functions/updateLayout';

const Login: FC = () => {
   const {
      setExtraHeaderContent,
      setHeaderBadge,
      setHeaderClassName,
      setBadgeClassName,
   } = useLayoutContext();
   const [showConfirmationForm, setShowConfirmationForm] = useState(false);
   const [nationalCode, setNationalCode] = useState<string[]>([]);
   const [phoneNumber, setPhoneNumber] = useState<string>('');
   const headerClassName = useWindowWidth(styles.header, '');
   const mainTitle = useWindowWidth(
      <h1
         className={`${styles.title} ${
            showConfirmationForm ? styles.expanded : ''
         }`}
      >
         سامانه پرداخت عوارض شهرداری زرند
      </h1>,
      null,
   );
   const blueSquare = useWindowWidth(
      <img src={blueSquareIcon} className={styles['blue-square']} />,
      null,
   );
   const whiteSquare = useWindowWidth(
      <img src={whiteSquareIcon} className={styles['white-square']} />,
      null,
   );

   useEffect(() => {
      updateLayout({
         showConfirmationForm,
         setExtraHeaderContent,
         setHeaderBadge,
         setShowConfirmationForm,
         setHeaderClassName,
         setBadgeClassName,
         headerClassName,
      });
   }, [showConfirmationForm]);

   return (
      <LoginContext.Provider
         value={{
            setNationalCode,
            setPhoneNumber,
            nationalCode,
            phoneNumber,
         }}
      >
         {blueSquare}
         {whiteSquare}
         <CityAnimationCard />
         {mainTitle}
         <NationalCodeEntry
            setShowConfirmationForm={setShowConfirmationForm}
            showConfirmationForm={showConfirmationForm}
         />
      </LoginContext.Provider>
   );
};

export default Login;
