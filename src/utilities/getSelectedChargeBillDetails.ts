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
   // setSelectedChargeBillDetails([
   //    {
   //       bill_code: '1000',
   //       bill_id: 1,
   //       creditor: 10000,
   //       desc: 'd',
   //       from_year: 1300,
   //       id: '100',
   //       income_code_id: 1000,
   //       payment_date: '1300/10/01',
   //       penalty: 2000,
   //       to_year: 1400,
   //    },
   //    {
   //       bill_code: '1000',
   //       bill_id: 1,
   //       creditor: 10000,
   //       desc: 'd',
   //       from_year: 1300,
   //       id: '100',
   //       income_code_id: 1000,
   //       payment_date: '1300/10/01',
   //       penalty: 2000,
   //       to_year: 1400,
   //    },
   //    {
   //       bill_code: '1000',
   //       bill_id: 1,
   //       creditor: 10000,
   //       desc: 'd',
   //       from_year: 1300,
   //       id: '100',
   //       income_code_id: 1000,
   //       payment_date: '1300/10/01',
   //       penalty: 2000,
   //       to_year: 1400,
   //    },
   //    {
   //       bill_code: '1000',
   //       bill_id: 1,
   //       creditor: 10000,
   //       desc: 'd',
   //       from_year: 1300,
   //       id: '100',
   //       income_code_id: 1000,
   //       payment_date: '1300/10/01',
   //       penalty: 2000,
   //       to_year: 1400,
   //    },

   //    {
   //       bill_code: '1000',
   //       bill_id: 1,
   //       creditor: 10000,
   //       desc: 'd',
   //       from_year: 1300,
   //       id: '100',
   //       income_code_id: 1000,
   //       payment_date: '1300/10/01',
   //       penalty: 2000,
   //       to_year: 1400,
   //    },
   //    {
   //       bill_code: '1000',
   //       bill_id: 1,
   //       creditor: 10000,
   //       desc: 'd',
   //       from_year: 1300,
   //       id: '100',
   //       income_code_id: 1000,
   //       payment_date: '1300/10/01',
   //       penalty: 2000,
   //       to_year: 1400,
   //    },
   //    {
   //       bill_code: '1000',
   //       bill_id: 1,
   //       creditor: 10000,
   //       desc: 'd',
   //       from_year: 1300,
   //       id: '100',
   //       income_code_id: 1000,
   //       payment_date: '1300/10/01',
   //       penalty: 2000,
   //       to_year: 1400,
   //    },
   //    {
   //       bill_code: '1000',
   //       bill_id: 1,
   //       creditor: 10000,
   //       desc: 'd',
   //       from_year: 1300,
   //       id: '100',
   //       income_code_id: 1000,
   //       payment_date: '1300/10/01',
   //       penalty: 2000,
   //       to_year: 1400,
   //    },
   //    {
   //       bill_code: '1000',
   //       bill_id: 1,
   //       creditor: 10000,
   //       desc: 'd',
   //       from_year: 1300,
   //       id: '100',
   //       income_code_id: 1000,
   //       payment_date: '1300/10/01',
   //       penalty: 2000,
   //       to_year: 1400,
   //    },
   //    {
   //       bill_code: '1000',
   //       bill_id: 1,
   //       creditor: 10000,
   //       desc: 'd',
   //       from_year: 1300,
   //       id: '100',
   //       income_code_id: 1000,
   //       payment_date: '1300/10/01',
   //       penalty: 2000,
   //       to_year: 1400,
   //    },
   //    {
   //       bill_code: '1000',
   //       bill_id: 1,
   //       creditor: 10000,
   //       desc: 'd',
   //       from_year: 1300,
   //       id: '100',
   //       income_code_id: 1000,
   //       payment_date: '1300/10/01',
   //       penalty: 2000,
   //       to_year: 1400,
   //    },
   //    {
   //       bill_code: '1000',
   //       bill_id: 1,
   //       creditor: 10000,
   //       desc: 'd',
   //       from_year: 1300,
   //       id: '100',
   //       income_code_id: 1000,
   //       payment_date: '1300/10/01',
   //       penalty: 2000,
   //       to_year: 1400,
   //    },
   // ]);
   // setBillInfo({
   //    bill_details: [],
   //    bills: [],
   //    last_bill_info: {
   //       bill_no: '1000',
   //       payment_no: '1000',
   //       value_to_pay: 1000,
   //    },
   // });
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
