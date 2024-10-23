import { FC } from 'react';
import BackArrow from '../../../components/backArrow';
import styles from '../index.module.scss';
import resetChargeStates from '../../../utilities/resetChargeStates';
import PayedBill from './payedBill';
import { useChargesContext, useUserContext } from '../../../App.context';
import AddressSection from '../../../components/addressSection';
import InfoRow from '../../../components/infoRow';

const PayedDetails: FC = () => {
   const {
      selectedTradeCharge,
      setSelectedTradeCharge,
      setSelectedRenovationCharge,
   } = useChargesContext();
   const { setShowPaymentHistory } = useUserContext();
   if (!selectedTradeCharge || !selectedTradeCharge.bills) return null;

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
                     setShowPaymentHistory
                  );
               }
            }}
         />
         <div className={styles['master-info']}>
            <AddressSection
               address={selectedTradeCharge.address}
               className={`${styles['master-address']}`}
            />

            <InfoRow
               title="مساحت ملک :"
               value={selectedTradeCharge.shop_area.toString()}
               className={`${styles['info-row']} ${styles['info-row--is-paid']}`}
            />
         </div>
         {selectedTradeCharge.bills &&
            selectedTradeCharge.bills.map((charge: any) => (
               <PayedBill charge={charge} />
            ))}
      </div>
   );
};

export default PayedDetails;
