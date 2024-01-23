import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';

export async function getPersonRenovationMasters(): Promise<any> {
   try {
      const url: string =
         process.env.REACT_APP_BACKEND + `/zarvand/get-person-renovation-masters/`;

      const result: FetchResult = await Fetch(url, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         }
      });
      return result;
   } catch (error) {
      return error;
   }
}
