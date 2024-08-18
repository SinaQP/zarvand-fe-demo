import { FC, useRef, useState } from 'react';
import { Props } from './props.interface';
import { handleChange, handleKeyDown } from './handlers.function';
import './_index.scss';

const OtpInput: FC<Props> = ({
   inputsClassName,
   numberOfInputs,
   value,
   setValue,
}) => {
   const [otp, setOtp] = useState(new Array(numberOfInputs).fill(''));
   const inputRefs = useRef<HTMLInputElement[]>([]);
   return (
      <div className="otp-container">
         {otp.map((data, index) => (
            <input
               key={index}
               type="text"
               maxLength={1}
               value={data}
               onChange={(e) =>
                  handleChange(e.target, index, otp, setOtp, value, setValue)
               }
               onKeyDown={(e) =>
                  handleKeyDown(e, index, otp, setOtp, inputRefs)
               }
               ref={(el) => (inputRefs.current[index] = el!)}
               className={`otp-input ${inputsClassName}`}
            />
         ))}
      </div>
   );
};

export default OtpInput;
