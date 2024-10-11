import { useEffect, useRef, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import { AppContext } from '../../../App.context';
import resetChargeStates from '../../../utilities/resetChargeStates';
import { IconType, RouteType } from './index.interface';
import useWindowWidth from '../../../hooks/useWindowWidth';
import {
   androidIconOrder,
   desktopIconOrder,
} from './func/footerIconsCorrectOrders';

const Footer = () => {
   const windowWidth = useWindowWidth('desktop', 'mobile');

   const footerIconsList: IconType[] =
      windowWidth === 'desktop' ? desktopIconOrder : androidIconOrder;

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

   const [activeIconPosition, setActiveIconPosition] = useState<{
      left: number;
      top: number;
   }>({
      left: 177.5,
      top: 0,
   });
   const footerIconsRefs = useRef<any[]>([]);
   const circleRef = useRef(null);
   const [drawerActive, setDrawerActive] = useState(false);

   useEffect(() => {
      for (let i = 0; i < footerIconsList.length; i++) {
         if (footerIconsList[i].route === currentRoute.route) {
            setCurrentRoute((prev) => ({ ...prev, i }));
         }
      }
   }, []);

   useEffect(() => {
      const updateCirclePosition = () => {
         const activeIcon = footerIconsRefs.current.find((iconRef, idx) => {
            if (
               iconRef &&
               currentRoute.route === footerIconsList[idx].route.toLowerCase()
            ) {
               return iconRef;
            }
         });

         if (activeIcon && circleRef.current) {
            const rect = activeIcon.getBoundingClientRect();

            setActiveIconPosition(
               windowWidth === 'mobile'
                  ? {
                       left: rect.left + rect.width / 2 - 35,
                       top: 0,
                    }
                  : {
                       left: 0,
                       top: rect.top,
                    },
            );
         }
      };

      setSelectedRoute(currentRoute);
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

   const handleDrawer = () => {
      setDrawerActive((prev) => !prev);
   };

   if (isLoginPage) return null;
   return (
      <footer
         id={styles.footerStyleWrapper}
         className={`${drawerActive ? styles.drawerActive : ''}`}
      >
         {windowWidth === 'mobile' && (
            <div
               className={`${styles.activatedIcon}`}
               ref={circleRef}
               style={
                  windowWidth === 'mobile'
                     ? {
                          left: `${activeIconPosition.left}px`,
                       }
                     : { top: `${activeIconPosition.top}px` }
               }
            ></div>
         )}

         {windowWidth === 'desktop' && (
            <div className={styles.desktopDrawer} onClick={handleDrawer}>
               {drawerActive ? (
                  <>
                     <div className={styles.crossLines}></div>
                     <div className={styles.crossLines}></div>
                  </>
               ) : (
                  <>
                     <div className={styles.hamburgerLines}></div>
                     <div className={styles.hamburgerLines}></div>
                     <div className={styles.hamburgerLines}></div>
                  </>
               )}
            </div>
         )}

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
                     width={windowWidth === 'desktop' ? 50 : 24}
                     height={windowWidth === 'desktop' ? 50 : 24}
                  />
                  {!isRouteActive && windowWidth === 'mobile' && (
                     <span className={styles.title}>{icon.title}</span>
                  )}
                  {windowWidth === 'desktop' && drawerActive && (
                     <span className={styles.title}>{icon.title}</span>
                  )}
               </div>
            );
         })}
      </footer>
   );
};

export default Footer;
