import { AppProps } from './App.interface';
import { AppContext, SubSystem, User } from './App.context';
import { useState } from 'react';

const App = (props: AppProps) => {
   const [user, setUser] = useState<User | null>(null);
   const [token, setToken] = useState<string>('');
   const [subSystems, setSubsystems] = useState<SubSystem[]>([]);
   const [selectedChargeIdToView, setSelectedChargeIdToView] =
      useState<string>('');
   return (
      <AppContext.Provider
         value={{
            setSubsystems,
            setToken,
            setUser,
            setSelectedChargeIdToView,
            selectedChargeIdToView,
            subSystems,
            token,
            user,
         }}
      >
         {props.children}
      </AppContext.Provider>
   );
};

export default App;
