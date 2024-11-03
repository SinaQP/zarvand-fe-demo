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
import useWindowWidth from '../../../hooks/useWindowWidth';
import ButtonGroup from '../../../components/masterCard/buttonGroup';

const PayedDetails: FC = () => {
   const {
      selectedTradeCharge,
      setSelectedTradeCharge,
      setSelectedRenovationCharge,
   } = useChargesContext();
   const { setShowPaymentHistory } = useUserContext();
   const isMobile = useWindowWidth(false, true);
   return selectedTradeCharge ? (
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
         {selectedTradeCharge ? (
            <MasterCard
               master={selectedTradeCharge}
               address={selectedTradeCharge.address}
               isPayed
               className={styles['master-card']}
               showButtons={isMobile}
            >
               <div className={styles['master-card__body']}>
                  <InfoCard
                     title={<InfoCardTitle />}
                     isPrimary
                     containerClassName={styles['master-card__info-card']}
                     className={styles['master-card__info-card-body']}
                  >
                     {selectedTradeCharge.TradeType}
                     {!isMobile && (
                        <InfoRow
                           title="مساحت ملک: "
                           value={`${selectedTradeCharge.shop_area} متر مربع`}
                           className={styles['master-card__info-row']}
                        />
                     )}
                     {!isMobile && (
                        <ButtonGroup charge={selectedTradeCharge} isPayed />
                     )}
                  </InfoCard>
                  {isMobile && (
                     <InfoRow
                        title="مساحت ملک: "
                        value={`${selectedTradeCharge.shop_area} متر مربع`}
                        className={styles['master-card__info-row']}
                     />
                  )}
                  <div className={styles['master-card__payment-bills']}>
                     {selectedTradeCharge.bills &&
                        selectedTradeCharge.bills.map((bill) => (
                           <PaidBillCard Bill={bill} />
                        ))}
                     {selectedTradeCharge.bills &&
                        selectedTradeCharge.bills.map((bill) => (
                           <PaidBillCard Bill={bill} />
                        ))}
                     {selectedTradeCharge.bills &&
                        selectedTradeCharge.bills.map((bill) => (
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
