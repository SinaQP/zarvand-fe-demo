import { FC } from 'react';
import styles from './index.module.scss';

interface Props {
   title: string;
   value: string;
}

const InfoRow: FC<Props> = ({ title, value }) => {
   return (
      <div className={styles['info-row']}>
         <span>{title}</span>
         <span>{value}</span>
      </div>
   );
};

export default InfoRow;