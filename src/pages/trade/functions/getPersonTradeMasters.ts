import { toast } from 'react-toastify';
import { getPersonTradeMasters } from '../../../apis/trade/get-person-trade-master';
import { Dispatch, SetStateAction } from 'react';
import { TradeCharge } from '../../../interfaces/models.interface';

export const getUserTradeMasters = async (
   token: string,
   setState: Dispatch<SetStateAction<TradeCharge[]>>,
) => {
   const response = await getPersonTradeMasters(token);
   const responseBody = response.body;
   if (response.status === 200) {
      setState(responseBody);
      return responseBody;
   } else {
      toast.error(responseBody.message);
   }
   return [];
};
