import { IS_DEMO_MODE } from '../../config/env';
import { markNotificationReadDemo } from '../../demo/service';

export const markNotificationRead = async (
   notificationId: string,
   isRead: boolean,
): Promise<any> => {
   if (IS_DEMO_MODE) {
      const body = await markNotificationReadDemo(notificationId, isRead);
      return { status: 200, body };
   }

   return {
      status: 501,
      body: { message: 'Notification update endpoint is not configured yet.' },
   };
};
