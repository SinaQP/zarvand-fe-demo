import { FC } from 'react';
import BackArrow from '../../../components/backArrow';
import resetChargeStates from '../../../utilities/resetChargeStates';
import PayedBill from './payedBill';
import { useChargesContext, useUserContext } from '../../../App.context';
import AddressSection from '../../../components/addressSection';
import InfoRow from '../../../components/infoRow';
import styles from './index.module.scss';
import PaidBillCard from '../../../components/paidBillsCard';

const PayedDetails: FC = () => {
   const {
      selectedTradeCharge,
      setSelectedTradeCharge,
      setSelectedRenovationCharge,
   } = useChargesContext();
   const { setShowPaymentHistory } = useUserContext();
   if (!selectedTradeCharge || !selectedTradeCharge.bills) return null;

   return (
      <div id={`${styles['paidTradeStyleWrapper']}`}>
         <div id={`${styles['container']}`}>
            <div id={`${styles['backArrowStyleWrapper']}`}>
               <BackArrow
                  className={styles['back-arrow']}
                  onClick={() => {
                     if (!selectedTradeCharge.is_paid) {
                        setShowPaymentHistory(false);
                     } else {
                        resetChargeStates(
                           setSelectedTradeCharge,
                           setSelectedRenovationCharge,
                           setShowPaymentHistory,
                        );
                     }
                  }}
                  status={'paid'}
                  pageTitle="کسب و پیشه"
               />
            </div>

            <div id={styles['master-info']}>
               <AddressSection
                  address={selectedTradeCharge.address}
                  className={`${styles['master-address']}`}
               />

               <InfoRow
                  title="مساحت ملک :"
                  value={`${selectedTradeCharge.shop_area} متر مربع`}
                  className={`${styles['info-row']} ${styles['info-row--is-paid']}`}
               />
            </div>
            {selectedTradeCharge.bills &&
               selectedTradeCharge.bills.map((charge: any) => (
                  <PaidBillCard Bill={charge} />
               ))}
         </div>
      </div>
   );
};

export default PayedDetails;
