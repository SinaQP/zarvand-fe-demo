import { getPersonRenovationMasters as getPersonRenovationMastersApi } from '../../apis/renovation/get-person-renovation-masters';
import { Dispatch, SetStateAction } from 'react';
import { RenovationCharge } from '../../interfaces/models.interface';
import { toast } from 'react-toastify';

export const getUserRenovationCharges = async (
   token: string,
   setState: Dispatch<SetStateAction<RenovationCharge[]>>,
) => {
   const response = await getPersonRenovationMastersApi(token);
   const responseBody = response.body;
   if (response.status === 200) {
      setState(responseBody);
      return responseBody;
   } else {
      toast.error(responseBody.message);
   }
   return [];
};
