import { FC, useContext, useEffect } from 'react';
import MasterCard from '../../../components/masterCard';
import InfoCardTitle from '../infoCardTitle';
import styles from '../index.module.scss';
import InfoCard from '../../../components/infoCard';
import { AppContext } from '../../../App.context';
import AnnualChargeTable from '../../../components/annualChargeTable';
import getSelectedChargeBillDetails from '../functions/getSelectedChargeBillDetails';
import Loading from '../../../components/loading/loading';
import BillInfo from './billInfo';

const SelectedChargeCard: FC = () => {
   const {
      selectedTradeCharge,
      token,
      setSelectedTradeChargeBillDetails,
      selectedTradeChargeBillDetails, setSelectedChargeBillInfo,
   } = useContext(AppContext);

   useEffect(() => {
      if (selectedTradeCharge)
         getSelectedChargeBillDetails(token, selectedTradeCharge, setSelectedTradeChargeBillDetails, setSelectedChargeBillInfo);
   }, []);

   if (!selectedTradeCharge) return null;


   return <MasterCard key={selectedTradeCharge.master_id} address={selectedTradeCharge.address}
                      isPayed={selectedTradeCharge.is_paid}
                      master={selectedTradeCharge}>

      <InfoCard isPrimary={selectedTradeCharge.is_paid}
                title={<InfoCardTitle />}
                className={styles['trade-type-card']}
                containerClassName={styles['info-card']}>
         {selectedTradeCharge.TradeType}
      </InfoCard>

      {selectedTradeChargeBillDetails === null ? <Loading /> :
         <AnnualChargeTable data={selectedTradeChargeBillDetails ? selectedTradeChargeBillDetails : []}
                            className={styles.table} />}

      <BillInfo />
   </MasterCard>;
};
;

export default SelectedChargeCard;