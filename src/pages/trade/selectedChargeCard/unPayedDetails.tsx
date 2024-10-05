import { FC, useContext } from 'react';
import BackArrow from '../../../components/backArrow';
import styles from '../index.module.scss';
import resetChargeStates from '../../../utilities/resetChargeStates';
import MasterCard from '../../../components/masterCard';
import InfoCard from '../../../components/infoCard';
import InfoCardTitle from '../infoCardTitle';
import Loading from '../../../components/loading/loading';
import AnnualChargeTable from '../../../components/annualChargeTable';
import BillInfo from './billInfo';
import { AppContext } from '../../../App.context';

const UnPayedDetails: FC = () => {
   const {
      selectedTradeCharge,
      selectedChargeBillDetails,
      setSelectedTradeCharge,
      setSelectedChargeBillDetails,
      setSelectedChargeBillInfo,
      setSelectedRenovationCharge,
   } = useContext(AppContext);
   if (!selectedTradeCharge) return null;

   return (
      <div>
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
         <MasterCard
            key={selectedTradeCharge.master_id}
            address={selectedTradeCharge.address}
            isPayed={selectedTradeCharge.is_paid}
            master={selectedTradeCharge}
         >
            <InfoCard
               isPrimary={selectedTradeCharge.is_paid}
               title={<InfoCardTitle />}
               className={styles['trade-type-card']}
               containerClassName={styles['info-card']}
            >
               {selectedTradeCharge.TradeType}
            </InfoCard>

            {selectedChargeBillDetails === null ? (
               <Loading />
            ) : (
               <AnnualChargeTable
                  data={
                     selectedChargeBillDetails ? selectedChargeBillDetails : []
                  }
                  className={styles.table}
               />
            )}

            <BillInfo />
         </MasterCard>
      </div>
   );
};

export default UnPayedDetails;
