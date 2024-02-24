import React, { useState, useRef, ChangeEvent, KeyboardEvent } from 'react';
import Input from '../input';

interface SeparatedInputProps {
   numberOfFields: number;
   inputClassName: string;
}

const SeparatedInput: React.FC<SeparatedInputProps> = ({
   numberOfFields,
   inputClassName,
}) => {
   const [codes, setCodes] = useState<string[]>(Array(numberOfFields).fill('')); // State to store codes
   const codeRefs = useRef<HTMLInputElement[]>([]); // Refs to input fields

   // Function to handle changes in input fields
   const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);

      // Move to next input field if value is entered
      if (value && index < codeRefs.current.length - 1) {
         codeRefs.current[index + 1].focus();
      }
   };

   // Function to handle keypress events
   const handleBackspace = (
      index: number,
      e: KeyboardEvent<HTMLInputElement>,
   ) => {
      const isBackspace = e.key === 'Backspace';
      const isFieldEmpty = !codes[index];
      const isNotFirstField = index > 0;

      // Move to previous input field on backspace if current field is empty
      if (isBackspace && isFieldEmpty && isNotFirstField) {
         codeRefs.current[index - 1].focus();
      }
   };
   return (
      <>
         {/* Generate input fields dynamically */}
         {codes.map((code, index) => (
            <Input
               className={inputClassName}
               key={index}
               ref={(ref:any) =>
                  (codeRefs.current[index] = ref as HTMLInputElement)
               }
               type="text"
               maxLength={1}
               value={code}
               onChange={(e) => handleChange(index, e)}
               onKeyDown={(e) => handleBackspace(index, e)}
            />
         ))}
      </>
   );
};

export default SeparatedInput;
