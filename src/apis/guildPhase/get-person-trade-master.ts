import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';

export async function getPersonTradeMasters(token: string): Promise<any> {
   try {
      const url: string =
         process.env.REACT_APP_BACKEND + `/zarvand/get-person-trade-masters/`;

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
