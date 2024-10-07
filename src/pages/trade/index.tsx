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

const Trade: FC = () => {
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
      <>
         {tradeCharges.length <= 0 ? <NoTradeChargesMessage /> : null}
         {chargeCards}
      </>
   );
};

export default Trade;
