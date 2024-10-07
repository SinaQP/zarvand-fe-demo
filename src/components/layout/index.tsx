import styles from './index.module.scss';
import Header from './header';
import { useLayoutContext } from './layout.context';
import Footer from './footer';
import { Outlet } from 'react-router-dom';
import { LayoutProvider } from './layout.provider';

const Layout = () => {
   const { className } = useLayoutContext();
   return (
      <div className={styles.layout}>
         <Header />
         <main className={`${styles.main} ${className}`}>
            <Outlet />
         </main>
         <Footer />
      </div>
   );
};
export default Layout;
