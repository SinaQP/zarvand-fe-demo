import { Dispatch, SetStateAction, createContext } from 'react';
import LoginStage from './loginStageEnum';

interface LoginContextProps {
   setLoginStage: Dispatch<SetStateAction<LoginStage>>;
   setNationalCode: Dispatch<
      SetStateAction<[string, string, string, string, string, string, string, string, string, string]>
   >;
   nationalCode: [string, string, string, string, string, string, string, string, string, string];
}

export const LoginContext = createContext<LoginContextProps>({
   setLoginStage: () => {},
   setNationalCode: () => {},
   nationalCode: ['', '', '', '', '', '', '', '', '', ''],
});
