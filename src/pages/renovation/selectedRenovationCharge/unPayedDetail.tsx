import { FC } from 'react';
import MasterCard from '../../../components/masterCard';
import { useChargesContext, useUserContext } from '../../../App.context';
import CertificationNumberCard from '../../../components/certificationNumberCard';
import AnnualChargeTable from '../../../components/annualChargeTable';
import Loading from '../../../components/loading/loading';
import styles from '../index.module.scss';
import BackArrow from '../../../components/backArrow';
import resetChargeStates from '../../../utilities/resetChargeStates';
import BillInfo from './billInfo';
import useWindowWidth from '../../../hooks/useWindowWidth';

const UnPayedDetails: FC = () => {
   const desktopBillInfo = useWindowWidth(<BillInfo />, null);
   const {
      selectedRenovationCharge,
      selectedChargeBillDetails,
      selectedChargeBillInfo,
      setSelectedTradeCharge,
      setSelectedRenovationCharge,
      setSelectedChargeBillDetails,
      setSelectedChargeBillInfo,
   } = useChargesContext();
   const { showPaymentHistory, setShowPaymentHistory } = useUserContext();
   if (!selectedRenovationCharge) return null;
   return (
      <div className={styles.unPayedDetails}>
         <BackArrow
            className={`${styles['back-arrow']} ${
               showPaymentHistory && styles['back-arrow--is-paid']
            }`}
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
         <MasterCard
            master={selectedRenovationCharge}
            address={selectedRenovationCharge.address}
            isPayed={selectedRenovationCharge.is_paid}
            key={selectedRenovationCharge.master_id}
            className={styles['master-card']}
            addressSectionClassName={styles['address-section']}
         >
            <div className={styles['master-card__body']}>
               <CertificationNumberCard charge={selectedRenovationCharge}>
                  {desktopBillInfo}
               </CertificationNumberCard>
               {selectedChargeBillDetails === null ? (
                  <Loading />
               ) : (
                  <AnnualChargeTable
                     data={
                        selectedChargeBillDetails
                           ? selectedChargeBillDetails
                           : []
                     }
                     className={styles.table}
                  />
               )}
               <BillInfo className={styles['bill-info']} />
            </div>
         </MasterCard>
      </div>
   );
};

export default UnPayedDetails;
