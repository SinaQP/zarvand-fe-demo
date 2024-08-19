import { Dispatch, SetStateAction, MouseEvent } from 'react';
import Toast from './toast';
import LoginStage from '../../loginStageEnum';
import { sendVerificationCode } from '../../../../../apis/login/send-verification-code';

interface Props {
   event: MouseEvent<HTMLButtonElement>;
   setLoginStage: Dispatch<SetStateAction<LoginStage>>;
   setPhoneNumber: Dispatch<SetStateAction<string>>;
   nationalCode: string;
}

const handleTemporaryCodeRequest = async ({
   setLoginStage,
   nationalCode,
   setPhoneNumber,
}: Props) => {
   let isFormValid = true;
   if (nationalCode.length !== 10) {
      Toast.fire({
         icon: 'error',
         title: 'کدملی خود را به درستی وارد کنید.',
      });
      isFormValid = false;
   }
   if (isFormValid) {
      const response = await sendVerificationCode({
         national_code: nationalCode,
      });
      console.log('response', response);
      if (response.status === 200) {
         setLoginStage(LoginStage.ConfirmationPage);
         const responseBody = response.body;
         const personPhoneNumber = responseBody.masked_mobile_number;
         setPhoneNumber(personPhoneNumber);
      } else {
         Toast.fire({
            icon: 'error',
            title: response.body['message'],
         });
      }
   }
};

export default handleTemporaryCodeRequest;
