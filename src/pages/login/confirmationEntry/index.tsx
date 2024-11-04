import { FC, useEffect, useRef, useState } from 'react';
import Button from '../../../components/button';
import OtpInput from '../../../components/otpInput';
import styles from './index.module.scss';
import handleConfirmationButton from './functions/submit';
import { useNavigate } from 'react-router-dom';
import { useLayoutContext } from '../../../components/layout/layout.context';
import { useUserContext } from '../../../App.context';
import useWindowWidth from '../../../hooks/useWindowWidth';

const ConfirmationEntry: FC = () => {
   const navigate = useNavigate();
   const isMobile = useWindowWidth(false, true);
   const [otpCode, setOtpCode] = useState<string[]>([]);
   const [consoles, setConsole] = useState('');
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
   const handleOtpRetrieval = () => {
      const ac = new AbortController();
      navigator.credentials
         .get({
            otp: { transport: ['sms'] },
            signal: ac.signal,
         } as CredentialRequestOptions)
         .then((otp:any) => {
            alert(`got otp from client===>${otp?.code}`);
            setConsole(otp ? otp?.code.toString(): "")
         })
         .catch((err) => {
            alert(`err: ${err}`);
         });
   };
   useEffect(() => {
      if ('OTPCredential' in window) {
         handleOtpRetrieval()
      }
   }, []);

   useEffect(() => {
      setHeaderId?.(styles['header']);
   }, [setHeaderId]);

   return (
      <div className={styles['confirmation-entry']}>
         {!isMobile && (
            <span className={styles['confirmation-entry__title']}>
               سامانه هوشمند شهروندی
               {otpCode}
            </span>
         )}
         <form className={styles.form}>
            {consoles}
            <span>
               لطفا کد ارسال شده به شماره
               {` ${maskedPhoneNumber.slice(8)}****${maskedPhoneNumber.slice(
                  0,
                  4,
               )}`}
               را وارد نمایید
            </span>
            {otpCode}
            <OtpInput
               numberOfInputs={6}
               value={otpCode}
               setValue={setOtpCode}
               otpClassName={styles['otp-input']}
               inputsClassName={styles.input}
            />
            {consoles}
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
            {consoles}
         </form>
      </div>
   );
};

export default ConfirmationEntry;
// useEffect(() => {
//    if ('OTPCredential' in window) {
//       const ac = new AbortController();

//       navigator.credentials
//          .get({
//             otp: { transport: ['sms'] },
//             signal: ac.signal,
//          } as CredentialRequestOptions)
//          .then((otp: any) => {
//             if (otp?.code) {
//                const codeArray = otp.code.split('');
//                setOtpCode(codeArray);
//             } else {
//                console.log('Failed to retrieve OTP. Please try again.');
//             }
//          })
//          .catch((err) => {
//             console.log(err);
//          });
//    }
// }, []);