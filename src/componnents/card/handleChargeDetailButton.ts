import { Dispatch, SetStateAction } from 'react';
import { Renovation } from '../../App.context';

const handleChargeDetailButton = (
   setSelectedCharge: Dispatch<SetStateAction<Renovation | null>>,
   charge: Renovation,
   history: { push: (url: string) => void },
) => {
   setSelectedCharge(charge);
   history.push('/payment');
};

export default handleChargeDetailButton;
