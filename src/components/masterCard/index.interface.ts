import { ReactNode } from 'react';
import { TradeCharge } from '../../App.interface';

export interface Props {
   address?: string;
   isPayed?: boolean;
   children?: ReactNode;

   master: TradeCharge;
}
