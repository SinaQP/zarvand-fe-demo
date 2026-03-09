import { FetchResult } from '../../../../apis/fetch.interface';
import { postPayCharge } from '../../../../apis/trade/pay-charge';
import {
   RenovationCharge,
   TradeCharge,
} from '../../../../interfaces/models.interface';
import { NavigateFunction } from 'react-router-dom';
import { IS_DEMO_MODE } from '../../../../config/env';
import { payDemoCharge } from '../../../../demo/service';

const payCharges = async (
   charge: TradeCharge | RenovationCharge,
   token: string,
   navigate: NavigateFunction,
) => {
   if (IS_DEMO_MODE) {
      const chargeType = 'certificate_number' in charge ? 'Renovation' : 'Trade';
      const result = await payDemoCharge({
         token,
         masterId: charge.master_id,
         chargeType,
      });

      if (result.status === 200) {
         const payment = result.body.payment;
         const query = new URLSearchParams({
            status: String(payment.status),
            bill_no: payment.bill_no,
            pay_no: payment.pay_no,
            amount: String(payment.amount),
            time: payment.time,
            trace_no: payment.trace_no,
         }).toString();

         navigate(`/payment-status?${query}`);
      }

      return result;
   }

   const result = await postPayCharge(charge, token);
   const { body, status } = result as FetchResult;
   if (status === 200) {
      const htmlContent = await new Response(body).text();
      navigate('/bank-portal', { state: htmlContent });
      return htmlContent;
   } else {
      return null;
   }
};

export default payCharges;
