import { FC, useState } from 'react';
import Button from '../../../components/button';
import OtpInput from '../../../components/otpInput';
import styles from './index.module.scss';

const PhoneNumberEntry: FC<{ headingText: string }> = ({ headingText }) => {
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
         <span>تغییر کد ملی</span>
         <Button className={styles['submit-button']}>تایید</Button>
      </div>
   );
};

export default PhoneNumberEntry;
