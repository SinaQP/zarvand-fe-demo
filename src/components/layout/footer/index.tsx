import styles from './index.module.scss';
import ProfileIcon from './components/profileIcon';
import OperatorIcon from './components/operatorIcon';
import HomeIcon from './components/homeIcon';
import BrickWallsIcon from './components/brickWallsIcon';
import ShopIcon from './components/shop';
import { ReactNode, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../../App.context';
import resetChargeStates from '../../../utilities/resetChargeStates';
import { IconType, RouteType } from './index.interface';

const Footer = () => {
   const footerIconsList: IconType[] = [
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

   const {
      setSelectedTradeCharge,
      setSelectedChargeBillDetails,
      setSelectedChargeBillInfo,
      setSelectedRenovationCharge,
   } = useContext(AppContext);
   const history = useHistory();
   const isLoginPage = history.location.pathname === '/login';

   const [currentRoute, setCurrentRoute] = useState<RouteType>({
      route: history.location.pathname.toLowerCase(),
      id: 0,
   });
   const [selectedRoute, setSelectedRoute] = useState<RouteType | null>(null);
   useEffect(() => {
      for (let i = 0; i < footerIconsList.length; i++) {
         footerIconsList[i].route === currentRoute.route &&
            setCurrentRoute((prev) => {
               return { ...prev, id: i };
            });
      }
   }, []);

   const handleRedirect = (icon: IconType, id: number) => {
      setSelectedRoute({ route: icon.route, id: id });
      resetChargeStates(
         setSelectedTradeCharge,
         setSelectedRenovationCharge,
         setSelectedChargeBillDetails,
         setSelectedChargeBillInfo,
      );

      setTimeout(() => {
         history.push(icon.route);
      }, 600);
   };

   const assignAnimation = (id: number, isActive: boolean): string => {
      if (selectedRoute && isActive) {
         const distance = `${Math.abs(selectedRoute.id - id) * 7.5}rem`;
         const footerIconElement = document.querySelectorAll(
            `.${styles.footerIcon}`,
         )[id];
         (footerIconElement as HTMLDivElement)?.style.setProperty(
            '--translate-x',
            distance,
         );

         if (selectedRoute.id > id) {
            return styles.MTLAnimation;
         } else {
            return styles.MTRAnimation;
         }
      } else {
         return '';
      }
   };

   if (isLoginPage) return null;
   return (
      <footer id={styles.footerStyleWrapper}>
         {footerIconsList.map((icon, idx) => {
            const isRouteActive =
               icon.route.toLowerCase() === currentRoute.route;

            return (
               <div
                  className={`${styles.footerIcon} ${
                     isRouteActive ? styles.active : ''
                  } ${assignAnimation(idx, isRouteActive)} ${
                     selectedRoute?.route === icon.route
                        ? styles.selectedIconAnimation
                        : ''
                  }`}
                  key={`${icon.title}-${idx}`}
                  onClick={() => handleRedirect(icon, idx)}
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
