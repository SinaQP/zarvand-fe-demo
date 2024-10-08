import {
   getPersonRenovationMasters as getPersonRenovationMastersApi,
} from '../../apis/renovation/get-person-renovation-masters';
import { Dispatch, SetStateAction } from 'react';
import { RenovationCharge } from '../../App.interface';

export const getUserRenovationCharges = async (token: string, setState: Dispatch<SetStateAction<RenovationCharge[]>>,
   ) => {
      const response = await getPersonRenovationMastersApi(token);
      const responseBody: RenovationCharge[] = response.body;
      if (response.status === 200) {
         console.log(responseBody);
         setState(responseBody);
         return responseBody;
      } else {
         // Toast.fire({ icon: 'error', title: responseBody.message });
      }
      return [];
   }
;
