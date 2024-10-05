import { Dispatch, SetStateAction } from 'react';

export function setTimer(
   time: number,
   setTimerDuration: Dispatch<SetStateAction<number>>,
) {
   const progressBar: HTMLDivElement = document.getElementById(
      'progress-bar',
   )! as HTMLDivElement;
   const counter: HTMLSpanElement = document.getElementById(
      'counter',
   )! as HTMLSpanElement;
   counter.style.transform = `rotate(0deg)`;
   progressBar.style.background = `conic-gradient(#D3682B 0deg, #D3682B 0deg)`;
   progressBar.style.transform = `rotate(0deg)`;

   setTimerDuration(time);
}
