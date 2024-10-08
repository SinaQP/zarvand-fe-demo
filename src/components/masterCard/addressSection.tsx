import { FC } from 'react';
import locationPinIcon from '../../assets/images/location-pin.svg';
import styles from './index.module.scss';

const AddressSection: FC<{ address: string }> = ({ address }) => (
   <div className={styles['address-section']}>
      <img src={locationPinIcon} alt="location-pin" />
      <span>{address}</span>
   </div>
);

export default AddressSection;
