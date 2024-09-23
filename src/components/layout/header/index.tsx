import { FC } from 'react';
import styles from './index.module.scss';
import { useLayoutContext } from '../layout.context';
import HeaderBadge from './headerBadge';

const Header: FC = () => {
   const { headerBadge } = useLayoutContext();
   return <header className={styles.header}>
      <h1>سامانه پرداخت عوارض شهرداری زرند</h1>
      {!headerBadge ? <HeaderBadge /> : headerBadge}
   </header>;
};

export default Header;