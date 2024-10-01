import { FC } from 'react';
import Layout from '../../components/layout';
import styles from './index.module.scss';
import ComingSoonText from '../../components/comingSoonText';

const Support: FC = () => {
   return <Layout headerClassName={styles.header} className={styles.layout}><ComingSoonText /></Layout>;
};

export default Support;
