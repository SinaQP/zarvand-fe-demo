import { FC, ReactNode, useState } from 'react';
import { ChargesContext, UserContext } from './app.context';
import {
   BillDetail,
   BillInfo,
   RenovationCharge,
   TradeCharge,
   User,
} from './interfaces/models.interface';

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
   const [token, setToken] = useState<string>('');
   const [user, setUser] = useState<User | null>(null);
   const [loginEnteredNationalCode, setLoginEnteredNationalCode] =
      useState<string>('');
   const [maskedPhoneNumber, setMaskedPhoneNumber] = useState<string>('');
   const [showPaymentHistory, setShowPaymentHistory] = useState<boolean>(false);

   return (
      <UserContext.Provider
         value={{
            token,
            setToken,
            user,
            setUser,
            loginEnteredNationalCode,
            setLoginEnteredNationalCode,
            maskedPhoneNumber,
            setMaskedPhoneNumber,
            showPaymentHistory,
            setShowPaymentHistory,
         }}
      >
         {children}
      </UserContext.Provider>
   );
};
export const ChargesProvider: FC<{ children: ReactNode }> = ({ children }) => {
   const [renovationCharges, setRenovationCharges] = useState<
      RenovationCharge[]
   >([]);
   const [tradeCharges, setTradeCharges] = useState<TradeCharge[]>([]);
   const [selectedTradeCharge, setSelectedTradeCharge] =
      useState<TradeCharge | null>(null);
   const [selectedRenovationCharge, setSelectedRenovationCharge] =
      useState<RenovationCharge | null>(null);
   const [selectedChargeBillInfo, setSelectedChargeBillInfo] =
      useState<BillInfo | null>(null);
   const [selectedChargeBillDetails, setSelectedChargeBillDetails] = useState<
      BillDetail[] | null
   >(null);
   return (
      <ChargesContext.Provider
         value={{
            renovationCharges,
            tradeCharges,
            setTradeCharges,
            setSelectedTradeCharge,
            selectedTradeCharge,
            setRenovationCharges,
            selectedRenovationCharge,
            setSelectedRenovationCharge,
            selectedChargeBillInfo,
            setSelectedChargeBillInfo,
            selectedChargeBillDetails,
            setSelectedChargeBillDetails,
         }}
      >
         {children}
      </ChargesContext.Provider>
   );
};
const AppProviders: FC<{ children: ReactNode }> = ({ children }) => {
   return (
      <UserProvider>
         <ChargesProvider>{children}</ChargesProvider>
      </UserProvider>
   );
};

export default AppProviders;
