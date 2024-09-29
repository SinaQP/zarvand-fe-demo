import { FC } from 'react';
import shareIcon from '../../assets/images/share.svg';
import payIcon from '../../assets/images/pay.svg';
import downloadIcon from '../../assets/images/download.svg';
import detailIcon from '../../assets/images/detail.svg';
import { NewButton as Button } from '../button';
import styles from './index.module.scss';

const ButtonGroup: FC<{ isPayed?: boolean }> = ({ isPayed }) => {
   const buttons = [
      { label: 'اشتراک گزاری', icon: shareIcon, alt: 'Share' },
      {
         label: isPayed ? 'دانلود' : 'پرداخت',
         icon: isPayed ? downloadIcon : payIcon,
         alt: isPayed ? 'Download' : 'Pay',
      },
      { label: 'جزییات', icon: detailIcon, alt: 'Detail' },
   ];

   return (
      <div className={styles.buttons}>
         {buttons.map((button, index) => (
            <Button key={index} className={styles.button}>
               <span>{button.label}</span>
               <img src={button.icon} alt={button.alt} />
            </Button>
         ))}
      </div>
   );
};

export default ButtonGroup;