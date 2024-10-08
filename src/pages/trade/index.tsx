import { FC, useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout';
import styles from './index.module.scss';
import { AppContext } from '../../App.context';
import { getUserTradeMasters } from './functions/getPersonTradeMasters';
import { TradeCharge } from '../../App.interface';
import NoTradeChargesMessage from './noTradeChargeMessage';
import getSelectedChargeBillDetails from '../../utilities/getSelectedChargeBillDetails';
import useWindowWidth from '../../hooks/useWindowWidth';
import MobileChargeCards from './mobileChargeCards';
import { useLayoutContext } from '../../components/layout/layout.context';

const Trade: FC = () => {
   const { setHeaderId } = useLayoutContext();
   const [tradeCharges, setTradeCharges] = useState<TradeCharge[]>([]);
   const chargeCards = useWindowWidth(
      null,
      <MobileChargeCards tradeCharges={tradeCharges} />,
   );
   const {
      token,
      selectedTradeCharge,
      setSelectedTradeCharge,
      setSelectedChargeBillDetails,
      setSelectedChargeBillInfo,
      setShowPaymentHistory,
   } = useContext(AppContext);

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
      </section>
   );
};

export default Trade;
