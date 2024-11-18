import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import styles from './index.module.scss';
import Button from '../../../components/button';
import OtpInput from '../../../components/otpInput';
import handleSubmit from './functions/submit';
import { useLayoutContext } from '../../../components/layout/layout.context';
import { EntryType } from '../index.interface';

interface Props {
   setShowConfirmationForm: Dispatch<SetStateAction<boolean>>;
   showConfirmationForm: boolean;
   setSelectedEntry: Dispatch<SetStateAction<EntryType>>;
   type: 'Person' | 'Organization';
}

const NationalCodeEntry: FC<Props> = ({
   setShowConfirmationForm,
   showConfirmationForm,
   type,
   setSelectedEntry,
}) => {
   const { setMaskedPhoneNumber, nationalCode, setNationalCode } =
      useLayoutContext();

   useEffect(() => {
      const loginBtn = document.getElementById('loginBtn') as HTMLButtonElement;
      nationalCode.join('').length === 10 && loginBtn?.click();
   }, [nationalCode]);

   const getHeadingText = () =>
      type === 'Person'
         ? 'لطفا کد ملی خود را وارد نمایید.'
         : 'لطفا شناسه ملی  را وارد کنید';

   return (
      <div
         className={`${styles['national-code-entry']} ${
            showConfirmationForm && styles.hidden
         } ${
            type === 'Organization' &&
            styles['national-code-entry--organization']
         }`}
      >
         <h4>{getHeadingText()}</h4>
         <OtpInput
            otpClassName={styles['otp-input']}
            numberOfInputs={10}
            value={nationalCode}
            setValue={setNationalCode}
            inputsClassName={styles.input}
         />
         {/* 
            Organization Stage
            <p className={styles['national-code-entry__link']}>
               ورود به عنوان شخص حقوقی؟{' '}
               <span className={styles['national-code-entry__text-link']}>
                  اینجا کلیک کنید.
               </span>
            </p> 
         */}
         <Button
            className={styles['submit-button']}
            haveLoading
            id="loginBtn"
            onClick={async () =>
               await handleSubmit(
                  setShowConfirmationForm,
                  nationalCode,
                  setSelectedEntry,
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
