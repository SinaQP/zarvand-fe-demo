import { FC, useContext } from 'react';
import MasterCard from '../../../components/masterCard';
import InfoCardTitle from '../infoCardTitle';
import styles from '../index.module.scss';
import InfoCard from '../../../components/infoCard';
import { AppContext } from '../../../App.context';
import AnnualChargeTable from '../../../components/annualChargeTable';
import Loading from '../../../components/loading/loading';
import BillInfo from './billInfo';
import BackArrow from '../../../components/backArrow';
import resetChargeStates from '../../../utilities/resetChargeStates';

const SelectedChargeCard: FC = () => {
   const {
      selectedTradeCharge,
      selectedChargeBillDetails,
      setSelectedTradeCharge,
      setSelectedChargeBillDetails,
      setSelectedChargeBillInfo,
   } = useContext(AppContext);


   if (!selectedTradeCharge) return null;


   return (
      <div>
         <BackArrow className={styles['back-arrow']}
                    onClick={() => resetChargeStates(setSelectedTradeCharge, setSelectedChargeBillDetails, setSelectedChargeBillInfo)} />
         <MasterCard key={selectedTradeCharge.master_id} address={selectedTradeCharge.address}
                     isPayed={selectedTradeCharge.is_paid}
                     master={selectedTradeCharge}>

            <InfoCard isPrimary={selectedTradeCharge.is_paid}
                      title={<InfoCardTitle />}
                      className={styles['trade-type-card']}
                      containerClassName={styles['info-card']}>
               {selectedTradeCharge.TradeType}
            </InfoCard>

            {selectedChargeBillDetails === null ? <Loading /> :
               <AnnualChargeTable data={selectedChargeBillDetails ? selectedChargeBillDetails : []}
                                  className={styles.table} />}

            <BillInfo />
         </MasterCard>
      </div>
   );
};

export default SelectedChargeCard;