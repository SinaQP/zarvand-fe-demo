import { Dispatch, FC, SetStateAction, useState } from 'react';
import styles from './index.module.scss';
import { NewButton as Button } from '../../../components/button';
import OtpInput from '../../../components/otpInput';

interface Props {
   setShowConfirmationForm: Dispatch<SetStateAction<boolean>>;
}

const NationalCodeEntry: FC<Props> = ({ setShowConfirmationForm }) => {
   const [nationalCode, setNationalCode] = useState<string[]>([]);
   return (
      <div className={styles['national-code-entry']}>
         <span>لطفا کد ملی خود را وارد کنید.</span>
         <OtpInput otpClassName={styles['otp-input']} numberOfInputs={10} value={nationalCode}
                   setValue={setNationalCode} inputsClassName={styles.input} />
         <Button className={styles['submit-button']} onClick={() => setShowConfirmationForm(true)}>تایید</Button>
      </div>
   );
};

export default NationalCodeEntry;
