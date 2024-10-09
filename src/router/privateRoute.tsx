import { FC, ReactNode, useContext } from 'react';
import { AppContext } from '../App.context';
import { Navigate } from 'react-router-dom';

const PrivateRoute: FC<{ element: ReactNode }> = ({ element }) => {
   const { token } = useContext(AppContext);
   return true ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
