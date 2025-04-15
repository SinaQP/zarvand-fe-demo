import InfoRow from '../../../../components/infoRow';
import styles from './index.module.scss';
import { useSearchParams } from 'react-router-dom';
const PaymentDetail = () => {
   const [searchParams] = useSearchParams();

   const billNo = searchParams.get('bill_no');
   const payNo = searchParams.get('pay_no');
   const amount = searchParams.get('amount');
   const time = searchParams.get('time');
   const traceNo = searchParams.get('trace_no');

   return (
      <>
         <InfoRow
            title="شناسه قبض:"
            value={billNo || '-'}
            className={styles['payment-detail__row']}
         />
         <InfoRow
            title="شناسه پرداخت:"
            value={payNo || '-'}
            className={styles['payment-detail__row']}
         />
         <InfoRow
            title="مبلغ پرداخت شده:"
            value={amount || '-'}
            className={styles['payment-detail__row']}
         />
         <InfoRow
            title="زمان پرداخت:"
            value={time || '-'}
            className={styles['payment-detail__row']}
         />
         <InfoRow
            title="کد پیگیری:"
            value={traceNo || '-'}
            className={styles['payment-detail__row']}
         />
      </>
   );
};

export default PaymentDetail;
