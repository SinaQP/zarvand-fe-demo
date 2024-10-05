import { FC, useContext } from 'react';
import Layout from '../../components/layout';
import styles from './index.module.scss';
import { AppContext } from '../../App.context';
import ComingSoonText from '../../components/comingSoonText';
import useWindowWidth from '../../hooks/useWindowWidth';
import whiteSquareIcon from '../../assets/images/white.squares.svg';

const Home: FC = () => {
   const { user } = useContext(AppContext);
   const whiteSquares = useWindowWidth(
      <img src={whiteSquareIcon} className={styles['white-square']} />,
      null,
   );
   return (
      <Layout headerClassName={styles.header} className={styles.layout}>
         <section className={styles.main}>
            <div className={styles['welcome-text']}>
               {user ? user.name : ''} عزیز ! خوش آمدید. امیدواریم تجربه‌ای سریع
               و آسان در مدیریت عوارض شهری داشته باشید.
            </div>
            <ComingSoonText />
            {whiteSquares}
         </section>
      </Layout>
   );
};

export default Home;
