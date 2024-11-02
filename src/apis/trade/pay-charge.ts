import {
   RenovationCharge,
   TradeCharge,
} from '../../interfaces/models.interface';
import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';

export async function postPayCharge(
   charge: TradeCharge | RenovationCharge,
   token: string,
): Promise<any> {
   try {
      const backendUrl = import.meta.env.VITE_APP_BACKEND;
      const url: string = backendUrl + `/zarvand/saman-ipg/initiate/`;

      const result: FetchResult = await Fetch(url, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify({ bill_id: charge.master_id }),
      });
      return result;
   } catch (error) {
      return error;
   }
}
