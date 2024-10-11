import { createContext, useContext } from 'react';
import { ChargesContextProps, UserContextProps } from './App.interface';

export const UserContext = createContext<UserContextProps | undefined>(
   undefined,
);

export const useUserContext = () => {
   const context = useContext(UserContext);
   if (!context) {
      throw new Error('useUserContext must be used within UserProvider');
   }
   return context;
};

export const ChargesContext = createContext<ChargesContextProps | undefined>(
   undefined,
);

export const useChargesContext = () => {
   const context = useContext(ChargesContext);
   if (!context) {
      throw new Error('useChargesContext must be used within ChargesProvider');
   }
   return context;
};
