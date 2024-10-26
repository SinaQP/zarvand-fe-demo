import { FC, useEffect } from 'react';
import Layout from '../../components/layout';
import styles from './index.module.scss';
import ComingSoonText from '../../components/comingSoonText';
import { useLayoutContext } from '../../components/layout/layout.context';

const Support: FC = () => {
   const { setHeaderId } = useLayoutContext();

   useEffect(() => {
      setHeaderId && setHeaderId(styles['header']);
   }, []);

   return (
      <div className={styles.supportStyleWrapper}>
         <ComingSoonText />
      </div>
   );
};

export default Support;
