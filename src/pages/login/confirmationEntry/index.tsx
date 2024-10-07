import { FC, useContext, useEffect, useState } from 'react';
import Button from '../../../components/button';
import OtpInput from '../../../components/otpInput';
import styles from './index.module.scss';
import handleConfirmationButton from './functions/submit';
import { AppContext } from '../../../App.context';
import { useNavigate } from 'react-router-dom';
import { useLayoutContext } from '../../../components/layout/layout.context';

const ConfirmationEntry: FC = () => {
   const navigate = useNavigate();
   const [otpCode, setOtpCode] = useState<string[]>([]);
   const { setUser, setToken } = useContext(AppContext);
   const {
      maskedPhoneNumber,
      nationalCode,
      setHeaderId,
      setBadgeId,
      setExtraHeaderContent,
      setHeaderBadge,
   } = useLayoutContext();

   return (
      <form className={styles.form}>
         <span>
            لطفا کد ارسال شده به شماره
            {`${maskedPhoneNumber.slice(8)}****${maskedPhoneNumber.slice(
               0,
               4,
            )}`}
            را وارد کنید
         </span>
         <OtpInput
            numberOfInputs={6}
            value={otpCode}
            setValue={setOtpCode}
            otpClassName={styles['otp-input']}
            inputsClassName={styles.input}
         />
         <Button
            className={styles['submit-button']}
            haveLoading
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
               })
            }
         >
            ورود
         </Button>
      </form>
   );
};

export default ConfirmationEntry;
