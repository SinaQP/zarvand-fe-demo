import { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';
import { PrintBill } from '../pdfs/trdChargePdf/index.interface';
import { BillPrintProps } from '../pdfs/rnvChargePdf/index.interface';
import {
   RenovationCharge,
   TradeCharge,
} from '../../interfaces/models.interface';

export interface Props {
   address?: string;
   isPayed?: boolean;
   children?: ReactNode;
   master: TradeCharge | RenovationCharge;
}
