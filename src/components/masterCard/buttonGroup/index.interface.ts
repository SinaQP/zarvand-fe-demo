import { RefObject } from 'react';
import {
   BillDetail,
   RenovationCharge,
   TradeCharge,
} from '../../../interfaces/models.interface';
import { PrintBill as TradePrintBill } from '../../pdfs/trdChargePdf/index.interface';
import { PrintBill as RnvPrintBill } from '../../pdfs/rnvChargePdf/index.interface';

export interface TradePrintProps {
   isPrinting: boolean;
   printChargeBillDetails: BillDetail[] | null;
   printBill: TradePrintBill | null;
   charge: TradeCharge | RenovationCharge;
   chargeType: 'Trade' | 'Renovation' | null;
   componentRef: RefObject<HTMLDivElement>;
}

export interface RenovationPrintProps {
   isPrinting: boolean;
   printChargeBillDetails: BillDetail[] | null;
   printBill: RnvPrintBill | null;
   charge: TradeCharge | RenovationCharge;
   chargeType: 'Trade' | 'Renovation' | null;
   componentRef: RefObject<HTMLDivElement>;
}