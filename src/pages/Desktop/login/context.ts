import { Dispatch, SetStateAction, createContext } from 'react';
import LoginStage from './loginStageEnum';

interface LoginContextProps {
      setLoginStage: Dispatch<SetStateAction<LoginStage>>;
      setPhoneNumber: Dispatch<SetStateAction<string>>;
      phoneNumber: string;
}

export const LoginContext = createContext<LoginContextProps>({
      setLoginStage: () => {},
      setPhoneNumber: () => {},
      phoneNumber: '',
});
