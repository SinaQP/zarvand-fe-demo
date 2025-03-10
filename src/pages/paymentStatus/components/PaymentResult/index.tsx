import { FC } from 'react';
import { PaymentResultProps } from './interface';
import whiteCheckIcon from '/src/assets/images/whiteCheckIcon.svg';
import whiteXIcon from '/src/assets/images/whiteXIcon.svg';
import playPauseIcon from '/src/assets/images/playPauseIcon.svg';
import Button from '../../../../components/button';
import styles from './PaymentResult.module.scss';
import { useNavigate } from 'react-router-dom';
import PaymentDetail from '../paymentDetail';

const PaymentResult: FC<PaymentResultProps> = ({ status }) => {
   const isSuccessful = status === 'success';
   const title = isSuccessful
      ? 'با موفقیت پرداخت انجام شد'
      : 'پرداخت موفقیت آمیز نبود';
   const subTitle = 'برای ادامه روی دکمه زیر کلید نمایید';
   const navigate = useNavigate();

   const handleRedirectToHomeScreen = () => {
      navigate('/');
   };

   return (
      <div
         id={styles.PaymentResultStyleWrapper}
         className={`${isSuccessful ? styles.success : styles.fail}`}
      >
         <div id={styles.resultStatTitle}>
            <img
               src={isSuccessful ? whiteCheckIcon : whiteXIcon}
               alt="paymentStatus"
            />
         </div>

         <span id={styles.title}>{title}</span>
         <span id={styles.subTitle}>{subTitle}</span>
         {isSuccessful && <PaymentDetail />}

         <Button
            className={styles.continueBtn}
            onClick={handleRedirectToHomeScreen}
         >
            <div className={styles.content}>
               <span>ادامه</span>
               <img src={playPauseIcon} alt="exit to main page Icon" />
            </div>
         </Button>
      </div>
   );
};

export default PaymentResult;
