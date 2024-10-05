import { FC, useContext } from 'react';
import Layout from '../../components/layout';
import styles from './index.module.scss';
import { AppContext } from '../../App.context';
import ComingSoonText from '../../components/comingSoonText';

const Home: FC = () => {
   const { user } = useContext(AppContext);
   return <Layout headerClassName={styles.header} className={styles.layout}>
      <div className={styles['welcome-text']}>
         {user ? user.name : ''} عزیز ! خوش آمدید.
         امیدواریم تجربه‌ای سریع و آسان در مدیریت عوارض شهری داشته باشید.
      </div>
      <ComingSoonText />
   </Layout>;
};

export default Home;
