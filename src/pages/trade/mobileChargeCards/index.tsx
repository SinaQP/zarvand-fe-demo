import { FC, useContext } from 'react';
import { AppContext } from '../../../App.context';
import SelectedChargeCard from '../selectedChargeCard';
import resetChargeStates from '../../../utilities/resetChargeStates';
import { TradeCharge } from '../../../App.interface';
import InfoCard from '../../../components/infoCard';
import InfoCardTitle from '../infoCardTitle';
import styles from '../index.module.scss';
import MasterCard from '../../../components/masterCard';
import { renderInfoCard } from './renderInfoCard';

const MobileChargeCards: FC<{ tradeCharges: TradeCharge[] }> = ({
   tradeCharges,
}) => {
   const {
      selectedTradeCharge,
      setSelectedTradeCharge,
      setSelectedChargeBillDetails,
      setSelectedChargeBillInfo,
      showPaymentHistory,
      setSelectedRenovationCharge,
   } = useContext(AppContext);

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
