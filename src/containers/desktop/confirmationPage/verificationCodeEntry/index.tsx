import { FC, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../button';
import { LoginContext } from '../../../../pages/desktop/login/context';
import handleConfirmationButton from './handleConfirmationButton';
import Form from './Form';
import { AppContext } from '../../../../App.context';
import { Props } from './index.interface';
import Timer from '../../../../componnents/timer';

const VerificationCodeEntry: FC<Props> = ({
   setTimerDuration,
   timerDuration,
   setTimerIntervalLoop,
   timerIntervalLoop,
}) => {
   const { nationalCode, setLoginStage } = useContext(LoginContext);
   const { setSubsystems, setToken, setUser } = useContext(AppContext);
   const [verificationCode, setVerificationCode] = useState('      ');
   const history = useHistory();

   return (
      <div className="verification-code-entry">
         <Timer
            setTimerDuration={setTimerDuration}
            timerDuration={timerDuration}
            setTimerIntervalLoop={setTimerIntervalLoop}
            timerIntervalLoop={timerIntervalLoop}
         >
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
         </Timer>
      </div>
   );
};

export default VerificationCodeEntry;
