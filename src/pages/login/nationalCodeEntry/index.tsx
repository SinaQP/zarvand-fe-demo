import { FC, useState } from 'react';
import styles from './index.module.scss';
import { NewButton as Button } from '../../../components/button';
import OtpInput from '../../../components/otpInput';

const NationalCodeEntry: FC = () => {
   const [nationalCode, setNationalCode] = useState<string[]>([]);
   const handleButtonClick = async () => {
      // Simulate an API call or action
      return new Promise((resolve) => setTimeout(resolve, 2000));
   };
   return (
      <div className={styles['national-code-entry']}>
         <span>لطفا کد ملی خود را وارد کنید.</span>
         <OtpInput otpClassName={styles['otp-input']} numberOfInputs={10} value={nationalCode}
                   setValue={setNationalCode} inputsClassName={styles.input} />
         <Button className={styles['submit-button']} onClick={handleButtonClick}>تایید</Button>
      </div>
   );
};

export default NationalCodeEntry;
