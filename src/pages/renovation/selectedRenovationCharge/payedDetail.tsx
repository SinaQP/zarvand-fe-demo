import { FC } from 'react';
import MasterCard from '../../../components/masterCard';
import { useChargesContext } from '../../../App.context';
import PaidBillCard from '../../../components/paidBillsCard';
import InfoRow from '../../../components/infoRow';
import styles from '../index.module.scss';
import AddressSection from '../../../components/addressSection';

const PayedDetails: FC = () => {
   const { selectedRenovationCharge, selectedChargeBillInfo } =
      useChargesContext();
   if (!selectedRenovationCharge || !selectedChargeBillInfo) return null;
   return (
      <section>
         <div className={styles['master-info']}>
            <AddressSection address={selectedRenovationCharge.address} className={styles['master-address']}/>

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
         {selectedChargeBillInfo.bills.map((bill) => (
            <PaidBillCard Bill={bill} />
         ))}
      </section>
   );
};

export default PayedDetails;
