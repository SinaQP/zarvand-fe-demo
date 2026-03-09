import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';
import { IS_DEMO_MODE } from '../../config/env';
import { getTradeBillDetailsInfoDemo } from '../../demo/service';

export async function getTradeBillDetailsInfo(
   body: {
      master_id: string;
   },
   token: string,
): Promise<any> {
   try {
      if (IS_DEMO_MODE) {
         return await getTradeBillDetailsInfoDemo(token, body.master_id);
      }
      const backendUrl = import.meta.env.VITE_APP_BACKEND;
      const url: string = backendUrl + `/zarvand/trade-bill-details-info/`;

      const result: FetchResult = await Fetch(url, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify(body),
      });
      return result;
   } catch (error) {
      return error;
   }
}
