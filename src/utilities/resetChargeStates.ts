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
   setSelectedChargeBillDetails: Dispatch<SetStateAction<BillDetail[] | null>>,
   setSelectedChargeBillInfo: Dispatch<SetStateAction<BillInfo | null>>,
) => {
   setSelectedTradeCharge(null);
   setSelectedChargeBillDetails(null);
   setSelectedChargeBillInfo(null);
   setSelectedRenovationCharge(null);
};
export default resetChargeStates;
