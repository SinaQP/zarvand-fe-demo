import { Dispatch, SetStateAction } from 'react';
import { Guild } from '../../../../App.context';

const handleChargeDetailButton = (
   setSelectedGuildCharge: Dispatch<SetStateAction<Guild | null>>,
   charge: Guild,
   history: { push: (url: string) => void },
) => {
   setSelectedGuildCharge(charge);
   history.push('/payment-guild');
};

export default handleChargeDetailButton;
