import { FC, useState } from 'react';
import { NewButton as Button } from '../../../components/button';
import OtpInput from '../../../components/otpInput';
import styles from './index.module.scss';

const ConfirmationEntry: FC = () => {
   const [otpCode, setOtpCode] = useState<string[]>([]);
   return <form className={styles.form}>
      <span>لطفا کد ارسال شده به  شماره 2822****0991 را وارد کنید </span>
      <OtpInput numberOfInputs={6} value={otpCode} setValue={setOtpCode} otpClassName={styles['otp-input']}
                inputsClassName={styles.input} />
      <Button className={styles['submit-button']}>ورود</Button>
   </form>;
};

export default ConfirmationEntry;