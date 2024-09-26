import { FC } from 'react';
import Layout from '../../components/layout';
import styles from './index.module.scss';

const Home: FC = () => {
   return <Layout headerClassName={styles.header}>HOME</Layout>;
};

export default Home;
