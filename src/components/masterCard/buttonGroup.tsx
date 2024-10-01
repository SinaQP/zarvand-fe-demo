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
   const { setSelectedTradeCharge, setSelectedRenovationCharge } = useContext(AppContext);
   const buttons = [
      { label: 'اشتراک گزاری', icon: shareIcon, alt: 'Share' },
      {
         label: isPayed ? 'دانلود' : 'پرداخت',
         icon: isPayed ? downloadIcon : payIcon,
         alt: isPayed ? 'Download' : 'Pay',
      },
      {
         label: 'جزییات', icon: detailIcon, alt: 'Detail', onClick: () => {
            if ('certificate_number' in charge) {
               setSelectedRenovationCharge(charge);
            } else if ('TradeType' in charge) {
               setSelectedTradeCharge(charge);
            }
            console.log(charge);
         },
      },
   ];

   return (
      <div className={styles.buttons}>
         {buttons.map((button, index) => (
            <Button key={index} className={styles.button} onClick={button.onClick}>
               <span>{button.label}</span>
               <img src={button.icon} alt={button.alt} />
            </Button>
         ))}
      </div>
   );
};

export default ButtonGroup;