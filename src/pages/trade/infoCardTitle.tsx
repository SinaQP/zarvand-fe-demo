import styles from './index.module.scss';
import tradeTypeIcon from '../../assets/images/trade-type.svg';
import { FC } from 'react';

const InfoCardTitle: FC = () => (
   <span className={styles['info-card-title']}><img src={tradeTypeIcon} /> نوع کسب </span>);


export default InfoCardTitle;