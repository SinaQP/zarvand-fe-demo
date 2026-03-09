import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';
import { IS_DEMO_MODE } from '../../config/env';
import { getRenovationPrintDataDemo } from '../../demo/service';

export async function getRnvPrintData(
   body: {
      master_id: string;
      last_paid_bill: boolean;
   },
   token: string,
): Promise<any> {
   try {
      if (IS_DEMO_MODE) {
         return await getRenovationPrintDataDemo(token, body.master_id);
      }
      const backendUrl = import.meta.env.VITE_APP_BACKEND;
      const url: string = backendUrl + `/zarvand/renovation/print`;

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
