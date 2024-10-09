import { FC, useEffect, useState } from 'react';
import { Props } from './index.interface';
import styles from './index.module.scss';

const StatusTab: FC<Props> = ({ statuses, onClick }) => {
   const [activeIndex, setActiveIndex] = useState<number>(
      statuses.findIndex((status) => status.isActive),
   );
   useEffect(() => {
      const activeIndex = statuses.findIndex((status) => status.isActive);
      setActiveIndex(activeIndex);
   }, [statuses]);

   return (
      <div className={styles.statusTab}>
         <div className={styles.header}>
            <span> ملک‌های زیر در سیستم برای شما ثبت شده است</span>
            <div className={styles.statues}>
               {statuses.map((value) => (
                  <div
                     className={`${value.isActive && styles.isActive}`}
                     onClick={() => onClick(value)}
                  >
                     <span>{value.label}</span>
                     <img src={value.icon} />
                  </div>
               ))}
            </div>
         </div>
         <div className={styles['progress-bar']}>
            <div
               className={styles['active-bar']}
               style={{ left: `${21 * activeIndex + 0.3}rem` }}
            ></div>
         </div>
      </div>
   );
};

export default StatusTab;
