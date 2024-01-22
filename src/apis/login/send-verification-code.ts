import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';

export async function sendVerificationCode(body: {
   national_code: string;
}): Promise<any> {
   try {
      const url: string =
         process.env.REACT_APP_BACKEND + `/zarvand/send-verification-code/`;

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
