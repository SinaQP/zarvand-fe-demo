import { FC } from 'react';
import styles from './headerBadge.module.scss';
import MunicipalityLogo from '../../../assets/images/municipality-logo.bmp';

const HeaderBadge: FC = () => {
   return <div className={styles['header-badge']}>
      <img src={MunicipalityLogo} alt="Municipality Logo" />
   </div>;

};
export default HeaderBadge;