import { Dispatch, SetStateAction } from 'react';
import { FetchResult } from '../../../../apis/fetch.interface';
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
   const { body, status } = result as FetchResult;
   if (status === 200) {
      const htmlContent = await new Response(body).text;
      navigate('/bank-portal', { state: htmlContent });
      return htmlContent;
   } else {
      return null;
   }
};

export default payCharges;
