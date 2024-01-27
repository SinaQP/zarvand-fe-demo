import Toast from './toast';
import { sendVerificationCode } from '../../../../apis/login/send-verification-code';

const handleResendCodeClick: Function = async (nationalCode: string) => {
   const response = await sendVerificationCode({ national_code: nationalCode });
   if (response.status === 200)
      Toast.fire({
         icon: 'success',
         title: 'کد با موفقیت برای شما ارسال شد.',
      });
   else {
      const resopnseBody = response.body;
      Toast.fire({
         icon: 'error',
         title: resopnseBody.message,
      });
   }
};

export default handleResendCodeClick;
