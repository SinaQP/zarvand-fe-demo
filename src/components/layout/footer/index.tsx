import { useEffect, useRef, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import { AppContext } from '../../../App.context';
import resetChargeStates from '../../../utilities/resetChargeStates';
import ProfileIcon from './components/profileIcon';
import OperatorIcon from './components/operatorIcon';
import HomeIcon from './components/homeIcon';
import BrickWallsIcon from './components/brickWallsIcon';
import ShopIcon from './components/shop';
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
   const history = useNavigate();
   const isLoginPage = location.pathname === '/login';

   const [currentRoute, setCurrentRoute] = useState<RouteType>({
      route: location.pathname.toLowerCase(),
      id: 0,
   });
   const [selectedRoute, setSelectedRoute] = useState<RouteType | null>(null);

   const [activeIconPosition, setActiveIconPosition] = useState({ left: 0 });
   const footerIconsRefs = useRef<any[]>([]);
   const circleRef = useRef(null);

   const updateCirclePosition = () => {
      const activeIcon = footerIconsRefs.current.find(
         (iconRef, idx) =>
            iconRef &&
            currentRoute.route === footerIconsList[idx].route.toLowerCase(),
      );
      if (activeIcon && circleRef.current) {
         const rect = activeIcon.getBoundingClientRect();
         setActiveIconPosition({ left: rect.left + rect.width / 2 - 35 });
      }
   };

   useEffect(() => {
      for (let i = 0; i < footerIconsList.length; i++) {
         if (footerIconsList[i].route === currentRoute.route) {
            setCurrentRoute((prev) => ({ ...prev, id: i }));
         }
      }
   }, []);

   useEffect(() => {
      updateCirclePosition();
      window.addEventListener('resize', updateCirclePosition);
      return () => window.removeEventListener('resize', updateCirclePosition);
   }, [currentRoute]);

   const handleRedirect = (icon: IconType, id: number) => {
      setSelectedRoute({ route: icon.route, id });
      resetChargeStates(
         setSelectedTradeCharge,
         setSelectedRenovationCharge,
         setSelectedChargeBillDetails,
         setSelectedChargeBillInfo,
      );

      setCurrentRoute({ id, route: icon.route });
      setSelectedRoute(null);
      history(icon.route);
   };

   if (isLoginPage) return null;
   return (
      <footer id={styles.footerStyleWrapper}>
         <div
            className={`${styles.activatedIcon}`}
            ref={circleRef}
            style={{ left: `${activeIconPosition.left}px` }}
         ></div>

         {footerIconsList.map((icon, idx) => {
            const isRouteActive =
               icon.route.toLowerCase() === currentRoute.route;

            return (
               <div
                  className={`${styles.footerIcon} ${
                     isRouteActive ? styles.active : ''
                  } ${
                     selectedRoute?.route === icon.route
                        ? styles.selectedIconAnimation
                        : ''
                  }`}
                  key={`${icon.title}-${idx}`}
                  onClick={() => handleRedirect(icon, idx)}
                  ref={(el) => (footerIconsRefs.current[idx] = el)}
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
