import { FC, useEffect, useState } from 'react';
import { useChargesContext, useUserContext } from '../../../App.context';
import UnPayedDetails from './unPayedDetail';
import PayedDetails from './payedDetail';
import getSelectedChargeBillDetails from '../../../utilities/getSelectedChargeBillDetails';
import { RenovationCharge } from '../../../interfaces/models.interface';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const SelectedRenovationCharge: FC<{ isPayed: boolean }> = ({ isPayed }) => {
   const { token } = useUserContext();
   const {
      selectedRenovationCharge,
      setSelectedRenovationCharge,
      setRenovationCharges,
   } = useChargesContext();
   const { setShowPaymentHistory } = useUserContext();
   const [hasToastShown, setHasToastShown] = useState(false);

   if (!selectedRenovationCharge) return null;
   useEffect(() => {
      if (!hasToastShown) {
         toast.error(
            'لطفا اطلاعات نمایش داده شده را با دقت برسی فرمایید. درصورت مشهده هرگونه مغایرت، به قسمت پشتیبانی مراجعه فرمایید. مسئولیت هرگونه مغایرت بر عهده شما خواهد بود.',
            { autoClose: false },
         );
         setHasToastShown(true);
      }
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
            } else if (updatedCharge === null) {
               setSelectedRenovationCharge(null);
            }
         }
      }
      fetchBillDetails();
   }, [selectedRenovationCharge.master_id]);
   return (
      <div style={{ width: '100%' }}>
         {isPayed ? <PayedDetails /> : <UnPayedDetails />}
      </div>
   );
};

export default SelectedRenovationCharge;
