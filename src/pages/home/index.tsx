import {FC} from 'react';
import Layout from '../../components/layout';
import styles from './index.module.scss';

const Home: FC = () => {
    return <Layout headerClassName={styles.header} className={styles.layout}>
        <p className={styles['welcome-text']}>
            محمد حسین عزیز ! خوش آمدید.
            امیدواریم تجربه‌ای سریع و آسان در مدیریت عوارض شهری داشته باشید.
        </p>

        <span className={styles['coming-soon-text']}>به زودی</span>
    </Layout>;
};

export default Home;
