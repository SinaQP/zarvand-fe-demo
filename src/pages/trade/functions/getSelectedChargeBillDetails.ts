import { getTradeBillDetailsInfo } from '../../../apis/trade/guild-bill-details-info';
import { TradeCharge } from '../../../App.interface';

async function getSelectedChargeBillDetails(token: string, charge: TradeCharge, setBillDetailsInfoResponse: any) {
   const billDetailsInfoResponse = await getTradeBillDetailsInfo(
      { master_id: charge.master_id },
      token,
   );
   const responseBody = billDetailsInfoResponse.body;
   if (billDetailsInfoResponse.status === 200) {
      setBillDetailsInfoResponse(responseBody.last_bill_details);
   } else {
      setBillDetailsInfoResponse([]);
   } //toast.fire({ title: responseBody.message, icon: 'error' });
}

export default getSelectedChargeBillDetails;