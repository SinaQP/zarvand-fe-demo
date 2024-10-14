import { FC } from 'react';
import styles from './index.module.scss';

interface Props {
   title: string;
   value: string;
   className?: string;
}

const InfoRow: FC<Props> = ({ title, value, className }) => {
   return (
      <div className={`${styles['info-row']} ${className}`}>
         <span>{title}</span>
         <span>{value}</span>
      </div>
   );
};

export default InfoRow;
