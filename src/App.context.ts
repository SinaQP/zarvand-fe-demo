import { createContext, Dispatch, SetStateAction } from 'react';
import { BillDetail, BillInfo, RenovationCharge, TradeCharge } from './App.interface';

export interface User {
   name: string;
   national_code: string;
   mobile_number: string;
}

export interface RenovationMaster {
   address: string;
   certificate_number: string;
   is_paid: boolean;
   master_id: string;
   postal_code: string;
}

export interface Guild {
   TradeType: string;
   address: string;
   is_paid: boolean;
   master_id: string;
}

export interface GuildBill {
   payment_no: string;
   bill_no: string;
   value_to_pay: number;
   bill_details: GuildBillDetail[];
   last_bill_details: GuildBillDetail[];
}

export interface GuildBillDetail {
   bill_id: number;
   incomecode_code: string;
   incomecode_desc: string;
   penalty: number;
   from_year: number;
   creditor: number;
   to_year: number;
   notice: string;
   bill_code: string;
   city_name: string;
   payment_date: string;
   is_annual_charges: boolean;
   desc: string;
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
   charges_by_year: [number, number][];
   bill_details: RenovationBillDetail[];
   payment_no: string;
   value_to_pay: number;
   city_service_charges: number;
   safety_service_charges: number;
   garbage_collection_charges: number;
   total_penalty: number;
   first_year: string;
   last_year: string;
}

export interface AppContextProps {
   setToken: Dispatch<SetStateAction<string>>;
   setSelectedChargeBillDetails: Dispatch<SetStateAction<BillDetail[] | null>>;
   setUser: Dispatch<SetStateAction<User | null>>;
   setSelectedTradeCharge: Dispatch<SetStateAction<TradeCharge | null>>;
   setSelectedRenovationCharge: Dispatch<SetStateAction<RenovationCharge | null>>;
   setSelectedCharge: Dispatch<SetStateAction<RenovationMaster | null>>;
   setSelectedGuildCharge: Dispatch<SetStateAction<Guild | null>>;
   setLoginEnteredNationalCode: Dispatch<SetStateAction<string>>;
   setMaskedPhoneNumber: Dispatch<SetStateAction<string>>;
   setSelectedRenovationBillDetail: Dispatch<
      SetStateAction<RenovationBill | null>
   >;
   setSelectedChargeBillInfo: Dispatch<SetStateAction<BillInfo | null>>;
   setSelectedGuildBillDetail: Dispatch<SetStateAction<GuildBill | null>>;
   token: string;
   user: User | null;
   selectedCharge: RenovationMaster | null;
   selectedGuildCharge: Guild | null;
   loginEnteredNationalCode: string;
   maskedPhoneNumber: string;
   selectedRenovationBillDetail: RenovationBill | null;
   selectedGuildBillDetail: GuildBill | null;
   selectedTradeCharge: TradeCharge | null;
   selectedChargeBillDetails: BillDetail[] | null;
   selectedRenovationCharge: RenovationCharge | null;
   selectedChargeBillInfo: BillInfo | null;
   showPaymentHistory: boolean;
   setShowPaymentHistory: Dispatch<SetStateAction<boolean>>;
}


export const AppContext = createContext<AppContextProps>({
   setToken: () => {
   },
   setShowPaymentHistory: () => {
   },
   setUser: () => {
   },
   setSelectedCharge: () => {
   },
   setSelectedGuildCharge: () => {
   },
   setLoginEnteredNationalCode: () => {
   },
   setMaskedPhoneNumber: () => {
   },
   setSelectedRenovationBillDetail: () => {
   },
   setSelectedGuildBillDetail: () => {
   },
   setSelectedTradeCharge: () => {
   }, setSelectedRenovationCharge: () => {
   },
   setSelectedChargeBillDetails: () => {
   },
   setSelectedChargeBillInfo: () => {
   },
   selectedChargeBillInfo: null,
   token: '',
   selectedCharge: null,
   user: null,
   selectedChargeBillDetails: null,
   loginEnteredNationalCode: '',
   maskedPhoneNumber: '',
   selectedGuildCharge: null,
   selectedRenovationBillDetail: null,
   selectedGuildBillDetail: null,
   selectedTradeCharge: null,
   selectedRenovationCharge: null,
   showPaymentHistory: false,
});
