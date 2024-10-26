import { FC } from 'react';
import NoTradeMobileIcon from '../../../assets/images/no-trade-mobile.svg';
import NoTradeDesktopIcon from '../../../assets/images/no-trade-desktop.svg';
import styles from './index.module.scss';
import useWindowWidth from '../../../hooks/useWindowWidth';

const NoTradeChargesMessage: FC = () => {
   const noTradeIconSrc = useWindowWidth(NoTradeDesktopIcon, NoTradeMobileIcon);
   return (
      <div className={styles.container}>
         <img src={noTradeIconSrc} alt="There Is No Trade Charge" />
         <div className={styles['message-box']}>
            کسبی برای شما در سیستم ثبت نشده برای اطلاعات بیشتر به شهرداری مراجعه
            نمایید!
         </div>
      </div>
   );
};

export default NoTradeChargesMessage;
