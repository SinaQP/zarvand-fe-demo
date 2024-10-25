import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import styles from './index.module.scss';
import Button from '../../../components/button';
import OtpInput from '../../../components/otpInput';
import handleSubmit from './functions/submit';
import { useLayoutContext } from '../../../components/layout/layout.context';

interface Props {
   setShowConfirmationForm: Dispatch<SetStateAction<boolean>>;
   showConfirmationForm: boolean;
}

const NationalCodeEntry: FC<Props> = ({
   setShowConfirmationForm,
   showConfirmationForm,
}) => {
   const { setMaskedPhoneNumber, nationalCode, setNationalCode } =
      useLayoutContext();

   useEffect(() => {
      const loginBtn = document.getElementById('loginBtn') as HTMLButtonElement;
      nationalCode.join('').length === 10 && loginBtn?.click();
   }, [nationalCode]);

   return (
      <div
         className={`${styles['national-code-entry']} ${
            showConfirmationForm && styles.hidden
         }`}
      >
         <span>لطفا کد ملی خود را وارد نمایید.</span>
         <OtpInput
            otpClassName={styles['otp-input']}
            numberOfInputs={10}
            value={nationalCode}
            setValue={setNationalCode}
            inputsClassName={styles.input}
         />
         <Button
            className={styles['submit-button']}
            haveLoading
            id="loginBtn"
            onClick={async () =>
               await handleSubmit(
                  setShowConfirmationForm,
                  nationalCode,
                  setMaskedPhoneNumber,
               )
            }
         >
            تایید
         </Button>
      </div>
   );
};

export default NationalCodeEntry;
