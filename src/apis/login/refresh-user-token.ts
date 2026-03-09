import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';
import { IS_DEMO_MODE } from '../../config/env';
import { refreshUserTokenDemo } from '../../demo/service';

export async function postRefreshUserToken(body: {
   refresh_token: string;
}): Promise<any> {
   try {
      if (IS_DEMO_MODE) {
         return await refreshUserTokenDemo(body);
      }
      const backendUrl = import.meta.env.VITE_APP_BACKEND;
      const url: string = backendUrl + `/zarvand/refresh-access-token/`;

      const result: FetchResult = await Fetch(url, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(body),
      });
      return result;
   } catch (error) {
      return error;
   }
}
