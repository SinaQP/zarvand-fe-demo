import { FC, useContext } from 'react';
import shareIcon from '../../assets/images/share.svg';
import payIcon from '../../assets/images/pay.svg';
import downloadIcon from '../../assets/images/download.svg';
import detailIcon from '../../assets/images/detail.svg';
import { NewButton as Button } from '../button';
import styles from './index.module.scss';
import { AppContext } from '../../App.context';
import { RenovationCharge, TradeCharge } from '../../App.interface';

const ButtonGroup: FC<{ isPayed?: boolean, charge: TradeCharge | RenovationCharge }> = ({ isPayed, charge }) => {
   const { setSelectedTradeCharge, selectedChargeBillInfo, setSelectedRenovationCharge } = useContext(AppContext);
   const buttons = [
      false ? { label: 'اشتراک گزاری', icon: shareIcon, alt: 'Share' } : null,
      {
         label: isPayed ? 'دانلود' : 'پرداخت',
         icon: isPayed ? downloadIcon : payIcon,
         alt: isPayed ? 'Download' : 'Pay',
      },
      !selectedChargeBillInfo ? {
         label: 'جزئیات',
         icon: detailIcon,
         alt: 'Detail',
         onClick: () => {
            if ('certificate_number' in charge) {
               setSelectedRenovationCharge(charge);
            } else if ('TradeType' in charge) {
               setSelectedTradeCharge(charge);
            }
            console.log(charge);
         },
      } : null,
   ];
   const visibleButtons = buttons.filter(button => button !== null);

   return (
      <div className={`${styles.buttons} ${visibleButtons.length === 1 ? styles.center : styles.spaceBetween}`}>
         {buttons.map((button, index) => button && (
            <Button key={index} className={styles.button} onClick={button.onClick}>
               <span>{button.label}</span>
               <img src={button.icon} alt={button.alt} />
            </Button>
         ))}
      </div>
   );
};

export default ButtonGroup;