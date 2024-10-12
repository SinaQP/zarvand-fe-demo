import { FC, useContext } from 'react';
import BackArrow from '../../../components/backArrow';
import styles from '../index.module.scss';
import resetChargeStates from '../../../utilities/resetChargeStates';
import MasterCard from '../../../components/masterCard';
import InfoCard from '../../../components/infoCard';
import InfoCardTitle from '../infoCardTitle';
import Loading from '../../../components/loading/loading';
import AnnualChargeTable from '../../../components/annualChargeTable';
import BillInfo from './billInfo';
import PayedBill from './payedBill';
import { useChargesContext, useUserContext } from '../../../App.context';

const PayedDetails: FC = () => {
   const {
      selectedTradeCharge,
      selectedChargeBillDetails,
      setSelectedTradeCharge,
      setSelectedChargeBillDetails,
      setSelectedChargeBillInfo,
      setSelectedRenovationCharge,
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
