import { FC } from 'react';
import { BillDetail } from '../../../../App.interface';
import styles from './index.module.scss';
import InfoCard from '../../../../components/infoCard';
import InfoRow from '../../../../components/infoRow';
import TimeLine from './timeLine';

const PayedBill: FC<{ charge: BillDetail }> = ({ charge }) => {
   return (
      <div className={styles['payed-bill']}>
         <TimeLine
            fromYear={charge.from_year.toString()}
            toYear={charge.to_year.toString()}
         >
            <InfoRow title="تاریخ پرداخت" value={charge.payment_date} />
         </TimeLine>
      </div>
   );
};

export default PayedBill;
