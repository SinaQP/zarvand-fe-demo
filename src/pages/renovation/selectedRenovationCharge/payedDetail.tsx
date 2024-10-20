import { FC } from 'react';
import { useChargesContext } from '../../../App.context';
import PaidBillCard from '../../../components/paidBillsCard';
import InfoRow from '../../../components/infoRow';
import styles from '../index.module.scss';
import AddressSection from '../../../components/addressSection';
import BackArrow from '../../../components/backArrow';
import resetChargeStates from '../../../utilities/resetChargeStates';
import { Bill } from '../../../interfaces/models.interface';

const PayedDetails: FC = () => {
   const {
      selectedRenovationCharge,
      setSelectedTradeCharge,
      setSelectedRenovationCharge,
   } = useChargesContext();
   if (!selectedRenovationCharge || !selectedRenovationCharge.last_bill_info) return null;
   return (
      <section>
         <BackArrow
            className={styles['back-arrow']}
            onClick={() =>
               resetChargeStates(
                  setSelectedTradeCharge,
                  setSelectedRenovationCharge,
               )
            }
         />
         <div className={styles['master-info']}>
            <AddressSection
               address={selectedRenovationCharge.address}
               className={styles['master-address']}
            />

            <InfoRow
               title="مساحت ساختمان :"
               value={selectedRenovationCharge.building_area.toString()}
               className={`${styles['info-row']} ${styles['info-row--is-paid']}`}
            />
            <InfoRow
               title="مساحت زمین :"
               value={selectedRenovationCharge.land_area.toString()}
               className={`${styles['info-row']} ${styles['info-row--is-paid']}`}
            />
         </div>
         {selectedRenovationCharge.bills.map((bill: Bill) => (
            <PaidBillCard Bill={bill} />
         ))}
      </section>
   );
};

export default PayedDetails;
