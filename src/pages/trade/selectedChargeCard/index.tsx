import { FC, useEffect } from 'react';
import UnPayedDetails from './unPayedDetails';
import PayedDetails from './payedDetails';
import { useChargesContext, useUserContext } from '../../../App.context';
import getSelectedChargeBillDetails from '../../../utilities/getSelectedChargeBillDetails';
import { TradeCharge } from '../../../interfaces/models.interface';

const SelectedChargeCard: FC<{ isPayed: boolean }> = ({ isPayed }) => {
   const { token } = useUserContext();
   const { selectedTradeCharge, setTradeCharges, setSelectedTradeCharge } =
      useChargesContext();
   useEffect(() => {
      async function fetchBillDetails() {
         if (   selectedRenovationCharge &&
            !selectedRenovationCharge.last_bill_details) {
            const updatedCharge = await getSelectedChargeBillDetails(
               token,
               selectedTradeCharge,
               'Trade',
               setTradeCharges,
            );
            if (
               selectedTradeCharge &&
               updatedCharge &&
               selectedTradeCharge.master_id === updatedCharge.master_id
            ) {
               setSelectedTradeCharge(updatedCharge as TradeCharge);
            } else if (updatedCharge === null) {
               setSelectedTradeCharge(null);
            }
         }
      }
      fetchBillDetails();
   }, [selectedTradeCharge]);
   
   return isPayed ? <PayedDetails /> : <UnPayedDetails />;
};

export default SelectedChargeCard;
