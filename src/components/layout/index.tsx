import { FC } from 'react';
import { Props } from './index.interface';
import styles from './index.module.scss';
import Header from './header';
import { LayoutContext } from './layout.context';

const Layout: FC<Props> = ({ headerBadge, children }) => {
   return (
      <LayoutContext.Provider value={{ headerBadge }}>
         <div className={styles.layout}>
            <Header />
            <main>{children}</main>
         </div>
      </LayoutContext.Provider>
   );
};

export default Layout;
