import { Dispatch, ReactNode, SetStateAction } from 'react';
import { validateSmsCode } from '../../../../apis/login/validate-sms-code';
import { NavigateFunction } from 'react-router-dom';
import { toast } from 'react-toastify';
import { User } from '../../../../interfaces/models.interface';

interface Props {
   verificationCode: string;
   nationalCode: string;
   navigate: NavigateFunction;
   setToken: Dispatch<SetStateAction<string>>;
   setHeaderText: Dispatch<SetStateAction<string>>;
   setUser: Dispatch<SetStateAction<User | null>>;
   setHeaderId: Dispatch<SetStateAction<string>>;
   setBadgeId: Dispatch<SetStateAction<string>>;
   setExtraHeaderContent: Dispatch<SetStateAction<ReactNode | null>>;
   setHeaderBadge: Dispatch<SetStateAction<ReactNode | null>>;
}

const handleConfirmationButton: Function = async ({
   verificationCode,
   nationalCode,
   navigate,
   setToken,
   setUser,
   setBadgeId,
   setHeaderId,
   setExtraHeaderContent,
   setHeaderBadge,
   setHeaderText,
}: Props) => {
   const response = await validateSmsCode({
      national_code: nationalCode,
      code: verificationCode,
   });
   const responseBody = response.body;
   if (response.status === 200) {
      setToken(responseBody.token);
      setUser(responseBody.user);
      setHeaderId('');
      setBadgeId('');
      setExtraHeaderContent(null);
      setHeaderBadge(null);
      setHeaderText('');
      navigate('home');
   } else {
      const responseBody = response.body;
      const message = responseBody.message;
      toast.error(message);
   }
};

export default handleConfirmationButton;
