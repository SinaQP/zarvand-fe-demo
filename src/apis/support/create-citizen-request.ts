import { IS_DEMO_MODE } from '../../config/env';
import { createCitizenRequestDemo } from '../../demo/service';

interface CreateCitizenRequestPayload {
   category: string;
   title: string;
   description: string;
}

export const createCitizenRequest = async (
   payload: CreateCitizenRequestPayload,
): Promise<any> => {
   if (IS_DEMO_MODE) {
      const body = await createCitizenRequestDemo(payload);
      return { status: 201, body };
   }

   return {
      status: 501,
      body: { message: 'Citizen request creation endpoint is not configured yet.' },
   };
};
