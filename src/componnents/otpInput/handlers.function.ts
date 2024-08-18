import { Dispatch, KeyboardEvent, SetStateAction } from 'react';

export const handleChange = (
   element: HTMLInputElement,
   index: number,
   otp: any[],
   setOtp: Dispatch<SetStateAction<any[]>>,
   stateValue: any[],
   setStateValue: Dispatch<SetStateAction<any[]>>,
) => {
   const value = element.value;
   const isValueNotNumber = isNaN(Number(value));
   if (isValueNotNumber) return;

   const newOtp = [...otp];
   const newValue = [...stateValue];
   newOtp[index] = value;
   newValue[index] = value

   setOtp(newOtp);
   setStateValue(newValue);

   const nextElement = element.nextSibling as HTMLInputElement;
   if (nextElement) {
      nextElement.focus();
   }
};

export const handleKeyDown = (
   event: KeyboardEvent<HTMLInputElement>,
   index: number,
   otp: any[],
   setOtp: Dispatch<SetStateAction<any[]>>,
   inputRefs: React.MutableRefObject<HTMLInputElement[]>,
) => {
   if (event.key !== 'Backspace') return;

   const newOtp = [...otp];
   const isCurrentInputFilled = otp[index] !== '';
   const isNotFirstInput = index > 0;
   const previousIndex = index - 1;

   if (isCurrentInputFilled) {
      newOtp[index] = '';
   } else if (isNotFirstInput) {
      const previousInput = inputRefs.current[previousIndex];
      previousInput.focus();
      newOtp[previousIndex] = '';
   }

   setOtp(newOtp);
};
