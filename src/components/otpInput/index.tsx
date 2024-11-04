import { FC, useEffect, useRef, useState } from 'react';
import { Props } from './props.interface';
import { handleChange, handleKeyDown } from './handlers.function';
import './_index.scss';

const OtpInput: FC<Props> = ({
   inputsClassName,
   numberOfInputs,
   value,
   setValue,
   otpClassName,
   isOtp = false,
}) => {
   const [otp, setOtp] = useState(new Array(numberOfInputs).fill(''));
   const inputRefs = useRef<HTMLInputElement[]>([]);
   const handleOtpRetrieval = () => {
      const ac = new AbortController();
      navigator.credentials
         .get({
            otp: { transport: ['sms'] },
            signal: ac.signal,
         } as CredentialRequestOptions)
         .then((otp: any) => {
            alert(`got otp from client===>${otp.code}`);
            setOtp([...otp.code]);
            setValue([...otp.code])
         })
         .catch((err) => {
            alert(`err: ${err}`);
         });
   };
   useEffect(() => {
      if ('OTPCredential' in window && isOtp) {
         handleOtpRetrieval();
      }
   }, []);
   const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      const pasteData = e.clipboardData.getData('text');
      const newOtp = [...otp];
      for (let i = 0; i < numberOfInputs; i++) {
         if (pasteData[i]) {
            newOtp[i] = pasteData[i];
         }
      }
      setOtp(newOtp);
      setValue(newOtp);
   };

   const handleClick = (index: number) => {
      const areAllEmpty = otp.every((val) => val === '');
      if (areAllEmpty) {
         inputRefs.current[0]?.focus();
      } else {
         inputRefs.current[index]?.focus();
      }
   };
   useEffect(() => {
      inputRefs.current[0]?.focus();
   }, []);

   return (
      <div className={`${otpClassName} otp-container `}>
         {otp.map((data, index) => (
            <input
               key={index}
               type="text"
               autoComplete="one-time-code"
               inputMode="numeric"
               maxLength={1}
               value={data}
               onPaste={handlePaste}
               onChange={(e) =>
                  handleChange(e.target, index, otp, setOtp, value, setValue)
               }
               onKeyDown={(e) =>
                  handleKeyDown(
                     e,
                     index,
                     otp,
                     setOtp,
                     inputRefs,
                     value,
                     setValue,
                  )
               }
               ref={(el) => (inputRefs.current[index] = el!)}
               onClick={() => handleClick(index)}
               className={`otp-input ${inputsClassName}`}
            />
         ))}
      </div>
   );
};

export default OtpInput;
