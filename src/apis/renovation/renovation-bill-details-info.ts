import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';
import { IS_DEMO_MODE } from '../../config/env';
import { getRenovationBillDetailsInfoDemo } from '../../demo/service';

export async function getRenovationBillDetailsInfo(
   body: {
      master_id: string;
   },
   token: string,
): Promise<any> {
   try {
      if (IS_DEMO_MODE) {
         return await getRenovationBillDetailsInfoDemo(token, body.master_id);
      }
      const backendUrl = import.meta.env.VITE_APP_BACKEND;
      const url: string = backendUrl + `/zarvand/renovation-bill-details-info/`;

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
