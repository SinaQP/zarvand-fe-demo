import {
   ChangeEvent,
   Dispatch,
   FC,
   KeyboardEvent,
   SetStateAction,
   useEffect,
   useRef,
   useState,
} from 'react';
import Input from '../../../../../componnents/input';
import inputOnFocus from '../../../../../componnents/input/inputOnFocus';
import moveToPriviousInput from '../../../../../componnents/input/moveToPreviousInput';
import moveToNextInput from '../../../../../componnents/input/moveToNextInput';
import focusOnFirstVeificationCodeEntry from './focusOnFirstVeificationCodeEntry';
import SeparatedInput from '../../../../../componnents/speratedInput';

interface Props {
   verificationCode: string;
   setVerificationCode: Dispatch<SetStateAction<string>>;
}

const Form: FC<Props> = ({ setVerificationCode, verificationCode }) => {
   useEffect(() => {
      focusOnFirstVeificationCodeEntry();
   }, []);

   return (
      <form>
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
               onChange={(event) => {
                  setVerificationCode((prevState) => {
                     let newVerificationCode =
                        prevState.slice(0, 5) +
                        event.target.value +
                        prevState.slice(5 + 1);
                     return newVerificationCode;
                  });
               }}
               value={verificationCode[5]}
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
               onChange={(event) => {
                  setVerificationCode((prevState) => {
                     let newVerificationCode =
                        prevState.slice(0, 4) +
                        event.target.value +
                        prevState.slice(4 + 1);
                     return newVerificationCode;
                  });
               }}
               value={verificationCode[4]}
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
               onChange={(event) => {
                  setVerificationCode((prevState) => {
                     let newVerificationCode =
                        prevState.slice(0, 3) +
                        event.target.value +
                        prevState.slice(3 + 1);
                     return newVerificationCode;
                  });
               }}
               value={verificationCode[3]}
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
               onChange={(event) => {
                  setVerificationCode((prevState) => {
                     let newVerificationCode =
                        prevState.slice(0, 2) +
                        event.target.value +
                        prevState.slice(2 + 1);
                     return newVerificationCode;
                  });
               }}
               value={verificationCode[2]}
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
               onChange={(event) => {
                  setVerificationCode((prevState) => {
                     let newVerificationCode =
                        prevState.slice(0, 1) +
                        event.target.value +
                        prevState.slice(1 + 1);
                     return newVerificationCode;
                  });
               }}
               value={verificationCode[1]}
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
               onChange={(event) => {
                  setVerificationCode((prevState) => {
                     let newVerificationCode =
                        event.target.value + prevState.slice(1);
                     return newVerificationCode;
                  });
               }}
               value={verificationCode[0]}
            />
         </div>
      </form>
   );
};

export default Form;
