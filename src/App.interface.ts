import { Dispatch, SetStateAction } from 'react';
import {
   BillDetail,
   BillInfo,
   RenovationCharge,
   TradeCharge,
   User,
} from './interfaces/models.interface';

export interface UserContextProps {
   token: string;
   user: User | null;
   setToken: Dispatch<SetStateAction<string>>;
   setUser: Dispatch<SetStateAction<User | null>>;
   loginEnteredNationalCode: string;
   maskedPhoneNumber: string;
   setLoginEnteredNationalCode: Dispatch<SetStateAction<string>>;
   setMaskedPhoneNumber: Dispatch<SetStateAction<string>>;
   showPaymentHistory: boolean;
   setShowPaymentHistory: Dispatch<SetStateAction<boolean>>;
}

export interface ChargesContextProps {
   renovationCharges: RenovationCharge[];
   tradeCharges: TradeCharge[];
   setTradeCharges: Dispatch<SetStateAction<TradeCharge[]>>;
   setSelectedTradeCharge: Dispatch<SetStateAction<TradeCharge | null>>;
   selectedTradeCharge: TradeCharge | null;
   setRenovationCharges: Dispatch<SetStateAction<RenovationCharge[]>>;
   selectedRenovationCharge: RenovationCharge | null;
   setSelectedRenovationCharge: Dispatch<
      SetStateAction<RenovationCharge | null>
   >;

}

export interface AppProps {
   children?: any;
}
