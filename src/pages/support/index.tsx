import { FC, useEffect } from 'react';
import Layout from '../../components/layout';
import styles from './index.module.scss';
import ComingSoonText from '../../components/comingSoonText';
import { useLayoutContext } from '../../components/layout/layout.context';

const Support: FC = () => {
   const { setHeaderId, setHeaderSubtitle } = useLayoutContext();
   const supportNumber = import.meta.env.VITE_APP_SUPPORT_NUMBER || 'نامشخص';

   useEffect(() => {
      setHeaderSubtitle('');
      setHeaderId && setHeaderId(styles['header']);
   }, []);

   return (
      <div className={styles.supportStyleWrapper}>
         <div className={styles.infoCard}>
            <h3>ارتباط با پشتیبانی</h3>
            <span>شماره تماس: {supportNumber}</span>
         </div>
      </div>
   );
};

export default Support;
