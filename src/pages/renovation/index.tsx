import { FC, useEffect } from 'react';
import styles from './index.module.scss';
import { getUserRenovationCharges } from './getUserRenovationCharges';
import NoRenovationChargesMessage from './noRenovationChargeMessage';
import getSelectedChargeBillDetails from '../../utilities/getSelectedChargeBillDetails';
import { useLayoutContext } from '../../components/layout/layout.context';
import { Bounce, ToastContainer } from 'react-toastify';
import { useChargesContext, useUserContext } from '../../App.context';
import ChargeCards from './chargeCards';

const Renovation: FC = () => {
   const {
      selectedRenovationCharge,
      renovationCharges,
      setRenovationCharges,
   } = useChargesContext();

   const { token, setShowPaymentHistory } =
      useUserContext();
   const { setHeaderId } = useLayoutContext();

   useEffect(() => {
      !renovationCharges.length &&
         getUserRenovationCharges(token, setRenovationCharges);
      setHeaderId?.(styles['header']);
   }, [token]);

   return (
      <section className={styles.layout}>
         {renovationCharges.length <= 0 ? (
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
