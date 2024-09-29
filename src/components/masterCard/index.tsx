import { FC } from 'react';
import styles from './index.module.scss';
import { Props } from './index.interface';
import AddressSection from './addressSection';
import ButtonGroup from './buttonGroup';

const MasterCard: FC<Props> = ({ isPayed, children }) => {
   const badgeText = isPayed ? 'پرداخت شده' : 'پرداخت نشده';

   return (
      <div className={`${styles.card} ${isPayed && styles['is-payed']}`}>
         <AddressSection address={''} />

         {children}

         <ButtonGroup isPayed={isPayed} />

         <div className={styles.badge}>
            {badgeText}
         </div>
      </div>
   );
};

export default MasterCard;
