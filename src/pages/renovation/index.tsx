import { FC } from 'react';
import Layout from '../../components/layout';
import styles from './index.module.scss';
import Card from './card';

const Renovation: FC = () => {
   return (
      <Layout headerClassName={styles.header}>
         <section className={styles.cards}>
            <Card />
            <Card isPayed/>
         </section>
      </Layout>
   );
};

export default Renovation;
