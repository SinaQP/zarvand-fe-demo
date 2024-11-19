import {
   Dispatch,
   FC,
   SetStateAction,
   useEffect,
   useRef,
   useState,
} from 'react';
import Button from '../../../components/button';
import OtpInput from '../../../components/otpInput';
import styles from './index.module.scss';
import handleConfirmationButton from './functions/submit';
import { useNavigate } from 'react-router-dom';
import { useLayoutContext } from '../../../components/layout/layout.context';
import { useUserContext } from '../../../App.context';
import useWindowWidth from '../../../hooks/useWindowWidth';
import { EntryType } from '../index.interface';

const ConfirmationEntry: FC<{
   setSelectedEntry: Dispatch<SetStateAction<EntryType>>;
   setShowConfirmationForm: Dispatch<SetStateAction<boolean>>;
}> = ({ setSelectedEntry, setShowConfirmationForm }) => {
   const navigate = useNavigate();
   const isMobile = useWindowWidth(false, true);
   const [otpCode, setOtpCode] = useState<string[]>([]);
   const { setUser, setToken } = useUserContext();
   const {
      maskedPhoneNumber,
      nationalCode,
      setHeaderId,
      setBadgeId,
      setExtraHeaderContent,
      setHeaderBadge,
      setHeaderText,
   } = useLayoutContext();
   const afterOtpRef = useRef<HTMLButtonElement>(null);

   useEffect(() => {
      const button = document.getElementById('otpButtonRef');
      if (otpCode.join('').length === 6) button?.click();
   });

   useEffect(() => {
      setHeaderId?.(styles['header']);
   }, [setHeaderId]);

   return (
      <div className={styles['confirmation-entry']}>
         {!isMobile && (
            <h4 className={styles['confirmation-entry__title']}>
               سامانه هوشمند شهروندی
            </h4>
         )}
         <form className={styles.form}>
            <h4>
               لطفا کد ارسال شده به شماره
               {` ${maskedPhoneNumber.slice(8)}****${maskedPhoneNumber.slice(
                  0,
                  4,
               )}`}
               را وارد نمایید
            </h4>
            <OtpInput
               isOtp={isMobile}
               numberOfInputs={6}
               value={otpCode}
               setValue={setOtpCode}
               otpClassName={styles['otp-input']}
               inputsClassName={styles.input}
            />
            <p
               className={styles['confirmation-entry__link']}
               onClick={() => {
                  setShowConfirmationForm(false);
                  setSelectedEntry(EntryType.CHANGE_PHONE_NUMBER);
               }}
            >
               تغییر شماره تماس
            </p>
            <Button
               className={styles['submit-button']}
               haveLoading
               ref={afterOtpRef}
               id="otpButtonRef"
               type="button"
               loadingType="secondaryToBlack"
               onClick={async () =>
                  await handleConfirmationButton({
                     verificationCode: otpCode.join(''),
                     nationalCode: nationalCode.join(''),
                     navigate,
                     setToken,
                     setUser,
                     setHeaderId,
                     setBadgeId,
                     setExtraHeaderContent,
                     setHeaderBadge,
                     setHeaderText,
                  })
               }
            >
               ورود
            </Button>
         </form>
      </div>
   );
};

export default ConfirmationEntry;
