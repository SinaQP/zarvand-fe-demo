import { FC, useEffect, useState } from 'react';
import NationalCodeEntry from './nationalCodeEntry';

import styles from './index.module.scss';
import useWindowWidth from '../../hooks/useWindowWidth';
import blueSquareIcon from '../../assets/images/blue-squares.svg';
import whiteSquareIcon from '../../assets/images/white.squares.svg';
import CityAnimationCard from './cityAnimationCard';
import { useLayoutContext } from '../../components/layout/layout.context';
import { updateLayout } from './functions/updateLayout';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const Login: FC = () => {
   const { setExtraHeaderContent, setHeaderBadge, setBadgeId, setHeaderId } =
      useLayoutContext();
   const [showConfirmationForm, setShowConfirmationForm] = useState(false);
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
         setHeaderId,
         setBadgeId,
         headerClassName,
      });
   }, [showConfirmationForm]);

   return (
      <section>
         {/* {blueSquare} */}
         {/* {whiteSquare} */}
         <CityAnimationCard />
         {/* {mainTitle} */}
         <NationalCodeEntry
            setShowConfirmationForm={setShowConfirmationForm}
            showConfirmationForm={showConfirmationForm}
         />
         <ToastContainer
            rtl
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
            bodyStyle={{ fontFamily: 'BNazanin', fontSize: '2.5rem' }}
         />
      </section>
   );
};

export default Login;
