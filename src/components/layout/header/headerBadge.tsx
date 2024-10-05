import { FC } from 'react';
import styles from './headerBadge.module.scss';
import MunicipalityLogo from '../../../assets/images/municipality-logo.png';
import { useLayoutContext } from '../layout.context';

const HeaderBadge: FC = () => {
   const { badgeClassName } = useLayoutContext();
   return (
      <div className={`${styles['header-badge']} ${badgeClassName}`}>
         <img src={MunicipalityLogo} alt="Municipality Logo" />
      </div>
   );
};
export default HeaderBadge;
