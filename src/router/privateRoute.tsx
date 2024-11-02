import { FC, ReactNode, useContext, useEffect, useState } from 'react';
import { useUserContext } from '../App.context';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { postRefreshUserToken } from '../apis/login/refresh-user-token';
import { FetchResult } from '../apis/fetch.interface';

const PrivateRoute: FC<{ element: ReactNode }> = ({ element }) => {
   const { token, setToken } = useUserContext();
   const zarToken = localStorage.getItem('zarToken');
   const navigate = useNavigate();
   const location = useLocation()
   useEffect(() => {
      const refreshUserToken = async () => {
         if (!zarToken) return;
         const result = await postRefreshUserToken({ refresh_token: zarToken });
         const { body, status } = result as FetchResult;
         console.log(result);
         if (status === 200) {
            setToken(body.access_token);
         } else {
            localStorage.removeItem('zarToken');
         }
      };
      !token && refreshUserToken();
      if (!token) navigate('/login');
   }, [zarToken, token]);
   return token ? element : null;
};

export default PrivateRoute;
