import { FC, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../button';
import { LoginContext } from '../../../../pages/desktop/login/context';
import handleConfirmationButton from './handleConfirmationButton';
import Form from './Form';
import { AppContext } from '../../../../App.context';
import { Props } from './index.interface';

const VerificationCodeEntry: FC<Props> = ({
   setTimerDuration,
   timerDuration,
}) => {
   const { nationalCode, setLoginStage } = useContext(LoginContext);
   const { setSubsystems, setToken, setUser } = useContext(AppContext);
   const [verificationCode, setVerificationCode] = useState('      ');
   const history = useHistory();

   useEffect(() => {
      const progressBar: HTMLDivElement = document.getElementById(
         'progress-bar',
      )! as HTMLDivElement;
      const counter: HTMLSpanElement = document.getElementById(
         'counter',
      )! as HTMLSpanElement;
      let remainingTime: number = timerDuration;
      let remainingPercentage: number;
      const timerInterval = setInterval(() => {
         remainingTime -= 1;
         remainingPercentage = (remainingTime * 100) / timerDuration;
         counter.style.transform = `rotate(${
            (100 - remainingPercentage) * 3.6
         }deg)`;
         progressBar.style.background = `conic-gradient(#E3FE55 ${
            (100 - remainingPercentage) * 3.6
         }deg, #EBF5F8 0deg)`;
         if (remainingTime <= 0) {
            progressBar.style.background = `conic-gradient(#E3FE55 0deg, #EBF5F8 0deg) `;
            clearInterval(timerInterval);
            setTimerDuration(0);
         }
      }, 1000);
   }, [timerDuration]);
   return (
      <div className="verification-code-entry">
         <div className="verification-code-entry__timer">
            <div
               className="verification-code-entry__progress-bar"
               id="progress-bar"
            ></div>
            <span
               className="verification-code-entry__counter"
               id="counter"
            ></span>
            <span className="verification-code-entry__title">
               لطفا کد ارسال شده را وارد نمایید
            </span>
            <Form
               setVerificationCode={setVerificationCode}
               verificationCode={verificationCode}
            />
            <Button
               className="verification-code-entry__submit-button"
               onClick={() => {
                  handleConfirmationButton({
                     nationalCode,
                     verificationCode,
                     setLoginStage,
                     history,
                     setSubsystems,
                     setToken,
                     setUser,
                  });
               }}
            >
               تائید
            </Button>
         </div>
      </div>
   );
};

export default VerificationCodeEntry;
