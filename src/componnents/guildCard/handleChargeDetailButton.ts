import { Dispatch, SetStateAction } from 'react';
import { Guild } from '../../App.context';

const handleChargeDetailButton = (
   setSelectedGuildCharge: Dispatch<SetStateAction<Guild | null>>,
   guildCharge: Guild,
   history: { push: (url: string) => void },
) => {
   setSelectedGuildCharge(guildCharge);
   history.push('/payment-guild');
};

export default handleChargeDetailButton;
