import { FC, memo, useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout';
import styles from './index.module.scss';
import { AppContext } from '../../App.context';
import { getUserTradeMasters } from './getPersonTradeMasters';
import InfoCard from '../../components/infoCard';
import InfoCardTitle from './infoCardTitle';
import MasterCard from '../../components/masterCard';
import { TradeCharge } from '../../App.interface';
import AnnualChargeTable from '../../components/annualChargeTable';
import NoTradeChargesMessage from './noTradeChargeMessage';

const Trade: FC = () => {
   const [tradeCharges, setTradeCharges] = useState<TradeCharge[]>([]);
   const { token, selectedTradeCharge, setSelectedTradeCharge } = useContext(AppContext);
   const MemoizedInfoCardTitle = memo(InfoCardTitle);
   const MemoizedMasterCard = memo(MasterCard);

   useEffect(() => {
      setSelectedTradeCharge(null);
      getUserTradeMasters(token, setTradeCharges);
   }, [token]);

   const renderInfoCard = (charge: TradeCharge) => (
      <InfoCard isPrimary={charge.is_paid}
                title={<MemoizedInfoCardTitle />}
                className={styles['trade-type-card']}
                containerClassName={styles['info-card']}>
         {charge.TradeType}
      </InfoCard>
   );
   const data = [
      { fromYear: '1360', toYear: '1360', amount: '26,205,000', description: 'عوارض سالیانه' },
      { fromYear: '1360', toYear: '1360', amount: '26,205,000', description: 'عوارض سالیانه' },
      { fromYear: '1360', toYear: '1360', amount: '26,205,000', description: 'عوارض سالیانه' },
      { fromYear: '1360', toYear: '1360', amount: '26,205,000', description: 'عوارض سالیانه' },
      { fromYear: '1360', toYear: '1360', amount: '26,205,000', description: 'عوارض سالیانه' },
      { fromYear: '1360', toYear: '1360', amount: '26,205,000', description: 'عوارض سالیانه' },
      { fromYear: '1360', toYear: '1360', amount: '26,205,000', description: 'عوارض سالیانه' },
      { fromYear: '1360', toYear: '1360', amount: '26,205,000', description: 'عوارض سالیانه' },
      { fromYear: '1360', toYear: '1360', amount: '26,205,000', description: 'عوارض سالیانه' },
   ];
   const renderMasterCard = (charge: TradeCharge) => (
      <MemoizedMasterCard key={charge.master_id} address={charge.address} isPayed={charge.is_paid} master={charge}>
         {renderInfoCard(charge)}
         {selectedTradeCharge && <AnnualChargeTable data={data} />}

      </MemoizedMasterCard>
   );

   return <Layout headerClassName={styles.header} className={styles['layout']}>
      {tradeCharges.length <= 0 ? <NoTradeChargesMessage /> : null}
      {selectedTradeCharge
         ? renderMasterCard(selectedTradeCharge)
         : tradeCharges.map(renderMasterCard)}
   </Layout>;
};

export default Trade;
