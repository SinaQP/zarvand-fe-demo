import Lottie from 'react-lottie';
import PaymentResult from './components/PaymentResult';
import paymentStatusAnimation from '../../assets/lottie/payment-status-animation.json';
import styles from './PaymentStatus.module.scss';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const PaymentStatus = () => {
   const defaultOptions = (animationData: any) => ({
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
         preserveAspectRatio: 'xMidYMid slice',
      },
   });
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const testVal = queryParams.get('test');

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
