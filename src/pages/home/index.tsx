import { FC, useContext, useEffect } from 'react';
import styles from './index.module.scss';
import { useUserContext } from '../../App.context';
import ComingSoonText from '../../components/comingSoonText';
import useWindowWidth from '../../hooks/useWindowWidth';
import whiteSquareIcon from '../../assets/images/white.squares.svg';
import { useLayoutContext } from '../../components/layout/layout.context';

const Home: FC = () => {
   const { setHeaderId } = useLayoutContext();
   const { user } = useUserContext();
   const whiteSquares = useWindowWidth(
      <img src={whiteSquareIcon} className={styles['white-square']} />,
      null,
   );
   useEffect(() => {
      setHeaderId && setHeaderId(styles['header']);
   }, []);

   return (
      <section className={styles.main}>
         <div className={styles['welcome-text']}>
            <span>
               {user ? user.name : ''} عزیز ! خوش آمدید. امیدواریم تجربه‌ای سریع
               و آسان در مدیریت عوارض شهری داشته باشید.
            </span>
         </div>
         <ComingSoonText />
         {whiteSquares}
      </section>
   );
};

export default Home;
