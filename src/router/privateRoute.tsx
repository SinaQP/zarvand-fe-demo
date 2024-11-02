import { FC, ReactNode, useContext, useEffect, useState } from 'react';
import { useUserContext } from '../App.context';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute: FC<{ element: ReactNode }> = ({ element }) => {
   const { token } = useUserContext();

   return token ? element : <Navigate to={'/login'} />;
};

export default PrivateRoute;
