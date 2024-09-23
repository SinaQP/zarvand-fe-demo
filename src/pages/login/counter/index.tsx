import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Props } from './index.interface';
import Timer from './timer';

const CounterBadge: FC<Props> = ({ initialCount }) => {
   const [timerDuration, setTimerDuration] = useState(initialCount);
   const [count, setCount] = useState(initialCount);
   const [timerIntervalLoop, setTimerIntervalLoop] = useState<NodeJS.Timer | null>(null);


   useEffect(() => {
      const interval = setInterval(() => {
         if (count > 0) {
            setCount(prev => prev - 1);
         } else {
            clearInterval(interval);
         }
      }, 1000); // Adjust the interval as needed

      return () => clearInterval(interval);
   }, [count]);
   return (
      <div className={styles.badge}>
         <Timer timerDuration={timerDuration} setTimerDuration={setTimerDuration} timerIntervalLoop={timerIntervalLoop}
                setTimerIntervalLoop={setTimerIntervalLoop}>
            <span>{count}</span>
            <span>ثانیه</span>
         </Timer>
      </div>
   );
};

export default CounterBadge;