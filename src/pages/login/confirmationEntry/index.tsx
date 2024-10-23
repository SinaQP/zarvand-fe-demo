import { FC, useEffect, useRef, useState } from 'react';
import Button from '../../../components/button';
import OtpInput from '../../../components/otpInput';
import styles from './index.module.scss';
import handleConfirmationButton from './functions/submit';
import { useNavigate } from 'react-router-dom';
import { useLayoutContext } from '../../../components/layout/layout.context';
import { useUserContext } from '../../../App.context';

const ConfirmationEntry: FC = () => {
   const navigate = useNavigate();
   const [otpCode, setOtpCode] = useState<string[]>([]);
   const { setUser, setToken } = useUserContext();
   const {
      maskedPhoneNumber,
      nationalCode,
      setHeaderId,
      setBadgeId,
      setExtraHeaderContent,
      setHeaderBadge,
      setHeaderText,
   } = useLayoutContext();
   const afterOtpRef = useRef<HTMLButtonElement>(null);

   // useEffect(() => {
   //    const button = document.getElementById('otpButtonRef');
   //    if (otpCode.length === 6) button?.click();
   // });

   useEffect(() => {
      if ('OTPCredential' in window) {
         const ac = new AbortController();

         console.log('test');
         navigator.credentials
            .get({
               otp: { transport: ['sms'] },
               signal: ac.signal,
            } as CredentialRequestOptions)
            .then((otp: any) => {
               if (otp?.code) {
                  // Convert OTP code to array of strings
                  const codeArray = otp.code.split('');
                  setOtpCode(codeArray); // Save the array of characters in state
               } else {
                  console.log('Failed to retrieve OTP. Please try again.');
               }
            })
            .catch((err) => {
               console.log(err);
            })
            .finally(() => {
               console.log('test');
            });
      }
   }, []);

   useEffect(() => {
      setHeaderId?.(styles['header']);
   }, [setHeaderId]);

   return (
      <form className={styles.form}>
         <span>
            لطفا کد ارسال شده به شماره
            {` ${maskedPhoneNumber.slice(8)}****${maskedPhoneNumber.slice(
               0,
               4,
            )}`}
            را وارد نمایید
         </span>
         <OtpInput
            numberOfInputs={6}
            value={otpCode}
            setValue={setOtpCode}
            otpClassName={styles['otp-input']}
            inputsClassName={styles.input}
         />
         <Button
            className={styles['submit-button']}
            haveLoading
            ref={afterOtpRef}
            id="otpButtonRef"
            type="button"
            onClick={async () =>
               await handleConfirmationButton({
                  verificationCode: otpCode.join(''),
                  nationalCode: nationalCode.join(''),
                  navigate,
                  setToken,
                  setUser,
                  setHeaderId,
                  setBadgeId,
                  setExtraHeaderContent,
                  setHeaderBadge,
                  setHeaderText,
               })
            }
         >
            ورود
         </Button>
      </form>
   );
};

export default ConfirmationEntry;
