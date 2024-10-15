import { getRenovationBillDetailsInfo } from '../apis/renovation/renovation-bill-details-info';
import { getTradeBillDetailsInfo } from '../apis/trade/guild-bill-details-info';
import { Dispatch, SetStateAction } from 'react';
import {
   BillDetail,
   BillInfo,
   RenovationCharge,
   TradeCharge,
} from '../interfaces/models.interface';
import { toast } from 'react-toastify';

async function getSelectedChargeBillDetails(
   token: string,
   charge: TradeCharge | RenovationCharge,
   chargeType: 'Trade' | 'Renovation',
   setSelectedChargeBillDetails: Dispatch<SetStateAction<BillDetail[] | null>>,
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
      setSelectedChargeBillDetails(responseBody.last_bill_details);
      setBillInfo(responseBody);
   } else {
      setSelectedChargeBillDetails([]);
      toast.error(responseBody.message);
   }
}

export default getSelectedChargeBillDetails;
