import { AppProps } from './App.interface';
import {
   AppContext,
   RenovationMaster,
   SubSystem,
   User,
   Guild,
   RenovationBill,
} from './App.context';
import { useState } from 'react';

const App = (props: AppProps) => {
   const [user, setUser] = useState<User | null>(null);
   const [loginEnteredNationalCode, setLoginEnteredNationalCode] =
      useState<string>('');
   const [token, setToken] = useState<string>('');
   const [maskedPhoneNumber, setMaskedPhoneNumber] = useState<string>('');
   const [subSystems, setSubsystems] = useState<SubSystem[]>([]);
   const [selectedCharge, setSelectedCharge] = useState<RenovationMaster | null>(
      null,
   );
   const [selectedGuildCharge, setSelectedGuildCharge] = useState<Guild | null>(
      null,
   );
   const [selectedRenovationBillDetail, setSelectedRenovationBillDetail] =
      useState<RenovationBill | null>(null);
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
            maskedPhoneNumber,
            subSystems,
            token,
            user,
            loginEnteredNationalCode,
            selectedGuildCharge,
            selectedRenovationBillDetail,
         }}
      >
         {props.children}
      </AppContext.Provider>
   );
};

export default App;
