import { FC, useEffect } from 'react';
import UnPayedDetails from './unPayedDetails';
import PayedDetails from './payedDetails';
import { useChargesContext, useUserContext } from '../../../App.context';
import getSelectedChargeBillDetails from '../../../utilities/getSelectedChargeBillDetails';
import { TradeCharge } from '../../../interfaces/models.interface';

const SelectedChargeCard: FC<{ isPayed: boolean }> = ({ isPayed }) => {
   const { token, setShowPaymentHistory } = useUserContext();
   const { selectedTradeCharge, setTradeCharges, setSelectedTradeCharge } =
      useChargesContext();
   useEffect(() => {
      async function fetchBillDetails() {
         if (selectedTradeCharge && !selectedTradeCharge.last_bill_info) {
            const updatedCharge = await getSelectedChargeBillDetails(
               token,
               selectedTradeCharge,
               'Trade',
               setTradeCharges,
            );
            setSelectedTradeCharge(updatedCharge as TradeCharge);
         }
      }
      fetchBillDetails();
   }, [selectedTradeCharge]);
   return isPayed ? <PayedDetails /> : <UnPayedDetails />;
};

export default SelectedChargeCard;
