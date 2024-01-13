import { FC, useContext } from 'react';
import Input from '../../../../componnents/input';
import Button from '../../button';
import moveToNextInput from './moveToNextInput';
import inputOnFocus from './inputOnFocus';
import LoginStage from '../../../../pages/desktop/login/loginStageEnum';
import { LoginContext } from '../../../../pages/desktop/login/context';
import moveToPriviousInput from './moveToPreviousInput';

const VerificationCodeEntry: FC = () => {
   const { setLoginStage } = useContext(LoginContext);
   return (
      <div className="verification-code-entry">
         <div className="verification-code-entry__timer">
            <span className="verification-code-entry__counter"></span>
            <span>لطفا کد ارسال شده را وارد نمایید</span>
            <div className="verification-code-entry__sperated-input">
               <Input
                  className="verification-code-entry__input"
                  tabIndex={6}
                  maxLength={1}
                  onFocus={(event) => inputOnFocus(event)}
                  id="verification-code-6"
                  onKeyUp={(event) => {
                     moveToPriviousInput(event, 'verification-code-5', true);
                  }}
               />
               <Input
                  className="verification-code-entry__input"
                  tabIndex={5}
                  maxLength={1}
                  onFocus={(event) => inputOnFocus(event)}
                  id="verification-code-5"
                  onKeyUp={(event) => {
                     moveToNextInput(event, 'verification-code-6');
                     moveToPriviousInput(event, 'verification-code-4');
                  }}
               />
               <Input
                  className="verification-code-entry__input"
                  tabIndex={4}
                  maxLength={1}
                  onFocus={(event) => inputOnFocus(event)}
                  id="verification-code-4"
                  onKeyUp={(event) => {
                     moveToNextInput(event, 'verification-code-5');
                     moveToPriviousInput(event, 'verification-code-3');
                  }}
               />
               <Input
                  className="verification-code-entry__input"
                  tabIndex={3}
                  maxLength={1}
                  onFocus={(event) => inputOnFocus(event)}
                  id="verification-code-3"
                  onKeyUp={(event) => {
                     moveToNextInput(event, 'verification-code-4');
                     moveToPriviousInput(event, 'verification-code-2');
                  }}
               />
               <Input
                  className="verification-code-entry__input"
                  tabIndex={2}
                  maxLength={1}
                  id="verification-code-2"
                  onFocus={(event) => inputOnFocus(event)}
                  onKeyUp={(event) => {
                     moveToNextInput(event, 'verification-code-3');
                     moveToPriviousInput(event, 'verification-code-1');
                  }}
               />
               <Input
                  className="verification-code-entry__input"
                  tabIndex={1}
                  maxLength={1}
                  id="verification-code-1"
                  onFocus={(event) => inputOnFocus(event)}
                  onKeyUp={(event) =>
                     moveToNextInput(event, 'verification-code-2')
                  }
               />
            </div>
            <Button
               className="verification-code-entry__submit-button"
               onClick={() => setLoginStage(LoginStage.ConfirmationPage)}
            >
               تائید
            </Button>
         </div>
      </div>
   );
};

export default VerificationCodeEntry;
