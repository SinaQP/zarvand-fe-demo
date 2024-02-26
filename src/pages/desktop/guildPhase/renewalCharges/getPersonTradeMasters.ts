import { getPersonTradeMasters } from '../../../../apis/guildPhase/get-person-trade-master';
import Toast from '../../../../utilities/toast';

export const getTradeMasters = async (token: string) => {
   const response = await getPersonTradeMasters(token);
   const responseBody = response.body;
   if (response.status === 200) {
      return responseBody;
   } else {
      Toast.fire({ icon: 'error', title: responseBody.message });
   }
   return [];
};
