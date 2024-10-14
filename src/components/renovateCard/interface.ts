import { Bill } from '../../interfaces/models.interface';

export interface RenovateCardProps {
   Bill: Bill | undefined;
   theme?: 'primary' | 'secondary';
   paymentStatus: boolean;
}
