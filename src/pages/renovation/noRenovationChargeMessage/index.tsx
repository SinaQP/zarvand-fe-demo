import { FC } from 'react';
import NoRenovationMobileIcon from '../../../assets/images/no-renovation-mobile.svg';
import NoRenovationDesktopIcon from '../../../assets/images/no-renovation-desktop.svg';
import styles from './index.module.scss';
import useWindowWidth from '../../../hooks/useWindowWidth';

const NoRenovationChargesMessage: FC = () => {
   const noRenovationIconSrc = useWindowWidth(NoRenovationDesktopIcon, NoRenovationMobileIcon);
   return (
      <div className={styles.container}>
         <img src={noRenovationIconSrc} alt="There Is No Renovation Charge" />
         <div className={styles['message-box']}>
            ملکی برای شما در سیستم ثبت نشده برای اطلاعات بیشتر به شهرداری مراجعه
            کنید !
         </div>
      </div>
   );
};

export default NoRenovationChargesMessage;
