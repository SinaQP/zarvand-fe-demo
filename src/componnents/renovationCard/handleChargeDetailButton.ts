import { Dispatch, SetStateAction } from 'react';
import { RenovationBill, RenovationMaster } from '../../App.context';
import { getRenovationBillDetailsInfo } from '../../apis/renovation/renovation-bill-details-info';
import toast from '../../utilities/toast';

const handleChargeDetailButton = async (
   setSelectedCharge: Dispatch<SetStateAction<RenovationMaster | null>>,
   charge: RenovationMaster,
   history: { push: (url: string) => void },
   token: string,
   setBillDetailsInfoResponse: Dispatch<SetStateAction<RenovationBill | null>>,
) => {
   setSelectedCharge(charge);

   if (charge) {
      const billDetailsInfoResponse = await getRenovationBillDetailsInfo(
         { master_id: charge.master_id },
         token,
      );
      const responseBody = billDetailsInfoResponse.body;
      if (billDetailsInfoResponse.status === 200) {
         setBillDetailsInfoResponse(responseBody);
         history.push('/payment');
      } else toast.fire({ title: responseBody.message, icon: 'error' });
   }
};

export default handleChargeDetailButton;
