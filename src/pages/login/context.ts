import { Dispatch, SetStateAction, createContext } from 'react';

interface LoginContextProps {
   setNationalCode: Dispatch<SetStateAction<string[]>>;
   nationalCode: string[];
   phoneNumber: string;
   setPhoneNumber: Dispatch<SetStateAction<string>>;
}

export const LoginContext = createContext<LoginContextProps>({
   setNationalCode: () => {},
   setPhoneNumber: () => {},
   nationalCode: [],
   phoneNumber: '',
});
