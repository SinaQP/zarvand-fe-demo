import { Dispatch, SetStateAction } from 'react';
import {
   BillDetail,
   BillInfo,
   RenovationCharge,
   TradeCharge,
} from '../interfaces/models.interface';

const resetChargeStates = async (
   setSelectedTradeCharge: Dispatch<SetStateAction<TradeCharge | null>>,
   setSelectedRenovationCharge: Dispatch<
      SetStateAction<RenovationCharge | null>
   >,
   setShowPaymentHistory: Dispatch<SetStateAction<boolean>>,
) => {
   await setSelectedTradeCharge(null);
   await setSelectedRenovationCharge(null);
   await setShowPaymentHistory(false);
};
export default resetChargeStates;
