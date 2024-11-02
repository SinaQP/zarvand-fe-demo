import Lottie from 'react-lottie';
import PaymentResult from './components/PaymentResult';
import paymentStatusAnimation from '../../assets/lottie/payment-status-animation.json';
import styles from './PaymentStatus.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../App.context';
import { useEffect } from 'react';
import { postRefreshUserToken } from '../../apis/login/refresh-user-token';
import { FetchResult } from '../../apis/fetch.interface';

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
   const { token, setToken } = useUserContext();
   const zarToken = localStorage.getItem('zarToken');
   const navigate = useNavigate();

   useEffect(() => {
      const refreshUserToken = async () => {
         if (!zarToken) return navigate('/login');

         const result = await postRefreshUserToken({ refresh_token: zarToken });
         const { body, status } = result as FetchResult;

         if (status === 200) {
            setToken(body.access_token);
         } else {
            setToken('');
            navigate('/login');
            localStorage.removeItem('zarToken');
         }
      };

      !token && refreshUserToken();
   }, []);

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
