import { FC, useState } from 'react';
import { Props } from './index.interface';
import styles from './index.module.scss';
import Header from './header';
import { LayoutContext } from './layout.context';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
   const [badgeClassName, setBadgeClassName] = useState<string>('');
   return (
      <LayoutContext.Provider
         value={{
            headerBadge: '',
            extraHeaderContent: '',
            badgeClassName: badgeClassName,
            setBadgetClassName: setBadgeClassName,
         }}
      >
         <div className={styles.layout}>
            <Header className={''} />
            {/* <main className={`${styles.main} ${className}`}>{children}</main> */}
            <Outlet />
            <Footer />
         </div>
      </LayoutContext.Provider>
   );
};
export default Layout;
