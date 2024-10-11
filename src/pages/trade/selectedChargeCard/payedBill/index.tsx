import { FC } from 'react';
import { BillDetail } from '../../../../app.interface';
import styles from './index.module.scss';
import InfoCard from '../../../../components/infoCard';
import InfoRow from '../../../../components/infoRow';
import TimeLine from './timeLine';

const PayedBill: FC<{ charge: BillDetail }> = ({ charge }) => {
   return <div className={styles['payed-bill']}></div>;
};

export default PayedBill;
