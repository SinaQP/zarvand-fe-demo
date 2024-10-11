import { getRenovationBillDetailsInfo } from '../apis/renovation/renovation-bill-details-info';
import { getTradeBillDetailsInfo } from '../apis/trade/guild-bill-details-info';
import {
   BillDetail,
   BillInfo,
   RenovationCharge,
   TradeCharge,
} from '../app.interface';
import { Dispatch, SetStateAction } from 'react';

async function getSelectedChargeBillDetails(
   token: string,
   charge: TradeCharge | RenovationCharge,
   chargeType: 'Trade' | 'Renovation',
   setBillDetailsInfoResponse: Dispatch<SetStateAction<BillDetail[] | null>>,
   setBillInfo: Dispatch<SetStateAction<BillInfo | null>>,
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
   if (billDetailsInfoResponse.status === 200) {
      // setBillDetailsInfoResponse(charge.is_paid ? responseBody.bill_details : responseBody.last_bill_details);
      setBillDetailsInfoResponse(responseBody.last_bill_details);
      setBillInfo(responseBody);
   } else {
      setBillDetailsInfoResponse([]);
   } //toast.fire({ title: responseBody.message, icon: 'error' });
}

export default getSelectedChargeBillDetails;
