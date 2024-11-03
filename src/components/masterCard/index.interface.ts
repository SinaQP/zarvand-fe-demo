import { Dispatch, ReactNode, SetStateAction } from 'react';
import {
   RenovationCharge,
   TradeCharge,
} from '../../interfaces/models.interface';

export interface Props {
   address?: string;
   isPayed?: boolean;
   children?: ReactNode;
   className?: string;
   addressSectionClassName?: string;
   master: TradeCharge | RenovationCharge;
   showButtons?: boolean;
}
