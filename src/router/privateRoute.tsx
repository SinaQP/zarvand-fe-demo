import { FC, ReactNode } from 'react';
import { useUserContext } from '../App.context';
import { Navigate } from 'react-router-dom';

const PrivateRoute: FC<{ element: ReactNode }> = ({ element }) => {
   const { token } = useUserContext();

   return true ? element : <Navigate to={'/login'} />;
};

export default PrivateRoute;
