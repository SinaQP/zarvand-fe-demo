import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';

export async function getRnvPrintData(
   body: {
      master_id: string;
      last_paid_bill: boolean;
   },
   token: string,
): Promise<any> {
   try {
      const url: string =
         process.env.REACT_APP_BACKEND + `/zarvand/renovation/print`;

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
