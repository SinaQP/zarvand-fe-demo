import { IS_DEMO_MODE } from '../../config/env';
import { updateDemoProfile } from '../../demo/service';
import { User } from '../../interfaces/models.interface';

export const updateUserData = async (payload: Partial<User>): Promise<any> => {
   if (IS_DEMO_MODE) {
      const body = await updateDemoProfile(payload);
      return { status: 200, body };
   }

   return {
      status: 501,
      body: { message: 'User profile update endpoint is not configured yet.' },
   };
};
