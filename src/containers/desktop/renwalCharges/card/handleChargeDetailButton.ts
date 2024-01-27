import { Dispatch, SetStateAction } from 'react';

const handleChargeDetailButton = (
   setSelectedChargeIdToView: Dispatch<SetStateAction<string>>,
   masterId: string,
   history: { push: (url: string) => void },
) => {
   setSelectedChargeIdToView(masterId);
   history.push('/payment');
};

export default handleChargeDetailButton;
