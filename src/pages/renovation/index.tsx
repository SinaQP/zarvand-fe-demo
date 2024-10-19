import { FC, useContext, useEffect } from 'react';
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
      setSelectedChargeBillDetails,
      setSelectedChargeBillInfo,
      renovationCharges,
      setRenovationCharges,
   } = useChargesContext();

   const { token, setShowPaymentHistory, showPaymentHistory } =
      useUserContext();
   const { setHeaderId } = useLayoutContext();
   const { selectedChargeBillInfo } = useChargesContext();

   useEffect(() => {
      getUserRenovationCharges(token, setRenovationCharges);
      setHeaderId?.(styles['header']);
   }, [token]);

   useEffect(() => {
      if (selectedRenovationCharge) {
         getSelectedChargeBillDetails(
            token,
            selectedRenovationCharge,
            'Renovation',
            setSelectedChargeBillDetails,
            setSelectedChargeBillInfo,
         );
         setShowPaymentHistory(selectedRenovationCharge.is_paid);
      }
   }, [selectedRenovationCharge]);

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
