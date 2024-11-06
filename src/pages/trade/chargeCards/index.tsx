import { FC, useState } from 'react';
import SelectedChargeCard from '../selectedChargeCard';
import resetChargeStates from '../../../utilities/resetChargeStates';
import styles from '../index.module.scss';
import MasterCard from '../../../components/masterCard';
import { renderInfoCard } from './renderInfoCard';
import { TradeCharge } from '../../../interfaces/models.interface';
import { useChargesContext, useUserContext } from '../../../App.context';
import InfoRow from '../../../components/infoRow';
import toMoneyFormat from '../../../utilities/toMoneyFormat';

const ChargeCards: FC<{ tradeCharges: TradeCharge[] }> = ({ tradeCharges }) => {
   const {
      selectedTradeCharge,
      setSelectedTradeCharge,
      setSelectedRenovationCharge,
   } = useChargesContext();
   const { showPaymentHistory, setShowPaymentHistory } = useUserContext();
   const renderMasterCard = (charge: TradeCharge) => (
      <MasterCard
         key={charge.master_id}
         address={charge.address}
         isPayed={charge.is_paid}
         master={charge}
         className={styles['master-card']}
      >
         {renderInfoCard(charge)}
         <InfoRow
            title="مساحت ملک :"
            value={`${charge.shop_area} متر مربع`}
            className={`${styles['info-row']} ${
               charge.is_paid && styles['info-row--is-paid']
            }`}
         />
      </MasterCard>
   );

   return (
      <>
         {selectedTradeCharge ? (
            <SelectedChargeCard isPayed={selectedTradeCharge.is_paid} />
         ) : (
            (() => {
               resetChargeStates(
                  setSelectedTradeCharge,
                  setSelectedRenovationCharge,
                  setShowPaymentHistory,
               );
               return tradeCharges.map(renderMasterCard);
            })()
         )}
      </>
   );
};

export default ChargeCards;
