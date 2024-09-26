/* eslint-disable no-restricted-globals */
import styles from './index.module.scss';
import ProfileIcon from './components/profileIcon';
import OperatorIcon from './components/operatorIcon';
import HomeIcon from './components/homeIcon';
import BrickWallsIcon from './components/brickWallsIcon';
import ShopIcon from './components/shop';
import { FC } from 'react';

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

   const hideBtns = location.pathname === '/login';
   const currentRoute = location.pathname.toLowerCase();

   const handleRedirect = (route: string) => {
      location.assign(route);
   };
   return (
      <footer id={styles.footerStyleWrapper}>
         {!hideBtns &&
            footerIconsList.map((icon, idx) => {
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
