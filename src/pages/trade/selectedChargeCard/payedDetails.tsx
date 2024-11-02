import { FC } from 'react';
import { useChargesContext, useUserContext } from '../../../App.context';
import InfoRow from '../../../components/infoRow';
import styles from './index.module.scss';
import PaidBillCard from '../../../components/paidBillsCard';
import MasterCard from '../../../components/masterCard';
import InfoCard from '../../../components/infoCard';
import InfoCardTitle from '../infoCardTitle';
import resetChargeStates from '../../../utilities/resetChargeStates';
import BackArrow from '../../../components/backArrow';

const PayedDetails: FC = () => {
   const {
      selectedTradeCharge,
      setSelectedTradeCharge,
      setSelectedRenovationCharge,
   } = useChargesContext();
   const { setShowPaymentHistory } = useUserContext();
   if (!selectedTradeCharge || !selectedTradeCharge.bills) return null;
   return (
      <div className={styles['container']}>
         <BackArrow
            className={styles['back-arrow']}
            onClick={() =>
               resetChargeStates(
                  setSelectedTradeCharge,
                  setSelectedRenovationCharge,
                  setShowPaymentHistory,
               )
            }
            status={'paid'}
            pageTitle="کسب و پیشه"
         />
         <MasterCard
            master={selectedTradeCharge}
            address={selectedTradeCharge.address}
            isPayed
            className={styles['master-card']}
         >
            <InfoCard
               title={<InfoCardTitle />}
               isPrimary
               containerClassName={styles['master-card__info-card']}
            >
               {selectedTradeCharge.TradeType}
            </InfoCard>
            <InfoRow
               title="مساحت ملک: "
               value={`${selectedTradeCharge.shop_area} متر مربع`}
               className={styles['master-card__info-row']}
            />
            <div className={styles['master-card__payment-bills']}>
               {selectedTradeCharge.bills.map((bill) => (
                  <PaidBillCard Bill={bill} />
               ))}
            </div>
         </MasterCard>
      </div>
   );
};

export default PayedDetails;
