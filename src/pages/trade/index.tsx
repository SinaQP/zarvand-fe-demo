import { FC, useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout';
import styles from './index.module.scss';
import { AppContext } from '../../App.context';
import { getUserTradeMasters } from './getPersonTradeMasters';
import InfoCard from '../../components/infoCard';
import tradeTypeIcon from '../../assets/images/trade-type.svg';

const Trade: FC = () => {
   const [tradeCharges, setTradeCharges] = useState([]);
   const { token } = useContext(AppContext);
   useEffect(() => {
      getUserTradeMasters(token, setTradeCharges);
   }, []);
   const infoCardTitle = <span className={styles['info-masterCard-title']}><img src={tradeTypeIcon} /> نوع کسب </span>;

   return <Layout headerClassName={styles.header} className={styles['layout']}>
      <InfoCard title={infoCardTitle}></InfoCard>
      {/*{tradeCharges.map(charge => (<InfoCard title={infoCardTitle}></InfoCard>))}*/}
   </Layout>;
};

export default Trade;
