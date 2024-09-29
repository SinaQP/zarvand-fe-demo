import { FC } from 'react';
import styles from './index.module.scss';
import { Props } from './interface';

const InfoCard: FC<Props> = ({ title, children, isPrimary, className }) => {
   return <div className={`${styles['info-masterCard']} ${isPrimary && styles['primary-info-masterCard']}`}>
      <span className={styles['title']}>
         {title}
      </span>
      <div className={`${styles['body']} ${className}`}>
         {children}
      </div>
   </div>;


};
export default InfoCard;