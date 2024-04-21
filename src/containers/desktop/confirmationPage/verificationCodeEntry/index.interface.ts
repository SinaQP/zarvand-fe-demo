import { Dispatch, SetStateAction } from 'react';

export interface Props {
   setTimerDuration: Dispatch<SetStateAction<number>>;
   timerDuration: number;
   setTimerIntervalLoop: Dispatch<SetStateAction<NodeJS.Timer | null>>;
   timerIntervalLoop: NodeJS.Timer | null;
}
