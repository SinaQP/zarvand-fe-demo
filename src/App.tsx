import { AppProps, BillDetail, BillInfo, RenovationCharge, TradeCharge } from './App.interface';
import { AppContext, Guild, GuildBill, RenovationBill, RenovationMaster, User } from './App.context';
import { useState } from 'react';

const App = (props: AppProps) => {
   const userState = useState<User | null>(null);
   const loginEnteredNationalCodeState = useState<string>('');
   const tokenState = useState<string>('');
   const [maskedPhoneNumber, setMaskedPhoneNumber] = useState<string>('');
   const [selectedCharge, setSelectedCharge] =
      useState<RenovationMaster | null>(null);
   const [selectedGuildCharge, setSelectedGuildCharge] = useState<Guild | null>(
      null,
   );
   console.log('token', tokenState[0]);
   const [selectedRenovationBillDetail, setSelectedRenovationBillDetail] =
      useState<RenovationBill | null>(null);
   const [selectedGuildBillDetail, setSelectedGuildBillDetail] =
      useState<GuildBill | null>(null);
   const [selectedTradeCharge, setSelectedTradeCharge] =
      useState<TradeCharge | null>(null);
   const [selectedChargeBillDetails, setSelectedChargeBillDetails] =
      useState<BillDetail[] | null>(null);
   const [selectedRenovationCharge, setSelectedRenovationCharge] =
      useState<RenovationCharge | null>(null);
   const [selectedChargeBillInfo, setSelectedChargeBillInfo] = useState<BillInfo | null>(null);
   const showPaymentHistoryState = useState<boolean>(false);
   return (
      <AppContext.Provider
         value={{
            setShowPaymentHistory:showPaymentHistoryState[1],
            selectedChargeBillInfo,
            setSelectedChargeBillInfo,
            setSelectedChargeBillDetails,
            selectedChargeBillDetails,
            selectedTradeCharge,
            setSelectedTradeCharge,
            setToken: tokenState[1],
            setUser: userState[1],
            setSelectedCharge,
            setLoginEnteredNationalCode: loginEnteredNationalCodeState[1],
            setMaskedPhoneNumber,
            setSelectedGuildCharge,
            selectedCharge,
            setSelectedRenovationBillDetail,
            setSelectedGuildBillDetail,
            maskedPhoneNumber,
            token:tokenState[0],
            user: userState[0],
            loginEnteredNationalCode: loginEnteredNationalCodeState[0],
            selectedGuildCharge,
            selectedRenovationBillDetail,
            selectedGuildBillDetail,
            selectedRenovationCharge,
            setSelectedRenovationCharge,
            showPaymentHistory:showPaymentHistoryState[0]
         }}
      >
         {props.children}
      </AppContext.Provider>
   );
};

export default App;
