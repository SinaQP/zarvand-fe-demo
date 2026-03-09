import { IS_DEMO_MODE } from '../../config/env';
import { getNotificationsDemo } from '../../demo/service';

export const getNotifications = async (): Promise<any> => {
   if (IS_DEMO_MODE) {
      const body = await getNotificationsDemo();
      return { status: 200, body };
   }

   return {
      status: 501,
      body: { message: 'Notifications endpoint is not configured yet.' },
   };
};
