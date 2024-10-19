import { FC } from 'react';
import MasterCard from '../../../components/masterCard';
import { useChargesContext } from '../../../App.context';
import PaidBillCard from '../../../components/paidBillsCard';
import InfoRow from '../../../components/infoRow';
import styles from '../index.module.scss';
import AddressSection from '../../../components/addressSection';
import BackArrow from '../../../components/backArrow';
import resetChargeStates from '../../../utilities/resetChargeStates';

const PayedDetails: FC = () => {
   const {
      selectedRenovationCharge,
      selectedChargeBillInfo,
      setSelectedTradeCharge,
      setSelectedRenovationCharge,
      setSelectedChargeBillDetails,
      setSelectedChargeBillInfo,
   } = useChargesContext();
   if (!selectedRenovationCharge || !selectedChargeBillInfo) return null;
   return (
      <section>
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
         {selectedChargeBillInfo.bills.map((bill) => (
            <PaidBillCard Bill={bill} />
         ))}
      </section>
   );
};

export default PayedDetails;
