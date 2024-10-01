import { ReactNode } from 'react';
import { RenovationCharge, TradeCharge } from '../../App.interface';

export interface Props {
   address?: string;
   isPayed?: boolean;
   children?: ReactNode;
   master: TradeCharge | RenovationCharge;
}
