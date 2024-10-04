import { FC } from 'react';
import UnPayedDetails from './unPayedDetails';
import PayedDetails from './payedDetails';

const SelectedChargeCard: FC<{ isPayed: boolean }> = ({ isPayed }) => {
   return (
      // isPayed ? <PayedDetails /> : <UnPayedDetails />
      <UnPayedDetails />
   );
};

export default SelectedChargeCard;
