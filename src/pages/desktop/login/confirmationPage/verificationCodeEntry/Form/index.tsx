import {
   Dispatch,
   FC,
   SetStateAction,
   useEffect,
} from 'react';
import focusOnFirstVeificationCodeEntry from './focusOnFirstVeificationCodeEntry';
import moveToPriviousInput from '../../../../../../componnents/input/functions/moveToPreviousInput';
import inputOnFocus from '../../../../../../componnents/input/functions/inputOnFocus';
import Input from '../../../../../../componnents/input';
import moveToNextInput from '../../../../../../componnents/input/functions/moveToNextInput';
import OtpInput from '../../../../../../componnents/otpInput';

interface Props {
   verificationCode: string[];
   setVerificationCode: Dispatch<SetStateAction<string[]>>;
}

const Form: FC<Props> = ({ setVerificationCode, verificationCode }) => {
   useEffect(() => {
      focusOnFirstVeificationCodeEntry();
   }, []);

   return (
      <form>
         <div className="verification-code-entry__sperated-input">
            <OtpInput
               numberOfInputs={6}
               inputsClassName="verification-code-entry__input"
               value={verificationCode}
               setValue={setVerificationCode}
            />
         </div>
      </form>
   );
};

export default Form;
