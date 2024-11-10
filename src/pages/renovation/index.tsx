import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { getUserRenovationCharges } from './getUserRenovationCharges';
import NoRenovationChargesMessage from './noRenovationChargeMessage';
import { useLayoutContext } from '../../components/layout/layout.context';
import { Bounce, ToastContainer } from 'react-toastify';
import { useChargesContext, useUserContext } from '../../App.context';
import ChargeCards from './chargeCards';

const Renovation: FC = () => {
   const {
      renovationCharges,
      setRenovationCharges,
      setSelectedRenovationCharge,
   } = useChargesContext();

   const { token } = useUserContext();
   const { setHeaderId, setHeaderSubtitle } = useLayoutContext();
   const [isLoaded, setIsLoaded] = useState(false);
   useEffect(() => {
      setHeaderSubtitle('پرداخت عوارض');
      getUserRenovationCharges(
         token,
         setRenovationCharges,
         setSelectedRenovationCharge,
         setIsLoaded,
      );
      setHeaderId?.(styles['header']);
   }, [token]);

   return (
      <section className={styles.layout}>
         {isLoaded && renovationCharges.length <= 0 ? (
            <NoRenovationChargesMessage />
         ) : (
            <ChargeCards />
         )}

         <ToastContainer
            rtl
            position="bottom-center"
            autoClose={2000}
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

export default Renovation;
