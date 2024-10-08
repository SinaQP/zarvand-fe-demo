import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';

export async function getTradeBillDetailsInfo(
   body: {
      master_id: string;
   },
   token: string,
): Promise<any> {
   try {
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
