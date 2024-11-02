import {
   RenovationCharge,
   TradeCharge,
} from '../../interfaces/models.interface';

export async function postPayCharge(
   charge: TradeCharge | RenovationCharge,
   token: string,
): Promise<any> {
   try {
      const backendUrl = import.meta.env.VITE_APP_BACKEND;
      const url: string = backendUrl + `/zarvand/saman-ipg/initiate/`;

      const result = await fetch(url, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify({ bill_id: charge.last_bill_info?.bill_id }),
      });
      return result;
   } catch (error) {
      return error;
   }
}
