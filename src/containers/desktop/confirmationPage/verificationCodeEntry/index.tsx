import { FC, useContext, useState } from 'react';
import Button from '../../button';
import { LoginContext } from '../../../../pages/desktop/login/context';
import handleConfirmationButton from './handleConfirmationButton';
import Form from './Form';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../../../App.context';

const VerificationCodeEntry: FC = () => {
   const { nationalCode, setLoginStage } = useContext(LoginContext);
   const { setSubsystems, setToken, setUser } = useContext(AppContext);
   const [verificationCode, setVerificationCode] = useState('      ');
   const history = useHistory();

   return (
      <div className="verification-code-entry">
         <div className="verification-code-entry__timer">
            <span className="verification-code-entry__counter"></span>
            <span>لطفا کد ارسال شده را وارد نمایید</span>
            <Form
               setVerificationCode={setVerificationCode}
               verificationCode={verificationCode}
            />
            <Button
               className="verification-code-entry__submit-button"
               onClick={() =>
                  handleConfirmationButton({
                     nationalCode,
                     verificationCode,
                     setLoginStage,
                     history,
                     setSubsystems,
                     setToken,
                     setUser,
                  })
               }
            >
               تائید
            </Button>
         </div>
      </div>
   );
};

export default VerificationCodeEntry;
