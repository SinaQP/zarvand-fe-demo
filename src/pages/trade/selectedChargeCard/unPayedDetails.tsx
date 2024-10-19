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
import { useChargesContext } from '../../../App.context';
import useWindowWidth from '../../../hooks/useWindowWidth';
import InfoRow from '../../../components/infoRow';

const UnPayedDetails: FC = () => {
   const desktopBillInfo = useWindowWidth(<BillInfo />, null);
   const {
      selectedTradeCharge,
      selectedChargeBillDetails,
      setSelectedTradeCharge,
      setSelectedChargeBillDetails,
      setSelectedChargeBillInfo,
      setSelectedRenovationCharge,
   } = useChargesContext();
   if (!selectedTradeCharge) return null;

   return (
      <div className={styles.unPayedDetails}>
         <BackArrow
            className={styles['back-arrow']}
            onClick={() =>
               resetChargeStates(
                  setSelectedTradeCharge,
                  setSelectedRenovationCharge,
                  setSelectedChargeBillDetails,
                  setSelectedChargeBillInfo,
               )
            }
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
