import { FC, useContext, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useChargesContext, useUserContext } from '../../App.context';
import { getUserTradeMasters } from './functions/getPersonTradeMasters';
import NoTradeChargesMessage from './noTradeChargeMessage';
import getSelectedChargeBillDetails from '../../utilities/getSelectedChargeBillDetails';
import useWindowWidth from '../../hooks/useWindowWidth';
import MobileChargeCards from './mobileChargeCards';
import { useLayoutContext } from '../../components/layout/layout.context';
import { Bounce, ToastContainer } from 'react-toastify';
import DesktopChargeCards from './desktopChargeCards';
import { TradeCharge } from '../../interfaces/models.interface';

const Trade: FC = () => {
   const { setHeaderId } = useLayoutContext();

   const { token } = useUserContext();
   const {
      selectedTradeCharge,
      setSelectedTradeCharge,
      setSelectedChargeBillDetails,
      setSelectedChargeBillInfo,
      tradeCharges,
      setTradeCharges,
   } = useChargesContext();
   const chargeCards = useWindowWidth(
      <DesktopChargeCards />,
      <MobileChargeCards tradeCharges={tradeCharges} />,
   );
   const { setShowPaymentHistory } = useUserContext();
   useEffect(() => {
      setSelectedTradeCharge(null);
      getUserTradeMasters(token, setTradeCharges);
      setHeaderId && setHeaderId(styles['header']);
   }, [token]);

   useEffect(() => {
      if (selectedTradeCharge) {
         getSelectedChargeBillDetails(
            token,
            selectedTradeCharge,
            'Trade',
            setSelectedChargeBillDetails,
            setSelectedChargeBillInfo,
         );
         setShowPaymentHistory(selectedTradeCharge.is_paid);
      }
   }, [selectedTradeCharge]);

   return (
      <section className={styles.layout}>
         {tradeCharges.length <= 0 ? <NoTradeChargesMessage /> : null}
         {chargeCards}
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

export default Trade;
