import { FC } from 'react';
import { Props } from './index.interface';
import styles from './index.module.scss';
import Header from './header';
import { LayoutContext } from './layout.context';

const Layout: FC<Props> = ({ headerBadge, children, extraHeaderContent }) => {
   return (
      <LayoutContext.Provider value={{ headerBadge, extraHeaderContent }}>
         <div className={styles.layout}>
            <Header />
            <main>{children}</main>
         </div>
      </LayoutContext.Provider>
   );
};

export default Layout;
