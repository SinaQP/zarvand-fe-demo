import { FC } from 'react';
import styles from './index.module.scss';

import { BillDetail } from '../../../../interfaces/models.interface';

const PayedBill: FC<{ charge: BillDetail }> = ({ charge }) => {
   return <div className={styles['payed-bill']}></div>;
};

export default PayedBill;
