import { FC, ReactNode, useContext } from 'react';
import { AppContext } from '../App.context';
import { Navigate } from 'react-router-dom';

const PrivateRoute: FC<{ element: ReactNode }> = ({ element }) => {
   const { token } = useContext(AppContext);
   console.log(token? "has token": "not token");
   return token ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
