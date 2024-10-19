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
   // setState([
   //    {
   //       address: '1',
   //       building_area: 20,
   //       certificate_number: '10',
   //       is_paid: false,
   //       land_area: 20,
   //       master_id: '10000',
   //    },
   //    {
   //       address: '1',
   //       building_area: 20,
   //       certificate_number: '10',
   //       is_paid: false,
   //       land_area: 20,
   //       master_id: '10000',
   //    },
   //    {
   //       address: '1',
   //       building_area: 20,
   //       certificate_number: '10',
   //       is_paid: false,
   //       land_area: 20,
   //       master_id: '10000',
   //    },
   //    {
   //       address: '1',
   //       building_area: 20,
   //       certificate_number: '10',
   //       is_paid: false,
   //       land_area: 20,
   //       master_id: '10000',
   //    },
   //    {
   //       address: '1',
   //       building_area: 20,
   //       certificate_number: '10',
   //       is_paid: false,
   //       land_area: 20,
   //       master_id: '10000',
   //    },
      
   //    {
   //       address: '1',
   //       building_area: 20,
   //       certificate_number: '10',
   //       is_paid: false,
   //       land_area: 20,
   //       master_id: '10000',
   //    },
   // ]);
   if (response.status === 200) {
      setState(responseBody);
      return responseBody;
   } else {
      toast.error(responseBody.message);
   }
   return [];
};
