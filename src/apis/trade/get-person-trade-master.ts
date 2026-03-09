import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';
import { IS_DEMO_MODE } from '../../config/env';
import { getTradeMastersDemo } from '../../demo/service';

export async function getPersonTradeMasters(token: string): Promise<any> {
   try {
      if (IS_DEMO_MODE) {
         return await getTradeMastersDemo(token);
      }
      const backendUrl = import.meta.env.VITE_APP_BACKEND;
      const url: string = backendUrl + `/zarvand/get-person-trade-masters/`;

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
