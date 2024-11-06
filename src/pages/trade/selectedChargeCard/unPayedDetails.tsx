import { FC } from 'react';
import BackArrow from '../../../components/backArrow';
import styles from '../index.module.scss';
import resetChargeStates from '../../../utilities/resetChargeStates';
import MasterCard from '../../../components/masterCard';
import InfoCard from '../../../components/infoCard';
import InfoCardTitle from '../infoCardTitle';
import AnnualChargeTable from '../../../components/annualChargeTable';
import BillInfo from './billInfo';
import { useChargesContext, useUserContext } from '../../../App.context';
import useWindowWidth from '../../../hooks/useWindowWidth';
import ButtonGroup from '../../../components/masterCard/buttonGroup';

const UnPayedDetails: FC = () => {
   const desktopBillInfo = useWindowWidth(<BillInfo />, null);
   const isMobile = useWindowWidth(false, true);
   const {
      selectedTradeCharge,
      setSelectedTradeCharge,
      setSelectedRenovationCharge,
   } = useChargesContext();
   const { setShowPaymentHistory, showPaymentHistory } = useUserContext();

   return selectedTradeCharge ? (
      <div className={styles.unPayedDetails}>
         <BackArrow
            className={styles['back-arrow']}
            onClick={async () => {
               if (
                  !selectedTradeCharge.is_paid &&
                  selectedTradeCharge &&
                  selectedTradeCharge.last_bill_info &&
                  showPaymentHistory
               ) {
                  setShowPaymentHistory(false);
               } else {
                  await resetChargeStates(
                     setSelectedTradeCharge,
                     setSelectedRenovationCharge,
                     setShowPaymentHistory,
                  );
               }
            }}
            status={'pending'}
            pageTitle="کسب و پیشه"
         />
         <MasterCard
            key={selectedTradeCharge.master_id}
            address={selectedTradeCharge.address}
            isPayed={selectedTradeCharge.is_paid}
            master={selectedTradeCharge}
            className={styles['master-card']}
            addressSectionClassName={styles['address-section']}
            showButtons={false}
         >
            <div className={styles['master-card__body']}>
               <InfoCard
                  isPrimary={selectedTradeCharge.is_paid}
                  title={<InfoCardTitle />}
                  className={styles['trade-type-card']}
                  containerClassName={styles['info-card']}
               >
                  {selectedTradeCharge.TradeType}
                  {desktopBillInfo}
                  {!isMobile && <ButtonGroup charge={selectedTradeCharge} />}
               </InfoCard>

               <AnnualChargeTable
                  data={
                     selectedTradeCharge.last_bill_details
                        ? selectedTradeCharge.last_bill_details
                        : []
                  }
                  className={styles.table}
               />

               <BillInfo className={styles['bill-info']} />
            </div>
         </MasterCard>
      </div>
   ) : null;
};

export default UnPayedDetails;
