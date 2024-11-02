import { FC } from 'react';
import { useChargesContext, useUserContext } from '../../../App.context';
import PaidBillCard from '../../../components/paidBillsCard';
import InfoRow from '../../../components/infoRow';
import styles from '../index.module.scss';
import AddressSection from '../../../components/addressSection';
import BackArrow from '../../../components/backArrow';
import resetChargeStates from '../../../utilities/resetChargeStates';
import { Bill } from '../../../interfaces/models.interface';
import CertificationNumberCard from '../../../components/certificationNumberCard';
import useWindowWidth from '../../../hooks/useWindowWidth';
import MasterCard from '../../../components/masterCard';
import InfoCard from '../../../components/infoCard';
import InfoCardTitle from '../components/infoCardTitle';

const PayedDetails: FC = () => {
   const {
      selectedRenovationCharge,
      setSelectedTradeCharge,
      setSelectedRenovationCharge,
   } = useChargesContext();
   const windowWidth = useWindowWidth('desktop', 'android');
   const { setShowPaymentHistory } = useUserContext();
   if (!selectedRenovationCharge) return null;
   return (
      <div className={styles['container']}>
         <MasterCard
            master={selectedRenovationCharge}
            address={selectedRenovationCharge.address}
            isPayed
            className={styles['master-card']}
         >
            <InfoCard
               title={<InfoCardTitle title="NIGA" />}
               isPrimary
               containerClassName={styles['master-card__info-card']}
            ></InfoCard>
            <InfoRow
               title="مساحت ساختمان: "
               value={`${selectedRenovationCharge.building_area} متر مربع`}
               className={styles['master-card__info-row']}
            />
            <InfoRow
               title="مساحت زمین: "
               value={`${selectedRenovationCharge.land_area} متر مربع`}
               className={styles['master-card__info-row']}
            />
            <div className={styles['master-card__payment-bills']}>
               {selectedRenovationCharge.bills.map((bill) => (
                  <PaidBillCard Bill={bill} />
               ))}
            </div>
         </MasterCard>
      </div>
   );
};

export default PayedDetails;
