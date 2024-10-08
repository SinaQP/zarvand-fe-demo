import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';

export async function getPersonRenovationMasters(token: string): Promise<any> {
   try {
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
