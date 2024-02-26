import { AppProps } from './App.interface';
import { AppContext, Renovation, SubSystem, User, Guild } from './App.context';
import { useState } from 'react';

const App = (props: AppProps) => {
   const [user, setUser] = useState<User | null>(null);
   const [loginEnteredNationalCode, setLoginEnteredNationalCode] =
      useState<string>('');
   const [token, setToken] = useState<string>('');
   const [maskedPhoneNumber, setMaskedPhoneNumber] = useState<string>('');
   const [subSystems, setSubsystems] = useState<SubSystem[]>([]);
   const [selectedCharge, setSelectedCharge] = useState<Renovation | null>(
      null,
   );
   const [selectedGuildCharge, setSelectedGuildCharge] = useState<Guild | null>(
      null,
   );
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
            maskedPhoneNumber,
            subSystems,
            token,
            user,
            loginEnteredNationalCode,
            selectedGuildCharge,
         }}
      >
         {props.children}
      </AppContext.Provider>
   );
};

export default App;
