import { FC } from 'react';
import MasterCard from '../../../components/masterCard';
import InfoCard from '../../../components/infoCard';
import styles from '../index.module.scss';
import AnnualChargeTable from '../../../components/annualChargeTable';
import Loading from '../../../components/loading/loading';
import { useChargesContext, useUserContext } from '../../../App.context';
import CertificationNumberCard from '../../../components/certificationNumberCard';
import UnPayedDetails from './unPayedDetail';
import PayedDetails from './payedDetail';
import BackArrow from '../../../components/backArrow';
import resetChargeStates from '../../../utilities/resetChargeStates';

const SelectedRenovationCharge: FC<{ isPayed: boolean }> = ({ isPayed }) => {
   const {
      selectedRenovationCharge,
      selectedChargeBillInfo,
      setSelectedTradeCharge,
      setSelectedRenovationCharge,
      setSelectedChargeBillDetails,
      setSelectedChargeBillInfo,
   } = useChargesContext();
   const { setShowPaymentHistory, showPaymentHistory } = useUserContext();

   if (!selectedRenovationCharge) return null;

   return (
      <div>
         <BackArrow
            className={`${styles['back-arrow']} ${showPaymentHistory && styles['back-arrow--is-paid']}`}
            onClick={() => {
               if (
                  !selectedRenovationCharge.is_paid &&
                  selectedChargeBillInfo &&
                  selectedChargeBillInfo.last_bill_info &&
                  showPaymentHistory
               ) {
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
         {isPayed ? <PayedDetails /> : <UnPayedDetails />}
      </div>
   );
};

export default SelectedRenovationCharge;
