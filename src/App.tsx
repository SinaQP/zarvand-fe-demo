import { AppProps, BillDetail, BillInfo, RenovationCharge, TradeCharge } from './App.interface';
import { AppContext, Guild, GuildBill, RenovationBill, RenovationMaster, SubSystem, User } from './App.context';
import { useState } from 'react';

const App = (props: AppProps) => {
   const [user, setUser] = useState<User | null>(null);
   const [loginEnteredNationalCode, setLoginEnteredNationalCode] =
      useState<string>('');
   const [token, setToken] = useState<string>('');
   const [maskedPhoneNumber, setMaskedPhoneNumber] = useState<string>('');
   const [subSystems, setSubsystems] = useState<SubSystem[]>([]);
   const [selectedCharge, setSelectedCharge] =
      useState<RenovationMaster | null>(null);
   const [selectedGuildCharge, setSelectedGuildCharge] = useState<Guild | null>(
      null,
   );
   console.log('token', token);
   const [selectedRenovationBillDetail, setSelectedRenovationBillDetail] =
      useState<RenovationBill | null>(null);
   const [selectedGuildBillDetail, setSelectedGuildBillDetail] =
      useState<GuildBill | null>(null);
   const [selectedTradeCharge, setSelectedTradeCharge] =
      useState<TradeCharge | null>(null);
   const [selectedTradeChargeBillDetails, setSelectedTradeChargeBillDetails] =
      useState<BillDetail[] | null>(null);
   const [selectedRenovationCharge, setSelectedRenovationCharge] =
      useState<RenovationCharge | null>(null);
   const [selectedChargeBillInfo, setSelectedChargeBillInfo] = useState<BillInfo | null>(null);
   return (
      <AppContext.Provider
         value={{
            selectedChargeBillInfo,
            setSelectedChargeBillInfo,
            setSelectedTradeChargeBillDetails,
            selectedTradeChargeBillDetails,
            setSubsystems,
            selectedTradeCharge,
            setSelectedTradeCharge,
            setToken,
            setUser,
            setSelectedCharge,
            setLoginEnteredNationalCode,
            setMaskedPhoneNumber,
            setSelectedGuildCharge,
            selectedCharge,
            setSelectedRenovationBillDetail,
            setSelectedGuildBillDetail,
            maskedPhoneNumber,
            subSystems,
            token,
            user,
            loginEnteredNationalCode,
            selectedGuildCharge,
            selectedRenovationBillDetail,
            selectedGuildBillDetail,
            selectedRenovationCharge,
            setSelectedRenovationCharge,
         }}
      >
         {props.children}
      </AppContext.Provider>
   );
};

export default App;
