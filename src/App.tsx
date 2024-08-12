import { AppProps } from './App.interface';
import {
   AppContext,
   RenovationMaster,
   SubSystem,
   User,
   Guild,
   RenovationBill,
   GuildBill,
} from './App.context';
import { useState } from 'react';

const App = (props: AppProps) => {
   const [user, setUser] = useState<User | null>(null);
   const [loginEnteredNationalCode, setLoginEnteredNationalCode] =
      useState<string>('');
   const [token, setToken] = useState<string>(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwibmF0aW9uYWxfY29kZSI6IjI5ODE1MzI1NzEiLCJleHAiOjE3MjMzODgwMjJ9.EkTyydC9dvXhH5yHiLGKU_1PRbOjTilGtjHtKozXnM0',
   );
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
   return (
      <AppContext.Provider
         value={{
            setSubsystems,
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
         }}
      >
         {props.children}
      </AppContext.Provider>
   );
};

export default App;
