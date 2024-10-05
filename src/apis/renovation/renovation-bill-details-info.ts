import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';

export async function getRenovationBillDetailsInfo(
   body: {
      master_id: string;
   },
   token: string,
): Promise<any> {
   try {
      const url: string =
         process.env.REACT_APP_BACKEND +
         `/zarvand/renovation-bill-details-info/`;

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
