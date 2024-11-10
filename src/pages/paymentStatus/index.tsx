import Lottie from 'react-lottie';
import PaymentResult from './components/PaymentResult';
import paymentStatusAnimation from '../../assets/lottie/payment-status-animation.json';
import styles from './PaymentStatus.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../App.context';
import { useEffect } from 'react';
import welcomeBack from './func/welcomeBack';
import { useLayoutContext } from '../../components/layout/layout.context';

const PaymentStatus = () => {
   const defaultOptions = (animationData: any) => ({
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
         preserveAspectRatio: 'xMidYMid slice',
      },
   });
   const { token, setToken, setUser } = useUserContext();
   const { setHeaderId } = useLayoutContext();
   const zarToken = sessionStorage.getItem('zarToken');
   const navigate = useNavigate();

   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const status = queryParams.get('status');

   useEffect(() => {
      setHeaderId?.(styles['header']);
      !token && welcomeBack(navigate, zarToken, setToken, setUser);
   }, []);

   return (
      <div id={styles.paymentStatusStyleWrapper}>
         <PaymentResult status={Number(status) === 0 ? 'fail' : 'success'} />
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
