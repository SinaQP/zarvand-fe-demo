import { FC, useContext, useEffect } from 'react';
import BackArrow from '../../../components/backArrow';
import styles from '../index.module.scss';
import resetChargeStates from '../../../utilities/resetChargeStates';
import MasterCard from '../../../components/masterCard';
import InfoCard from '../../../components/infoCard';
import InfoCardTitle from '../infoCardTitle';
import Loading from '../../../components/loading/loading';
import AnnualChargeTable from '../../../components/annualChargeTable';
import BillInfo from './billInfo';
import { useChargesContext, useUserContext } from '../../../App.context';
import useWindowWidth from '../../../hooks/useWindowWidth';
import getSelectedChargeBillDetails from '../../../utilities/getSelectedChargeBillDetails';
import { TradeCharge } from '../../../interfaces/models.interface';

const UnPayedDetails: FC = () => {
   const desktopBillInfo = useWindowWidth(<BillInfo />, null);
   const {
      selectedTradeCharge,
      setSelectedTradeCharge,
      setSelectedRenovationCharge,
   } = useChargesContext();
   const { setShowPaymentHistory } = useUserContext();

   if (!selectedTradeCharge) return null;
   return (
      <div className={styles.unPayedDetails}>
         <BackArrow
            className={styles['back-arrow']}
            onClick={() =>
               resetChargeStates(
                  setSelectedTradeCharge,
                  setSelectedRenovationCharge,
                  setShowPaymentHistory,
               )
            }
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
   );
};

export default UnPayedDetails;
