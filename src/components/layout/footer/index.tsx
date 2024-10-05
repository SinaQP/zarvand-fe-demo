/* eslint-disable no-restricted-globals */
import styles from './index.module.scss';
import ProfileIcon from './components/profileIcon';
import OperatorIcon from './components/operatorIcon';
import HomeIcon from './components/homeIcon';
import BrickWallsIcon from './components/brickWallsIcon';
import ShopIcon from './components/shop';
import { FC, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../../App.context';
import resetChargeStates from '../../../utilities/resetChargeStates';

const Footer = () => {
   const footerIconsList: { title: string; icon: FC<any>; route: string }[] = [
      {
         title: 'پروفایل',
         icon: ProfileIcon,
         route: '/profile',
      },
      {
         title: 'پشتیبانی',
         icon: OperatorIcon,
         route: '/support',
      },
      {
         title: 'خانه',
         icon: HomeIcon,
         route: '/home',
      },
      {
         title: 'نوسازی',
         icon: BrickWallsIcon,
         route: '/renovation',
      },
      {
         title: 'کسب و پیشه',
         icon: ShopIcon,
         route: '/trade',
      },
   ];
   const isLoginPage = location.pathname === '/login';
   const {
      setSelectedTradeCharge,
      setSelectedChargeBillDetails,
      setSelectedChargeBillInfo,
      setSelectedRenovationCharge,
   } = useContext(AppContext);
   const currentRoute = location.pathname.toLowerCase();
   const history = useHistory();
   const handleRedirect = (route: string) => {
      history.push(route);
      resetChargeStates(
         setSelectedTradeCharge,
         setSelectedRenovationCharge,
         setSelectedChargeBillDetails,
         setSelectedChargeBillInfo,
      );
   };
   if (isLoginPage) return null;
   return (
      <footer id={styles.footerStyleWrapper}>
         {footerIconsList.map((icon, idx) => {
            const isRouteActive = icon.route.toLowerCase() === currentRoute;
            return (
               <div
                  className={`${styles.footerIcon} ${
                     isRouteActive ? styles.hasAnimation : ''
                  }`}
                  key={`${icon.title}-${idx}`}
                  onClick={() => handleRedirect(icon.route)}
               >
                  <icon.icon
                     className={isRouteActive && styles.icon}
                     color={isRouteActive ? 'black' : 'white'}
                  />
                  {!isRouteActive && (
                     <span className={styles.title}>{icon.title}</span>
                  )}
               </div>
            );
         })}
      </footer>
   );
};

export default Footer;
