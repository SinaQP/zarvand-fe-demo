import { FC } from 'react';
import styles from './index.module.scss';
import { Props } from './index.interface';
import ButtonGroup from './buttonGroup';
import AddressSection from '../addressSection';

const MasterCard: FC<Props> = ({
                                  isPayed,
                                  children,
                                  address,
                                  master,
               }) => {
   const badgeText = isPayed ? 'پرداخت شده' : 'پرداخت نشده';

   return (
      <div className={`${styles.card} ${isPayed && styles['is-payed']}`}>
         <AddressSection address={address ? address : ''} />

         {children}

         <ButtonGroup isPayed={isPayed} charge={master} />

         <div className={styles.badge}>
            {badgeText}
         </div>
      </div>
   );
};

export default MasterCard;
