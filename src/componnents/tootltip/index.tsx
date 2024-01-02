import { TooltipProps } from './index.interface';
import styles from './scss/index.module.scss';

const Tooltip: React.FC<TooltipProps> = ({ children, textContent }) => {
  return (
    <div className={styles['tooltipContainer']}>
      <div className={styles['text']}>
        {textContent}
        <div className={styles['pointContainer']}>
          <div className={styles['point']}></div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
