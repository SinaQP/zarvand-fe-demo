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
            اطلاعاتی برای شما یافت نشد. در صورت مشاهده مغایرت، به قسمت پشتیبانی مراجعه فرمایید.
         </div>
      </div>
   );
};

export default NoRenovationChargesMessage;
