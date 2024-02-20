import { Dispatch, SetStateAction } from 'react';
import { validateSmsCode } from '../../../../apis/login/validate-sms-code';
import Toast from '../../../../utilities/toast';
import { SubSystem, User } from '../../../../App.context';
interface Props {
   verificationCode: string;
   nationalCode: string;
   history: { push: (url: string) => void };
   setToken: Dispatch<SetStateAction<string>>;
   setUser: Dispatch<SetStateAction<User | null>>;
   setSubsystems: Dispatch<SetStateAction<SubSystem[]>>;
}

const handleConfirmationButton: Function = async ({
   verificationCode,
   nationalCode,
   history,
   setSubsystems,
   setToken,
   setUser,
}: Props) => {
   const response = await validateSmsCode({
      national_code: nationalCode,
      code: verificationCode,
   });
   const responseBody = response.body;

   if (response.status === 200) {
      setToken(responseBody.token)
      setUser(responseBody.user)
      setSubsystems(responseBody.subsystems)
      history.push('subsystem');
   } else {
      Toast.fire({
         icon: 'error',
         title: responseBody['message'],
      });
   }
};

export default handleConfirmationButton;
