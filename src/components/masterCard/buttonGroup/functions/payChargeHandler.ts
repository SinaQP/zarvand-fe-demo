import { FetchResult } from '../../../../apis/fetch.interface';
import { postPayCharge } from '../../../../apis/trade/pay-charge';
import {
   RenovationCharge,
   TradeCharge,
} from '../../../../interfaces/models.interface';

const payCharges = async (
   charge: TradeCharge | RenovationCharge,
   token: string,
) => {
   const result = await postPayCharge(charge, token);
   console.log('>>> test', result.body as ReadableStream);
   const htmlContent = await new Response(result.body).text();
   console.log('>>> html content', htmlContent);

   return htmlContent;
};

export default payCharges;
