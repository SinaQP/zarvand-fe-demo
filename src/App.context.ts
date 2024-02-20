import { Dispatch, SetStateAction, createContext } from 'react';

export interface User {
   name: string;
   national_code: string;
   mobile_number: string;
}

export interface SubSystem {
   sub_system_name: string;
   flag: boolean;
}

export interface Renovation {
   address: string;
   certificate_number: string;
   is_paid: boolean;
   master_id: string;
}

export interface AppContextProps {
   setToken: Dispatch<SetStateAction<string>>;
   setUser: Dispatch<SetStateAction<User | null>>;
   setSubsystems: Dispatch<SetStateAction<SubSystem[]>>;
   setSelectedCharge: Dispatch<SetStateAction<Renovation | null>>;
   setLoginEnteredNationalCode: Dispatch<SetStateAction<string>>;
   setMaskedPhoneNumber:Dispatch<SetStateAction<string>>;
   token: string;
   user: User | null;
   subSystems: SubSystem[];
   selectedCharge: Renovation | null;
   loginEnteredNationalCode: string;
   maskedPhoneNumber:string;
}

export const AppContext = createContext<AppContextProps>({
   setToken: () => {},
   setUser: () => {},
   setSubsystems: () => {},
   setSelectedCharge: () => {},
   setLoginEnteredNationalCode: () => {},
   setMaskedPhoneNumber:() => {},
   token: '',
   selectedCharge: null,
   user: null,
   subSystems: [],
   loginEnteredNationalCode: '',
   maskedPhoneNumber:''
});
