import { FC, useEffect, useState } from 'react';
import SelectedRenovationCharge from '../selectedRenovationCharge';
import { useChargesContext, useUserContext } from '../../../App.context';
import MasterCard from '../../../components/masterCard';
import CertificationNumberCard from '../../../components/certificationNumberCard';
import InfoRow from '../../../components/infoRow';
import styles from '../index.module.scss';
import StatusTab from '../../../components/statusTab';
import resetChargeStates from '../../../utilities/resetChargeStates';
import { toast } from 'react-toastify';
import showChargesValidationToast from '../../../hooks/showChargesValidationToast';

const ChargeCards: FC = () => {
   const { showPaymentHistory, setShowPaymentHistory } = useUserContext();
   const {
      selectedRenovationCharge,
      renovationCharges,
      setSelectedTradeCharge,
      setSelectedRenovationCharge,
   } = useChargesContext();
   renovationCharges.length && showChargesValidationToast();
   return (
      <>
         {selectedRenovationCharge ? (
            <SelectedRenovationCharge
               isPayed={selectedRenovationCharge.is_paid || showPaymentHistory}
            />
         ) : (
            (() => {
               resetChargeStates(
                  setSelectedTradeCharge,
                  setSelectedRenovationCharge,
                  setShowPaymentHistory,
               );

               return renovationCharges.map((charge) => (
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
               ));
            })()
         )}
      </>
   );
};

export default ChargeCards;
