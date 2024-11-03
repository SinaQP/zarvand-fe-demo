import { FC } from 'react';
import { useChargesContext, useUserContext } from '../../../App.context';
import InfoRow from '../../../components/infoRow';
import styles from './index.module.scss';
import PaidBillCard from '../../../components/paidBillsCard';
import MasterCard from '../../../components/masterCard';
import resetChargeStates from '../../../utilities/resetChargeStates';
import BackArrow from '../../../components/backArrow';
import useWindowWidth from '../../../hooks/useWindowWidth';
import ButtonGroup from '../../../components/masterCard/buttonGroup';
import CertificationNumberCard from '../../../components/certificationNumberCard';

const PayedDetails: FC = () => {
   const {
      setSelectedTradeCharge,
      setSelectedRenovationCharge,
      selectedRenovationCharge,
   } = useChargesContext();
   const { setShowPaymentHistory } = useUserContext();
   const isMobile = useWindowWidth(false, true);
   return selectedRenovationCharge ? (
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
            pageTitle="نوسازی"
         />
         {selectedRenovationCharge ? (
            <MasterCard
               master={selectedRenovationCharge}
               address={selectedRenovationCharge.address}
               isPayed
               className={styles['master-card']}
               showButtons={isMobile}
            >
               <div className={styles['master-card__body']}>
                  <CertificationNumberCard charge={selectedRenovationCharge} >
                     {!isMobile && (
                        <>
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
                           <ButtonGroup
                              charge={selectedRenovationCharge}
                              setBankPortal={null}
                           />
                        </>
                     )}
                  </CertificationNumberCard>
                  {isMobile && (
                     <>
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
                     </>
                  )}
                  <div className={styles['master-card__payment-bills']}>
                     {selectedRenovationCharge.bills &&
                        selectedRenovationCharge.bills.map((bill) => (
                           <PaidBillCard Bill={bill} />
                        ))}
                     {selectedRenovationCharge.bills &&
                        selectedRenovationCharge.bills.map((bill) => (
                           <PaidBillCard Bill={bill} />
                        ))}
                     {selectedRenovationCharge.bills &&
                        selectedRenovationCharge.bills.map((bill) => (
                           <PaidBillCard Bill={bill} />
                        ))}
                  </div>
               </div>
            </MasterCard>
         ) : null}
      </div>
   ) : null;
};

export default PayedDetails;
