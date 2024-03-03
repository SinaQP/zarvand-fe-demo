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

export interface RenovationMaster {
   address: string;
   certificate_number: string;
   is_paid: boolean;
   master_id: string;
}

export interface Guild {
   TradeType: string;
   address: string;
   is_paid: boolean;
   master_id: string;
}
export interface RenovationBillDetail {
   bill_id: number;
   incomecode_code: string;
   incomecode_desc: string;
   penalty: number;
   from_year: number;
   creditor: number;
   to_year: number;
   bill_code: string;
   payment_date: string;
   is_annual_charges: true;
   desc: string;
}
export interface RenovationBill {
   bill_no: string;
   charges_by_year: [];
   bill_details: RenovationBillDetail[];
   payment_no: string;
   value_to_pay: number;
   city_service_charges: number;
   safety_service_charges: number;
   garbage_collection_charges: number;
   total_penalty: number;
}

export interface AppContextProps {
   setToken: Dispatch<SetStateAction<string>>;
   setUser: Dispatch<SetStateAction<User | null>>;
   setSubsystems: Dispatch<SetStateAction<SubSystem[]>>;
   setSelectedCharge: Dispatch<SetStateAction<RenovationMaster | null>>;
   setSelectedGuildCharge: Dispatch<SetStateAction<Guild | null>>;
   setLoginEnteredNationalCode: Dispatch<SetStateAction<string>>;
   setMaskedPhoneNumber: Dispatch<SetStateAction<string>>;
   setSelectedRenovationBillDetail: Dispatch<
      SetStateAction<RenovationBill | null>
   >;
   token: string;
   user: User | null;
   subSystems: SubSystem[];
   selectedCharge: RenovationMaster | null;
   selectedGuildCharge: Guild | null;
   loginEnteredNationalCode: string;
   maskedPhoneNumber: string;
   selectedRenovationBillDetail: RenovationBill | null;
}

export const AppContext = createContext<AppContextProps>({
   setToken: () => {},
   setUser: () => {},
   setSubsystems: () => {},
   setSelectedCharge: () => {},
   setSelectedGuildCharge: () => {},
   setLoginEnteredNationalCode: () => {},
   setMaskedPhoneNumber: () => {},
   setSelectedRenovationBillDetail: () => {},
   token: '',
   selectedCharge: null,
   user: null,
   subSystems: [],
   loginEnteredNationalCode: '',
   maskedPhoneNumber: '',
   selectedGuildCharge: null,
   selectedRenovationBillDetail: null,
});
