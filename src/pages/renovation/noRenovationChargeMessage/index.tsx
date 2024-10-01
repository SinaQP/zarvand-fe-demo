import { FC } from 'react';
import NoRenovationIcon from '../../../assets/images/no-renovation.svg';
import styles from './index.module.scss';

const NoRenovationChargesMessage: FC = () => (
   <div>
      <img src={NoRenovationIcon} alt="There Is No Renovation Charge" />
      <div className={styles['message-box']}>
         ملکی برای شما در سیستم ثبت نشده برای اطلاعات بیشتر به شهرداری مراجعه کنید !
      </div>
   </div>
);

export default NoRenovationChargesMessage;