import { NavigateFunction } from 'react-router-dom';
import { postRefreshUserToken } from '../../../../apis/login/refresh-user-token';
import { FetchResult } from '../../../../apis/fetch.interface';
import { Dispatch, SetStateAction } from 'react';
import { getUserData } from '../../../../apis/user/get-user-data';
import { User } from '../../../../interfaces/models.interface';

const welcomeBack = async (
   navigate: NavigateFunction,
   zarToken: string | null,
   setToken: Dispatch<SetStateAction<string>>,
   setUser: Dispatch<SetStateAction<User | null>>,
) => {
   if (!zarToken) return navigate('/login');

   const result = await postRefreshUserToken({ refresh_token: zarToken });
   const { body, status } = result as FetchResult;

   if (status === 200) {
      setToken(body.access_token);

      const getUserDetail = async () => {
         const userResult = await getUserData(body.access_token);

         if (userResult && (userResult as FetchResult).status === 200) {
            setUser((userResult as FetchResult).body);
         }
      };

      getUserDetail();
   } else {
      setToken('');
      navigate('/login');
      sessionStorage.removeItem('zarToken');
   }
};

export default welcomeBack;
