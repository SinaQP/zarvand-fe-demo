import { createContext, ReactNode, useContext } from 'react';
import { LayoutContextProps } from './index.interface';



export const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const useLayoutContext = () => {
   const context = useContext(LayoutContext);
   if (!context) {
      throw new Error('useLayoutContext must be used within LayoutProvider');
   }
   return context;
};
