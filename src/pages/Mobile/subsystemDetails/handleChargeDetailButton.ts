import { Dispatch, SetStateAction } from 'react';
import { RenovationMaster } from '../../../App.context';

const handleChargeDetailButton = (
   setSelectedCharge: Dispatch<SetStateAction<RenovationMaster | null>>,
   charge: RenovationMaster,
   history: { push: (url: string) => void },
) => {
   setSelectedCharge(charge);
   history.push('/payment');
};

export default handleChargeDetailButton;
