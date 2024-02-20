import { getPersonRenovationMasters as getPersonRenovationMastersApi } from '../../../apis/renovation/get-person-renovation-masters';
import Toast from '../../../utilities/toast';

export const getRenovationMasters = async (token:string) => {
   const response = await getPersonRenovationMastersApi(token);
   const responseBody = response.body;
   if (response.status === 200) {
    return responseBody
   } else {
      Toast.fire({ icon: 'error', title: responseBody.message });
   }
   return []
};
