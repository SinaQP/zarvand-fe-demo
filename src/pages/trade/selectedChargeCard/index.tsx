import { FC } from 'react';
import UnPayedDetails from './unPayedDetails';

const SelectedChargeCard: FC<{ isPayed: boolean }> = ({ isPayed }) => {

   return (
      isPayed ? <></> : <UnPayedDetails />


   );

};

export default SelectedChargeCard;