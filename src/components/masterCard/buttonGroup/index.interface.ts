import { RefObject } from 'react';
import {
   BillDetail,
   RenovationCharge,
   TradeCharge,
} from '../../../interfaces/models.interface';
import { PrintBill } from '../../pdfs/trdChargePdf/index.interface';

export interface TradePrintProps {
   isPrinting: boolean;
   printChargeBillDetails: BillDetail[] | null;
   printBill: PrintBill | null;
   charge: TradeCharge | RenovationCharge;
   chargeType: 'Trade' | 'Renovation' | null;
   componentRef: RefObject<HTMLDivElement>;
}
