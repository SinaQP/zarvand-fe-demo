import InfoRow from '../../../../components/infoRow';
import styles from './index.module.scss';

const PaymentDetail = () => {
   return (
      <>
         <InfoRow
            title="شناسه قبض:"
            value="2620503195"
            className={styles['payment-detail__row']}
         />
         <InfoRow
            title="شناسه پرداخت:"
            value="2620503195"
            className={styles['payment-detail__row']}
         />
         <InfoRow
            title="مبلغ پرداخت شده:"
            value="2620503195"
            className={styles['payment-detail__row']}
         />
         <InfoRow
            title="زمان پرداخت:"
            value="2620503195"
            className={styles['payment-detail__row']}
         />
         <InfoRow
            title="کد پیگیری:"
            value="2620503195"
            className={styles['payment-detail__row']}
         />
      </>
   );
};

export default PaymentDetail;
