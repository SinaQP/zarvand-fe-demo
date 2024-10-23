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
   >,
   setShowPaymentHistory: Dispatch<SetStateAction<boolean>>,
) => {
   setSelectedTradeCharge(null);
   setSelectedRenovationCharge(null);
   setShowPaymentHistory(false);
};
export default resetChargeStates;
