import { IS_DEMO_MODE } from '../../config/env';
import { getDashboardDataDemo } from '../../demo/service';

export const getDashboardOverview = async (): Promise<any> => {
   if (IS_DEMO_MODE) {
      const body = await getDashboardDataDemo();
      return { status: 200, body };
   }

   return {
      status: 501,
      body: { message: 'Dashboard overview endpoint is not configured yet.' },
   };
};
