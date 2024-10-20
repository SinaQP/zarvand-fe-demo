import { getRenovationBillDetailsInfo } from '../apis/renovation/renovation-bill-details-info';
import { getTradeBillDetailsInfo } from '../apis/trade/guild-bill-details-info';
import { Dispatch, SetStateAction } from 'react';
import {
   RenovationCharge,
   TradeCharge,
} from '../interfaces/models.interface';
import { toast } from 'react-toastify';

async function getSelectedChargeBillDetails(
   token: string,
   charge: TradeCharge | RenovationCharge,
   chargeType: 'Trade' | 'Renovation',
   setCharges?:
      | Dispatch<SetStateAction<TradeCharge[]>>
      | Dispatch<SetStateAction<RenovationCharge[]>>,
) {
   let billDetailsInfoResponse = null;
   if (chargeType == 'Trade') {
      billDetailsInfoResponse = await getTradeBillDetailsInfo(
         { master_id: charge.master_id },
         token,
      );
   } else if (chargeType == 'Renovation') {
      billDetailsInfoResponse = await getRenovationBillDetailsInfo(
         { master_id: charge.master_id },
         token,
      );
   }

   const responseBody = billDetailsInfoResponse.body;
   if (billDetailsInfoResponse.status === 200 && setCharges) {
      setCharges((prevState: any) => {
         const state = prevState.map((prevCharge: any) => {
            console.log('prevCharge', prevCharge);
            console.log(
               'prevCharge BOOL',
               charge.master_id === prevCharge.master_id,
            );
            if (charge.master_id === prevCharge.master_id) {
               return {
                  ...prevCharge,
                  ...responseBody,
               };
            }
            return prevCharge;
         });
         return state;
      });
   } else {
      toast.error(responseBody.message);
   }
}

export default getSelectedChargeBillDetails;
