import { FC } from 'react';
import MasterCard from '../../../components/masterCard';
import { useChargesContext } from '../../../App.context';
import PaidBillCard from '../../../components/paidBillsCard';
import InfoRow from '../../../components/infoRow';
import styles from '../index.module.scss';
import AddressSection from '../../../components/addressSection';
import BackArrow from '../../../components/backArrow';
import resetChargeStates from '../../../utilities/resetChargeStates';
import useWindowWidth from '../../../hooks/useWindowWidth';
import InfoCard from '../../../components/infoCard';
import InfoCardTitle from '../components/infoCardTitle';
import CertificationNumberCard from '../../../components/certificationNumberCard';

const PayedDetails: FC = () => {
   const {
      selectedRenovationCharge,
      selectedChargeBillInfo,
      setSelectedTradeCharge,
      setSelectedRenovationCharge,
      setSelectedChargeBillDetails,
      setSelectedChargeBillInfo,
   } = useChargesContext();
   const windowWidth = useWindowWidth('desktop', 'android');

   if (!selectedRenovationCharge || !selectedChargeBillInfo) return null;
   return (
      <section className={styles['paidRenovationContainer']}>
         {windowWidth === 'android' && (
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
                  {/* <InfoCard
                     title={<InfoCardTitle title="شماره شناسنامه ملک" />}
                     isPrimary
                  > */}
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
                  {/* </InfoCard> */}
               </>
            )}
         </div>
         {selectedChargeBillInfo.bills.map((bill) => (
            <PaidBillCard Bill={bill} />
         ))}
      </section>
   );
};

export default PayedDetails;
