import { FC, useEffect } from 'react';
import styles from './index.module.scss';
import { useChargesContext, useUserContext } from '../../App.context';
import { getUserTradeMasters } from './functions/getPersonTradeMasters';
import NoTradeChargesMessage from './noTradeChargeMessage';
import getSelectedChargeBillDetails from '../../utilities/getSelectedChargeBillDetails';
import { useLayoutContext } from '../../components/layout/layout.context';
import { Bounce, ToastContainer } from 'react-toastify';
import ChargeCards from './chargeCards';

const Trade: FC = () => {
   const { setHeaderId } = useLayoutContext();
   const { token } = useUserContext();
   const {
      setSelectedTradeCharge,
      tradeCharges,
      setTradeCharges,
   } = useChargesContext();

   useEffect(() => {
      setSelectedTradeCharge(null);
      !tradeCharges.length && getUserTradeMasters(token, setTradeCharges, setSelectedTradeCharge);
      setHeaderId?.(styles['header']);
   }, [token]);

   return (
      <section className={styles.layout}>
         {tradeCharges.length <= 0 ? (
            <NoTradeChargesMessage />
         ) : (
            <ChargeCards tradeCharges={tradeCharges} />
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

export default Trade;
