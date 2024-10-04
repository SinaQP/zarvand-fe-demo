import { FC, ReactNode } from 'react';
import styles from './index.module.scss';

const TimeLine: FC<{
   fromYear: string;
   toYear: string;
   children?: ReactNode;
}> = ({ fromYear, toYear, children }) => {
   return (
      <div className={styles['time-line']}>
            <div className={styles['path-line']}></div>
            <span className={styles['from-year']}>از سال {fromYear}</span>
            {children}
            <span>تا سال {toYear}</span>
      </div>
   );
};

export default TimeLine;
