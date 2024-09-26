import { Dispatch, SetStateAction } from 'react';

export function startCountdownProgressBar(
   timerDurationSeconds: number,
   setTimerDuration: Dispatch<SetStateAction<number>>,
   progressBarDiv: React.RefObject<HTMLDivElement>,
   counterSpan: React.RefObject<HTMLSpanElement>,
   timerIntervalLoop: any,
   setTimerIntervalLoop: Dispatch<SetStateAction<NodeJS.Timer | null>>,
): void {
   if (timerIntervalLoop) clearInterval(timerIntervalLoop);
   let remainingTime: number = timerDurationSeconds;
   let remainingPercentage: number;
   const timerInterval = setInterval(() => {
      remainingTime -= 1;
      remainingPercentage = (remainingTime * 100) / timerDurationSeconds;
      if (counterSpan.current && progressBarDiv.current) {
         counterSpan.current.style.transform = `rotate(${
            (100 - remainingPercentage) * 3.6
         }deg)`;
         progressBarDiv.current.style.background = `conic-gradient(white ${
            (100 - remainingPercentage) * 3.6
         }deg, white 0deg)`;
         if (remainingTime <= 0) {
            clearInterval(timerInterval);
            setTimerDuration(0);
            setTimerIntervalLoop(null);
         }
      }
   }, 1000);
   setTimerIntervalLoop(timerInterval);
}
