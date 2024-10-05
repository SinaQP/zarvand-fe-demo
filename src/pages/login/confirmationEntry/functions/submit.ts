import { Dispatch, SetStateAction } from 'react';
import { validateSmsCode } from '../../../../apis/login/validate-sms-code';
import { User } from '../../../../App.context';

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
   console.log(nationalCode, verificationCode);
   const response = await validateSmsCode({
      national_code: nationalCode,
      code: verificationCode,
   });
   const responseBody = response.body;
   if (response.status === 200) {
      setToken(responseBody.token);
      setUser(responseBody.user);
      history.push('home');
   }
};

export default handleConfirmationButton;
