import { FC } from 'react';
import styles from './headerBadge.module.scss';
import MunicipalityLogo from '../../../assets/images/municipality-logo.png';
import { useLayoutContext } from '../layout.context';

const HeaderBadge: FC = () => {
   const { badgeClassName, badgeId, headerSubtitle } = useLayoutContext();
   return (
      <div
         className={`${styles['header-badge']} ${badgeClassName}`}
         id={badgeId}
      >
         <img src={MunicipalityLogo} alt="Municipality Logo" />
         <span className={styles['subtitle']}>{headerSubtitle}</span>
      </div>
   );
};
export default HeaderBadge;
