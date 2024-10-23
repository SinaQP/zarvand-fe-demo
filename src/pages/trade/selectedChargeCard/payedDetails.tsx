import { FC } from 'react';
import BackArrow from '../../../components/backArrow';
import styles from '../index.module.scss';
import resetChargeStates from '../../../utilities/resetChargeStates';
import PayedBill from './payedBill';
import { useChargesContext, useUserContext } from '../../../App.context';

const PayedDetails: FC = () => {
   const {
      selectedTradeCharge,
      setSelectedTradeCharge,
      setSelectedRenovationCharge,
   } = useChargesContext();
   const { setShowPaymentHistory } = useUserContext();
   if (!selectedTradeCharge || !selectedTradeCharge.bills)
      return null;

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
                  );
               }
            }}
         />
         {selectedTradeCharge.bills && selectedTradeCharge.bills.map((charge: any) => (
            <PayedBill charge={charge} />
         ))}
      </div>
   );
};

export default PayedDetails;
