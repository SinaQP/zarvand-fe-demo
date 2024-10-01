import { FC, useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout';
import styles from './index.module.scss';
import { AppContext } from '../../App.context';
import { getUserTradeMasters } from './functions/getPersonTradeMasters';
import InfoCard from '../../components/infoCard';
import InfoCardTitle from './infoCardTitle';
import MasterCard from '../../components/masterCard';
import { TradeCharge } from '../../App.interface';
import NoTradeChargesMessage from './noTradeChargeMessage';
import SelectedChargeCard from './selectedChargeCard';

const Trade: FC = () => {
   const [tradeCharges, setTradeCharges] = useState<TradeCharge[]>([]);
   const { token, selectedTradeCharge, setSelectedTradeCharge } = useContext(AppContext);
   // const MemoizedInfoCardTitle = memo(InfoCardTitle);
   // const MemoizedMasterCard = memo(MasterCard);

   useEffect(() => {
      setSelectedTradeCharge(null);
      getUserTradeMasters(token, setTradeCharges);
   }, [token]);

   const renderInfoCard = (charge: TradeCharge) => (
      <InfoCard isPrimary={charge.is_paid}
                title={<InfoCardTitle />}
                className={styles['trade-type-card']}
                containerClassName={styles['info-card']}>
         {charge.TradeType}
      </InfoCard>
   );
   const renderMasterCard = (charge: TradeCharge) => (
      <MasterCard key={charge.master_id} address={charge.address} isPayed={charge.is_paid} master={charge}>
         {renderInfoCard(charge)}
      </MasterCard>
   );

   return <Layout headerClassName={styles.header} className={styles['layout']}>
      {tradeCharges.length <= 0 ? <NoTradeChargesMessage /> : null}
      {selectedTradeCharge
         ? <SelectedChargeCard />
         : tradeCharges.map(renderMasterCard)}
   </Layout>;
};

export default Trade;
