import { IS_DEMO_MODE } from '../../config/env';
import { getCitizenRequestsDemo } from '../../demo/service';

export const getCitizenRequests = async (): Promise<any> => {
   if (IS_DEMO_MODE) {
      const body = await getCitizenRequestsDemo();
      return { status: 200, body };
   }

   return {
      status: 501,
      body: { message: 'Citizen requests endpoint is not configured yet.' },
   };
};
