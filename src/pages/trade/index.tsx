import { FC, useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout';
import styles from './index.module.scss';
import { AppContext } from '../../App.context';
import { getUserTradeMasters } from './getPersonTradeMasters';
import InfoCard from '../../components/infoCard';
import InfoCardTitle from './infoCardTitle';
import MasterCard from '../../components/masterCard';
import { TradeCharge } from '../../App.interface';

const Trade: FC = () => {
   const [tradeCharges, setTradeCharges] = useState<TradeCharge[]>([]);
   const { token, setSelectedTradeCharge } = useContext(AppContext);

   useEffect(() => {
      getUserTradeMasters(token, setTradeCharges);
   }, []);

   return <Layout headerClassName={styles.header} className={styles['layout']}>
      {tradeCharges.map(charge => (
         <MasterCard address={charge.address} isPayed={charge.is_paid}>
            <InfoCard isPrimary={charge.is_paid}
                      title={<InfoCardTitle />}
                      className={styles['trade-type-card']}>{charge.TradeType}</InfoCard>
         </MasterCard>))}
      <MasterCard><InfoCard title={<InfoCardTitle />}>dfdsf</InfoCard></MasterCard>
   </Layout>;
};

export default Trade;
