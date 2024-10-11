import { FC, useContext } from 'react';
import SelectedChargeCard from '../selectedChargeCard';
import resetChargeStates from '../../../utilities/resetChargeStates';
import InfoCard from '../../../components/infoCard';
import InfoCardTitle from '../infoCardTitle';
import styles from '../index.module.scss';
import MasterCard from '../../../components/masterCard';
import { renderInfoCard } from './renderInfoCard';
import { TradeCharge } from '../../../interfaces/models.interface';
import { useChargesContext, useUserContext } from '../../../App.context';

const MobileChargeCards: FC<{ tradeCharges: TradeCharge[] }> = ({
   tradeCharges,
}) => {
   const {
      selectedTradeCharge,
      setSelectedTradeCharge,
      setSelectedChargeBillDetails,
      setSelectedChargeBillInfo,
      setSelectedRenovationCharge,
   } = useChargesContext();
   const { showPaymentHistory } = useUserContext();
   const renderMasterCard = (charge: TradeCharge) => (
      <MasterCard
         key={charge.master_id}
         address={charge.address}
         isPayed={charge.is_paid}
         master={charge}
      >
         {renderInfoCard(charge)}
      </MasterCard>
   );

   return (
      <>
         {selectedTradeCharge ? (
            <SelectedChargeCard isPayed={showPaymentHistory} />
         ) : (
            (() => {
               resetChargeStates(
                  setSelectedTradeCharge,
                  setSelectedRenovationCharge,
                  setSelectedChargeBillDetails,
                  setSelectedChargeBillInfo,
               );
               return tradeCharges.map(renderMasterCard);
            })()
         )}
      </>
   );
};

export default MobileChargeCards;
