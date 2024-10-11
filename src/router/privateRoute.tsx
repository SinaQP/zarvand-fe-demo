import { FC, ReactNode, useContext } from 'react';
import { useUserContext } from '../app.context';
import { Navigate } from 'react-router-dom';

const PrivateRoute: FC<{ element: ReactNode }> = ({ element }) => {
   const { token } = useUserContext();
   return token ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
