import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';
import { IS_DEMO_MODE } from '../../config/env';
import { validateSmsCodeDemo } from '../../demo/service';

export async function validateSmsCode(body: {
   national_code: string;
   code: string;
}): Promise<any> {
   try {
      if (IS_DEMO_MODE) {
         return await validateSmsCodeDemo(body);
      }
      const backendUrl = import.meta.env.VITE_APP_BACKEND;
      const url: string = backendUrl + `/zarvand/validate-sms-code/`;

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
