import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useChargesContext, useUserContext } from '../../../App.context';
import resetChargeStates from '../../../utilities/resetChargeStates';
import { IconType } from './index.interface';
import useWindowWidth from '../../../hooks/useWindowWidth';
import AndroidFooter from './components/androidFooter';
import DesktopFooter from './components/desktopFooter';

const Footer = () => {
   const windowWidth = useWindowWidth('desktop', 'mobile');

   const { setSelectedTradeCharge, setSelectedRenovationCharge } =
      useChargesContext();
   const { setShowPaymentHistory } = useUserContext();
   const history = useNavigate();
   const location = useLocation();
   const isLoginPage = location.pathname === '/login';

   const [drawerActive, setDrawerActive] = useState(false);

   const handleRedirect = (route: IconType['route'], id: number) => {
      if (route === '/login') {
         window.location.reload();
      } else {
         setActiveIndex(id);
         resetChargeStates(
            setSelectedTradeCharge,
            setSelectedRenovationCharge,
            setShowPaymentHistory,
         );
         history(route);
      }
   };

   const handleDrawer = () => {
      setDrawerActive((prev) => !prev);
   };

   const [activeIndex, setActiveIndex] = useState(10);
   const [position, setPosition] = useState('164px');

   const handlePointerMove = (e: HTMLLIElement) => {
      const rect = e.getBoundingClientRect();
      setPosition(`${(rect.left + rect.width / 2 - 35) / 10}rem`);
   };

   const routeToIndex =
      windowWidth === 'mobile'
         ? {
              '/': 2,
              '/home': 2,
              '/profile': 0,
              '/support': 1,
              '/trade': 4,
              '/renovation': 3,
           }
         : {
              '/': 0,
              '/home': 0,
              '/trade': 1,
              '/renovation': 2,
              '/support': 3,
              '/profile': 4,
           };

   useEffect(() => {
      const currentPath = location.pathname;
      const index = routeToIndex[currentPath as keyof typeof routeToIndex];
      if (index !== undefined) {
         setActiveIndex(index);
         const targetLi = document.querySelectorAll('li')[index];
         if (targetLi) handlePointerMove(targetLi as HTMLLIElement);
      }
   }, [location.pathname]);

   if (isLoginPage) return null;
   return (
      <>
         {windowWidth === 'mobile' ? (
            <AndroidFooter
               activeIndex={activeIndex}
               handlePointerMove={handlePointerMove}
               handleRedirect={handleRedirect}
               position={position}
            />
         ) : (
            <DesktopFooter
               drawerActive={drawerActive}
               activeIndex={activeIndex}
               handleDrawer={handleDrawer}
               handleRedirect={handleRedirect}
            />
         )}
      </>
   );
};

export default Footer;
