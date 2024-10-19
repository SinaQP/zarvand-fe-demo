import { FC } from 'react';
import BackArrow from '../../../components/backArrow';
import styles from '../index.module.scss';
import resetChargeStates from '../../../utilities/resetChargeStates';
import PayedBill from './payedBill';
import { useChargesContext, useUserContext } from '../../../App.context';
import AddressSection from '../../../components/addressSection';
import SelectedRenovationCharge from '../../renovation/selectedRenovationCharge';

const PayedDetails: FC = () => {
   const {
      selectedTradeCharge,
      selectedChargeBillDetails,
      setSelectedTradeCharge,
      setSelectedChargeBillDetails,
      setSelectedChargeBillInfo,
      setSelectedRenovationCharge,
      selectedRenovationCharge
   } = useChargesContext();
   const { setShowPaymentHistory } = useUserContext();
   if (!selectedTradeCharge || !selectedChargeBillDetails) return null;

   return (
      <div>
         <BackArrow
            className={styles['back-arrow']}
            onClick={() => {
               if (!selectedTradeCharge.is_paid) {
                  setShowPaymentHistory(false);
               } else {
                  resetChargeStates(
                     setSelectedTradeCharge,
                     setSelectedRenovationCharge,
                     setSelectedChargeBillDetails,
                     setSelectedChargeBillInfo,
                  );
               }
            }}
         />
         {selectedChargeBillDetails.map((charge) => (
            <PayedBill charge={charge} />
         ))}
      </div>
   );
};

export default PayedDetails;
