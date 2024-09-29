import { FC } from 'react';
import { Props } from './index.interface';
import styles from './index.module.scss';
import Header from './header';
import { LayoutContext } from './layout.context';
import Footer from './footer';

const Layout: FC<Props> = ({ headerBadge, className, children, extraHeaderContent, headerClassName }) => {
   return (
      <LayoutContext.Provider value={{ headerBadge, extraHeaderContent }}>
         <div className={styles.layout}>
            <Header className={headerClassName} />
            <main className={`${styles.main} ${className}`}>{children}</main>
            <Footer />
         </div>
      </LayoutContext.Provider>
   );
};

export default Layout;
