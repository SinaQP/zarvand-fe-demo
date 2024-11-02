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
   console.log(charge);
};

export default payCharges;
