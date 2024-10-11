import { FC } from 'react';
import styles from './index.module.scss';
import InfoCard from '../../../../components/infoCard';
import InfoRow from '../../../../components/infoRow';
import TimeLine from './timeLine';
import { BillDetail } from '../../../../interfaces/models.interface';

const PayedBill: FC<{ charge: BillDetail }> = ({ charge }) => {
   return <div className={styles['payed-bill']}></div>;
};

export default PayedBill;
