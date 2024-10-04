import { Dispatch, SetStateAction } from 'react';
import { BillDetail, BillInfo, TradeCharge } from '../../../App.interface';

const resetChargeStates = (
      setSelectedTradeCharge: Dispatch<SetStateAction<TradeCharge | null>>,
      setSelectedChargeBillDetails: Dispatch<SetStateAction<BillDetail[] | null>>,
      setSelectedChargeBillInfo: Dispatch<SetStateAction<BillInfo | null>>,
   ) => {
      setSelectedTradeCharge(null);
      setSelectedChargeBillDetails(null);
      setSelectedChargeBillInfo(null);
   }
;


export default resetChargeStates;