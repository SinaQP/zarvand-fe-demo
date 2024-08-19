import { Dispatch, SetStateAction, createContext } from 'react';
import LoginStage from './loginStageEnum';

interface LoginContextProps {
   setLoginStage: Dispatch<SetStateAction<LoginStage>>;
   setNationalCode: Dispatch<SetStateAction<string[]>>;
   nationalCode: string[];
   phoneNumber: string;
   setPhoneNumber: Dispatch<SetStateAction<string>>;
}

export const LoginContext = createContext<LoginContextProps>({
   setLoginStage: () => {},
   setNationalCode: () => {},
   setPhoneNumber: () => {},
   nationalCode: [],
   phoneNumber: '',
});
