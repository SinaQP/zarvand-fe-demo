import { FC, useState } from 'react';
import styles from './index.module.scss';
import { Props } from './index.interface';
import ButtonGroup from './buttonGroup';
import AddressSection from '../addressSection';

const MasterCard: FC<Props> = ({
   isPayed,
   children,
   address,
   master,
   className,
   addressSectionClassName,
}) => {
   const badgeText = isPayed ? 'پرداخت شده' : 'پرداخت نشده';
   const [bankPortal, setBankPortal] = useState('');

   return (
      <div
         className={`${styles.card} ${
            isPayed && styles['is-payed']
         } ${className}`}
      >
         <AddressSection
            address={address ? address : ''}
            className={addressSectionClassName}
         />
         {bankPortal && (
            <div dangerouslySetInnerHTML={{ __html: bankPortal }}></div>
         )}

         {children}

         <ButtonGroup
            setBankPortal={setBankPortal}
            isPayed={isPayed}
            charge={master}
         />

         <div className={styles.badge}>{badgeText}</div>
      </div>
   );
};

export default MasterCard;
