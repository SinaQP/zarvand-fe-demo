import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';
import { IS_DEMO_MODE } from '../../config/env';
import { getRenovationMastersDemo } from '../../demo/service';

export async function getPersonRenovationMasters(token: string): Promise<any> {
   try {
      if (IS_DEMO_MODE) {
         return await getRenovationMastersDemo(token);
      }
      const backendUrl = import.meta.env.VITE_APP_BACKEND;
      const url: string =
         backendUrl + `/zarvand/get-person-renovation-masters/`;

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
