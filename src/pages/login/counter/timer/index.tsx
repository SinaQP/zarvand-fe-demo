import { FC, useEffect, useRef } from 'react';
import { Props } from './index.interface';
import styles from './index.module.scss';
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
      <div className={styles.timer}>
         <div
            className={styles['timer__progress-bar']}
            ref={progressBarDiv}
            id="progress-bar"
         ></div>
         <span className={styles['timer__counter']} ref={counterSpan} id="counter"></span>
         {children}
      </div>
   );
};

export default Timer;
