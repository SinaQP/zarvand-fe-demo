import { Dispatch, SetStateAction } from 'react';

export interface Props {
   setTimerDuration: Dispatch<SetStateAction<number>>;
   setTimerInterval: Dispatch<SetStateAction<NodeJS.Timer | null>>;
}
