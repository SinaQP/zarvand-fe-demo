import { FC, useEffect, useRef } from 'react';
import { Props } from './index.interface';
import './index.scss';
import { startCountdownProgressBar } from './functions/startCountdown';

const Timer: FC<Props> = ({
                             children,
                             setTimerDuration,
                             timerDuration,
                             setTimerIntervalLoop,
                             timerIntervalLoop,
                          }) => {
   const progressBarDiv = useRef<HTMLDivElement>(null);
   const counterSpan = useRef<HTMLSpanElement>(null);

   useEffect(() => {
      startCountdownProgressBar(
         timerDuration,
         setTimerDuration,
         progressBarDiv,
         counterSpan,
         timerIntervalLoop,
         setTimerIntervalLoop,
      );
   }, [timerDuration]);

   return (
      <div className={'timer'}>
         <div
            className="timer__progress-bar"
            ref={progressBarDiv}
            id="progress-bar"
         ></div>
         <span className="timer__counter" ref={counterSpan} id="counter"></span>
         {children}
      </div>
   );
};

export default Timer;
