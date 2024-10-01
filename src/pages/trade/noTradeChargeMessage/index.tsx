import { FC } from 'react';
import NoTradeIcon from '../../../assets/images/no-trade.svg';
import styles from "./index.module.scss";

const NoTradeChargesMessage: FC = () => (
   <div>
      <img src={NoTradeIcon} alt="There Is No Trade Charge" />
      <div className={styles['message-box']}>
         کسبی برای شما در سیستم ثبت نشده برای اطلاعات بیشتر به شهرداری مراجعه کنید!
      </div>
   </div>
);

export default NoTradeChargesMessage;