import { FC, useState } from 'react';
import Layout from '../../components/layout';
import NationalCodeEntry from './nationalCodeEntry';
import ConfirmationEntry from './confirmationEntry';
import CounterBadge from './counter';
import { LoginContext } from './context';
import styles from './index.module.scss';
import useWindowWidth from '../../hooks/useWindowWidth';
import blueSquareIcon from '../../assets/images/blue-squares.svg';
import whiteSquareIcon from '../../assets/images/white.squares.svg';
import CityAnimationCard from './cityAnimationCard';

const Login: FC = () => {
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
   return (
      <LoginContext.Provider
         value={{
            setNationalCode,
            setPhoneNumber,
            nationalCode,
            phoneNumber,
         }}
      >
         {/* <Layout
            extraHeaderContent={showConfirmationForm && <ConfirmationEntry />}
            headerBadge={
               showConfirmationForm && (
                  <CounterBadge
                     initialCount={120}
                     setShowConfirmationForm={setShowConfirmationForm}
                  />
               )
            }
            headerClassName={headerClassName}
            badgeClassName={styles['header-badge']}
         > */}

         {blueSquare}
         {whiteSquare}
         <CityAnimationCard />
         {mainTitle}
         <NationalCodeEntry
            setShowConfirmationForm={setShowConfirmationForm}
            showConfirmationForm={showConfirmationForm}
         />
         {/* </Layout> */}
      </LoginContext.Provider>
   );
};

export default Login;
