import { FC } from 'react';
import './PaymentResult.scss';
import { PaymentResultProps } from './interface';
import whiteCheckIcon from '/src/assets/images/whiteCheckIcon.svg';
import whiteXIcon from '/src/assets/images/whiteXIcon.svg';
import playPauseIcon from '/src/assets/images/playPauseIcon.svg';
import Button from '../../../../components/button';

const PaymentResult: FC<PaymentResultProps> = ({ status }) => {
   const isSuccessful = status === 'success';
   const title = isSuccessful
      ? 'با موفقیت پرداخت انجام شد'
      : 'پرداخت موفقیت آمیز نبود';
   const subTitle = 'برای ادامه روی دکمه زیر کلید کنید';

   return (
      <div
         id="PaymentResultStyleWrapper"
         className={`${isSuccessful ? 'success' : 'fail'}`}
      >
         <div id="resultStatTitle">
            <img
               src={isSuccessful ? whiteCheckIcon : whiteXIcon}
               alt="paymentStatus"
            />
         </div>

         <span id="title">{title}</span>
         <span id="subTitle">{subTitle}</span>

         <Button className="continueBtn">
            <div className="content">
               <span>ادامه</span>
               <img src={playPauseIcon} alt="exit to main page Icon" />
            </div>
         </Button>
      </div>
   );
};

export default PaymentResult;
