import { FC } from 'react';
import BackArrowIcon from '../../assets/images/back-arrow.svg';
import styles from './index.module.scss';
import { BackArrowProps } from './interface';

const BackArrow: FC<BackArrowProps> = (props) => {
   return (
      <div
         {...props}
         className={`${props.className} ${styles['back-arrow']} ${
            props.status === 'pending' ? styles.pending : styles.paid
         }`}
      >
         <div className={styles.arrow}>
            <img src={BackArrowIcon} alt="back-arrow" />
         </div>
         <span>{props.pageTitle || ''}</span>
      </div>
   );
};

export default BackArrow;
