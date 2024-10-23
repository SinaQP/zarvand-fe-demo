import { FC, useEffect } from 'react';
import { useChargesContext, useUserContext } from '../../../App.context';
import UnPayedDetails from './unPayedDetail';
import PayedDetails from './payedDetail';
import getSelectedChargeBillDetails from '../../../utilities/getSelectedChargeBillDetails';
import { RenovationCharge } from '../../../interfaces/models.interface';

const SelectedRenovationCharge: FC<{ isPayed: boolean }> = ({ isPayed }) => {
   const { token } = useUserContext();
   const {
      selectedRenovationCharge,
      setSelectedRenovationCharge,
      setRenovationCharges,
   } = useChargesContext();
   const { setShowPaymentHistory } = useUserContext();
   if (!selectedRenovationCharge) return null;
   useEffect(() => {
      async function fetchBillDetails() {
         if (
            selectedRenovationCharge &&
            !selectedRenovationCharge.last_bill_details
         ) {
            const updatedCharge = await getSelectedChargeBillDetails(
               token,
               selectedRenovationCharge,
               'Renovation',
               setRenovationCharges,
            );
            if (
               selectedRenovationCharge &&
               updatedCharge &&
               selectedRenovationCharge.master_id === updatedCharge.master_id
            ) {
               setSelectedRenovationCharge(updatedCharge as RenovationCharge);
            }
         }
      }
      fetchBillDetails();
   }, [selectedRenovationCharge]);
   return (
      <div style={{ width: '100%' }}>
         {isPayed ? <PayedDetails /> : <UnPayedDetails />}
      </div>
   );
};

export default SelectedRenovationCharge;
