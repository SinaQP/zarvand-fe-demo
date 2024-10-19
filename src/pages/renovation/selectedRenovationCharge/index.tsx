import { FC } from 'react';
import { useChargesContext } from '../../../App.context';
import UnPayedDetails from './unPayedDetail';
import PayedDetails from './payedDetail';

const SelectedRenovationCharge: FC<{ isPayed: boolean }> = ({ isPayed }) => {
   const { selectedRenovationCharge } = useChargesContext();
   if (!selectedRenovationCharge) return null;

   return (
      <div style={{ width: '100%' }}>
         {isPayed ? <PayedDetails /> : <UnPayedDetails />}
      </div>
   );
};

export default SelectedRenovationCharge;
