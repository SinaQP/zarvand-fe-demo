import { Dispatch, FC, SetStateAction, useState } from 'react';
import Button from '../../../components/button';
import OtpInput from '../../../components/otpInput';
import styles from './index.module.scss';
import { EntryType } from '../index.interface';
import { useLayoutContext } from '../../../components/layout/layout.context';
import formSubmit from './submit.function';

const PhoneNumberEntry: FC<{
   headingText: string;
   setSelectedEntry: Dispatch<SetStateAction<EntryType>>;
   setShowConfirmationForm: Dispatch<SetStateAction<boolean>>;
}> = ({ headingText, setSelectedEntry, setShowConfirmationForm }) => {
   const { nationalCode, setNationalCode, setMaskedPhoneNumber } =
      useLayoutContext();
   const [phoneNumber, setPhoneNumber] = useState<string[]>([]);

   return (
      <div className={styles['phone-number-entry']}>
         <h4>{headingText}</h4>
         <OtpInput
            numberOfInputs={11}
            value={phoneNumber}
            setValue={setPhoneNumber}
            otpClassName={styles['otp-input']}
            inputsClassName={styles.input}
         />
         <span
            onClick={() => {
               setNationalCode([]);
               setSelectedEntry(EntryType.NATIONAL_CODE_ENTRY);
            }}
         >
            تغییر کد ملی
         </span>
         <Button
            className={styles['submit-button']}
            onClick={() =>
               formSubmit(
                  phoneNumber.join(''),
                  nationalCode.join(''),
                  setShowConfirmationForm,
                  setMaskedPhoneNumber,
               )
            }
         >
            تایید
         </Button>
      </div>
   );
};

export default PhoneNumberEntry;
