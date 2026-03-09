import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';
import { IS_DEMO_MODE } from '../../config/env';
import { sendVerificationCodeDemo } from '../../demo/service';

export async function getMobileNumber(body: {
   national_code: string;
}): Promise<any> {
   try {
      if (IS_DEMO_MODE) {
         const result = await sendVerificationCodeDemo({
            national_code: body.national_code,
         });
         return result;
      }
      const backendUrl = import.meta.env.VITE_APP_BACKEND;
      const url: string = backendUrl + `/zarvand/get-mobile-number/`;

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
