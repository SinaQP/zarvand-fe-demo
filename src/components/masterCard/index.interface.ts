import { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';
import { RenovationCharge, TradeCharge } from '../../App.interface';
import { PrintBill } from '../pdfs/trdChargePdf/index.interface';
import { BillPrintProps } from '../pdfs/rnvChargePdf/index.interface';

export interface Props {
   address?: string;
   isPayed?: boolean;
   children?: ReactNode;
   master: TradeCharge | RenovationCharge;
}
