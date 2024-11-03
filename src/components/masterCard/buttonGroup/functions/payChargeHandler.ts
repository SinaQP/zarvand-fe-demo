import { postPayCharge } from '../../../../apis/trade/pay-charge';
import {
   RenovationCharge,
   TradeCharge,
} from '../../../../interfaces/models.interface';
import { NavigateFunction } from 'react-router-dom';

const payCharges = async (
   charge: TradeCharge | RenovationCharge,
   token: string,
   navigate: NavigateFunction,
) => {
   const result = await postPayCharge(charge, token);
   const htmlContent = await new Response(result.body).text();
   navigate('/bank-portal', { state: htmlContent });

   return htmlContent;
};

export default payCharges;
