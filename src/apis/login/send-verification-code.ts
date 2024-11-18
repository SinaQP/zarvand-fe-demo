import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';

export async function sendVerificationCode(body: {
   national_code: string;
   mobile_number?: string;
}): Promise<any> {
   try {
      const backendUrl = import.meta.env.VITE_APP_BACKEND;
      const url: string = backendUrl + `/zarvand/send-verification-code/`;
      const result: FetchResult = await Fetch(url, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(body),
      });
      return result;
   } catch (error) {
      return error;
   }
}
