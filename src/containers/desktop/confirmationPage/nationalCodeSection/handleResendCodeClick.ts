import Toast from './toast';
import { sendVerificationCode } from '../../../../apis/login/send-verification-code';
import { Dispatch, SetStateAction } from 'react';
import { setTimer } from '../functions/setTimer';

const handleResendCodeClick: Function = async (
   nationalCode: string,
   setTimerDuration: Dispatch<SetStateAction<number>>,
   setTimerInterval: Dispatch<SetStateAction<NodeJS.Timer | null>>,
) => {
   const response = await sendVerificationCode({ national_code: nationalCode });
   if (response.status === 200) {
      setTimer(120, setTimerDuration);
      setTimerInterval(null);
      Toast.fire({
         icon: 'success',
         title: 'کد با موفقیت برای شما ارسال شد.',
      });
   } else {
      const resopnseBody = response.body;
      Toast.fire({
         icon: 'error',
         title: resopnseBody.message,
      });
   }
};

export default handleResendCodeClick;
