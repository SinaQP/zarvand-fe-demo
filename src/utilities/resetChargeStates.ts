import { Dispatch, SetStateAction } from 'react';
import {
   BillDetail,
   BillInfo,
   RenovationCharge,
   TradeCharge,
} from '../interfaces/models.interface';

const resetChargeStates = (
   setSelectedTradeCharge: Dispatch<SetStateAction<TradeCharge | null>>,
   setSelectedRenovationCharge: Dispatch<
      SetStateAction<RenovationCharge | null>
   >
) => {
   setSelectedTradeCharge(null);
   setSelectedRenovationCharge(null);
};
export default resetChargeStates;
