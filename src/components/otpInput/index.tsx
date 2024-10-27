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
}) => {
   const [otp, setOtp] = useState(new Array(numberOfInputs).fill(''));
   const inputRefs = useRef<HTMLInputElement[]>([]);

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
