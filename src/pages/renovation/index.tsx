import { FC } from 'react';
import Layout from '../../components/layout';
import styles from './index.module.scss';
import InfoCard from '../../components/infoCard';
import Card from '../../components/masterCard';

const Renovation: FC = () => {
   return (
      <Layout headerClassName={styles.header}>
         <section className={styles.cards}>
            {/*<Card isPayed={false}>*/}
            {/*   <InfoCard title={'شماره شناسنامه ملک'} className={styles['certification-number-section']}*/}
            {/*             isPrimary={true}>*/}
            {/*      {['فرعی', 'ملک', 'بلوک', 'محله', 'منطقه'].map((item, index) => (*/}
            {/*         <span key={index}>{item}</span>*/}
            {/*      ))}*/}
            {/*      {['000', '0046', '0000201', '04', '000'].map((item, index) => (*/}
            {/*         <span key={index}>{item}</span>*/}
            {/*      ))}*/}
            {/*   </InfoCard>*/}
            {/*</Card>*/}
         </section>
      </Layout>
   );
};

export default Renovation;
