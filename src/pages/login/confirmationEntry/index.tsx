import { FC, useContext, useState } from 'react';
import Button from '../../../components/button';
import OtpInput from '../../../components/otpInput';
import styles from './index.module.scss';
import { LoginContext } from '../context';
import handleConfirmationButton from './functions/submit';
import { AppContext } from '../../../App.context';
import { useHistory } from 'react-router-dom';

const ConfirmationEntry: FC = () => {
   const history = useHistory();
   const [otpCode, setOtpCode] = useState<string[]>([]);
   const { phoneNumber, nationalCode } =
      useContext(LoginContext);
   const { setUser, setToken } =
      useContext(AppContext);

   return <form className={styles.form}>
      <span>لطفا کد ارسال شده به  شماره {`${phoneNumber.slice(8)}****${phoneNumber.slice(0, 4)}`} را وارد کنید </span>
      <OtpInput numberOfInputs={6} value={otpCode} setValue={setOtpCode} otpClassName={styles['otp-input']}
                inputsClassName={styles.input} />
      <Button className={styles['submit-button']}
              haveLoading
              onClick={async () => await handleConfirmationButton({
                 verificationCode: otpCode.join(''),
                 nationalCode: nationalCode.join(''),
                 history,
                 setToken,
                 setUser,
              })}>ورود</Button>

   </form>;
};

export default ConfirmationEntry;