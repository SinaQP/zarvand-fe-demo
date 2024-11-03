import { getPersonRenovationMasters as getPersonRenovationMastersApi } from '../../apis/renovation/get-person-renovation-masters';
import { Dispatch, SetStateAction } from 'react';
import { RenovationCharge } from '../../interfaces/models.interface';
import { toast } from 'react-toastify';

export const getUserRenovationCharges = async (
   token: string,
   setState: Dispatch<SetStateAction<RenovationCharge[]>>,
   setSelectedRenovationCharge: Dispatch<
      SetStateAction<RenovationCharge | null>
   >,
   setIsLoaded: Dispatch<SetStateAction<boolean>>,
) => {
   const response = await getPersonRenovationMastersApi(token);
   const responseBody = response.body;
   if (response.status === 200) {
      setState(responseBody);
      if (responseBody.length === 1)
         setSelectedRenovationCharge(responseBody[0]);
      setIsLoaded(true);
      return responseBody;
   } else {
      toast.error(responseBody.message);
   }
   setIsLoaded(true);
   return [];
};
