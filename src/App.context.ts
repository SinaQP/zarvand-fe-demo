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

export interface AppContextProps {
   setToken: Dispatch<SetStateAction<string>>;
   setUser: Dispatch<SetStateAction<User | null>>;
   setSubsystems: Dispatch<SetStateAction<SubSystem[]>>;
   setSelectedChargeIdToView: Dispatch<SetStateAction<string>>;
   token: string;
   user: User | null;
   subSystems: SubSystem[];
   selectedChargeIdToView: string;
}

export const AppContext = createContext<AppContextProps>({
   setToken: () => {},
   setUser: () => {},
   setSubsystems: () => {},
   setSelectedChargeIdToView: () => {},
   token: '',
   selectedChargeIdToView: '',
   user: null,
   subSystems: [],
});
