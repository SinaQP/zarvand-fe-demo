import { FC } from 'react';
import { useChargesContext } from '../../../App.context';
import PaidBillCard from '../../../components/paidBillsCard';
import InfoRow from '../../../components/infoRow';
import styles from '../index.module.scss';
import AddressSection from '../../../components/addressSection';
import BackArrow from '../../../components/backArrow';
import resetChargeStates from '../../../utilities/resetChargeStates';
import { Bill } from '../../../interfaces/models.interface';
import CertificationNumberCard from '../../../components/certificationNumberCard';
import useWindowWidth from '../../../hooks/useWindowWidth';

const PayedDetails: FC = () => {
   const {
      selectedRenovationCharge,
      setSelectedTradeCharge,
      setSelectedRenovationCharge,
   } = useChargesContext();
   const windowWidth = useWindowWidth('desktop', 'android');

   if (!selectedRenovationCharge) return null;
   return (
      <section className={styles['paidRenovationContainer']}>
         {windowWidth === 'android' && (
            <BackArrow
               className={styles['back-arrow']}
               onClick={() =>
                  resetChargeStates(
                     setSelectedTradeCharge,
                     setSelectedRenovationCharge,
                  )
               }
            />
         )}
         <div className={styles['master-info']}>
            <AddressSection
               address={selectedRenovationCharge.address}
               className={`${styles['master-address']}`}
            />

            {windowWidth === 'android' ? (
               <>
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
               </>
            ) : (
               <>
                  <div className={styles['locationDetails']}>
                     <CertificationNumberCard charge={selectedRenovationCharge}>
                        <div className={styles['square-footage']}>
                           <span>مساحت زمین:</span>
                           <span>{`${
                              selectedRenovationCharge.land_area || 0
                           } متر مربع`}</span>
                        </div>

                        <div className={styles['square-footage']}>
                           <span>مساحت ساختمان:</span>
                           <span>{`${
                              selectedRenovationCharge.building_area || 0
                           } متر مربع`}</span>
                        </div>
                     </CertificationNumberCard>
                  </div>
               </>
            )}
         </div>
         {selectedRenovationCharge.bills.map((bill: Bill) => (
            <PaidBillCard Bill={bill} />
         ))}
      </section>
   );
};

export default PayedDetails;
