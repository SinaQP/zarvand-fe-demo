import { getPersonTradeMasters } from '../../apis/trade/get-person-trade-master';
import { Dispatch, SetStateAction } from 'react';

export const getUserTradeMasters = async (token: string, setState: Dispatch<SetStateAction<any>>,
) => {
   const response = await getPersonTradeMasters(token);
   const responseBody = response.body;
   if (response.status === 200) {
      setState(responseBody);
      return responseBody;
   } else {
      // Toast.fire({ icon: 'error', title: responseBody.message });
   }
   return [];
};

