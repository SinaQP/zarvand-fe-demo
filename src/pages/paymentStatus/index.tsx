import Lottie from 'react-lottie';
import PaymentResult from './components/PaymentResult';
import paymentStatusAnimation from '../../assets/lottie/payment-status-animation.json';
import styles from './PaymentStatus.module.scss';

const PaymentStatus = () => {
   const defaultOptions = (animationData: any) => ({
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
         preserveAspectRatio: 'xMidYMid slice',
      },
   });

   return (
      <div id={styles.paymentStatusStyleWrapper}>
         <PaymentResult status="success" />
         <Lottie
            options={defaultOptions(paymentStatusAnimation)}
            speed={1}
            width={250}
            height={250}
         />
      </div>
   );
};

export default PaymentStatus;
