import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';
import { IS_DEMO_MODE } from '../../config/env';
import { getUserDataDemo } from '../../demo/service';

export async function getUserData(token: string): Promise<any> {
   try {
      if (IS_DEMO_MODE) {
         return await getUserDataDemo(token);
      }
      const backendUrl = import.meta.env.VITE_APP_BACKEND;
      const url: string = backendUrl + `/zarvand/user-info/`;

      const result: FetchResult = await Fetch(url, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
      });
      return result;
   } catch (error) {
      return error;
   }
}
