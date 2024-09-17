import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface Props {
   setTimerDuration: Dispatch<SetStateAction<number>>;
   setTimerIntervalLoop: Dispatch<SetStateAction<NodeJS.Timer | null>>;
   timerIntervalLoop: NodeJS.Timer | null;
   timerDuration: number;
   children: ReactNode;
}
