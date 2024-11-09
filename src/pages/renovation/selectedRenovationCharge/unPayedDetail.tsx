import { FC, useEffect } from 'react';
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
import getSelectedChargeBillDetails from '../../../utilities/getSelectedChargeBillDetails';
import { RenovationCharge } from '../../../interfaces/models.interface';
import ButtonGroup from '../../../components/masterCard/buttonGroup';
import { isMobile } from '../../../utilities/mobileUser';

const UnPayedDetails: FC = () => {
   const desktopBillInfo = useWindowWidth(<BillInfo />, null);
   const isDesktop = useWindowWidth(true, false);
   const { token } = useUserContext();
   const {
      selectedRenovationCharge,
      setSelectedTradeCharge,
      setSelectedRenovationCharge,
      setRenovationCharges,
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
                  selectedRenovationCharge &&
                  selectedRenovationCharge.last_bill_info &&
                  showPaymentHistory
               ) {
                  setShowPaymentHistory(false);
               } else {
                  resetChargeStates(
                     setSelectedTradeCharge,
                     setSelectedRenovationCharge,
                     setShowPaymentHistory,
                  );
               }
            }}
            status={'pending'}
            pageTitle="نوسازی"
         />
         <MasterCard
            master={selectedRenovationCharge}
            address={selectedRenovationCharge.address}
            isPayed={selectedRenovationCharge.is_paid}
            key={selectedRenovationCharge.master_id}
            className={styles['master-card']}
            addressSectionClassName={styles['address-section']}
            showButtons={isMobile}
         >
            <div className={styles['master-card__body']}>
               <CertificationNumberCard charge={selectedRenovationCharge}>
                  {desktopBillInfo}
                  {isDesktop && (
                     <ButtonGroup charge={selectedRenovationCharge} />
                  )}
               </CertificationNumberCard>

               <AnnualChargeTable
                  data={
                     selectedRenovationCharge.last_bill_details
                        ? selectedRenovationCharge.last_bill_details
                        : []
                  }
                  className={styles.table}
               />

               <BillInfo className={styles['bill-info']} />
            </div>
         </MasterCard>
      </div>
   );
};

export default UnPayedDetails;
