import { Dispatch, SetStateAction } from 'react';
import { User } from '../../../../../App.context';
import { validateSmsCode } from '../../../../../apis/login/validate-sms-code';
import Toast from '../nationalCodeSection/toast';

interface Props {
   verificationCode: string;
   nationalCode: string;
   history: { push: (url: string) => void };
   setToken: Dispatch<SetStateAction<string>>;
   setUser: Dispatch<SetStateAction<User | null>>;
}

const handleConfirmationButton: Function = async ({
   verificationCode,
   nationalCode,
   history,
   setToken,
   setUser,
}: Props) => {
   const response = await validateSmsCode({
      national_code: nationalCode,
      code: verificationCode,
   });
   const responseBody = response.body;
   if (response.status === 200) {
      setToken(responseBody.token);
      setUser(responseBody.user);
      history.push('subsystem');
   } else {
      Toast.fire({
         icon: 'error',
         title: responseBody['message'],
      });
   }
};

export default handleConfirmationButton;
