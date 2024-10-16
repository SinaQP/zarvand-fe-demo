import { FC } from 'react';
import SelectedRenovationCharge from '../selectedRenovationCharge';
import { useChargesContext, useUserContext } from '../../../App.context';
import MasterCard from '../../../components/masterCard';
import CertificationNumberCard from '../../../components/certificationNumberCard';
import InfoRow from '../../../components/infoRow';
import styles from '../index.module.scss';
import StatusTab from '../../../components/statusTab';

const ChargeCards: FC = () => {
   const { showPaymentHistory } = useUserContext();
   const { selectedRenovationCharge, renovationCharges } = useChargesContext();
   return (
      <>
         {/* <StatusTab
            statuses={[]}
            title="ملک‌های زیر در سیستم برای شما ثبت شده است"
         /> */}
         {selectedRenovationCharge ? (
            <SelectedRenovationCharge isPayed={showPaymentHistory} />
         ) : (
            renovationCharges.map((charge) => (
               <MasterCard
                  master={charge}
                  address={charge.address}
                  isPayed={charge.is_paid}
                  key={charge.master_id}
               >
                  <CertificationNumberCard charge={charge} />
                  <InfoRow
                     title="مساحت ساختمان :"
                     value={`${charge.building_area} متر مربع`}
                     className={`${styles['info-row']} ${
                        charge.is_paid && styles['info-row--is-paid']
                     }`}
                  />
                  <InfoRow
                     title="مساحت زمین :"
                     value={`${charge.land_area} متر مربع`}
                     className={`${styles['info-row']} ${
                        charge.is_paid && styles['info-row--is-paid']
                     }`}
                  />
               </MasterCard>
            ))
         )}
      </>
   );
};

export default ChargeCards;
