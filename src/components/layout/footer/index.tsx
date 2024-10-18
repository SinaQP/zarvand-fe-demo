import { useEffect, useRef, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import { useChargesContext } from '../../../App.context';
import resetChargeStates from '../../../utilities/resetChargeStates';
import { IconType, RouteType } from './index.interface';
import useWindowWidth from '../../../hooks/useWindowWidth';
import {
   androidIconOrder,
   desktopIconOrder,
} from './func/footerIconsCorrectOrders';
import './index.scss';
import AndroidFooter from './components/androidFooter';

const Footer = () => {
   const windowWidth = useWindowWidth('desktop', 'mobile');

   const footerIconsList: IconType[] =
      windowWidth === 'desktop' ? desktopIconOrder : androidIconOrder;

   const {
      setSelectedTradeCharge,
      setSelectedChargeBillDetails,
      setSelectedChargeBillInfo,
      setSelectedRenovationCharge,
   } = useChargesContext();

   const history = useNavigate();
   const location = useLocation();
   const isLoginPage = location.pathname === '/login';

   const [drawerActive, setDrawerActive] = useState(false);

   const handleRedirect = (route: IconType['route'], id: number) => {
      setActiveIndex(id);
      resetChargeStates(
         setSelectedTradeCharge,
         setSelectedRenovationCharge,
         setSelectedChargeBillDetails,
         setSelectedChargeBillInfo,
      );
      history(route);
   };

   const handleDrawer = () => {
      setDrawerActive((prev) => !prev);
   };

   const [activeIndex, setActiveIndex] = useState(2);
   const [position, setPosition] = useState('164px');

   const handlePointerMove = (e: HTMLLIElement) => {
      const rect = e.getBoundingClientRect();
      setPosition(`${(rect.x + 6) / 10}rem`);
   };

   const routeToIndex =
      windowWidth === 'mobile'
         ? {
              '/home': 2,
              '/profile': 0,
              '/support': 1,
              '/trade': 4,
              '/renovation': 3,
           }
         : {
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
               windowWidth={windowWidth}
               position={position}
            />
         ) : (
            <div></div>
         )}
      </>
   );
   // (
   //    <footer className="container">
   //       <nav className="tabbar tab-style">
   //          <ul className="flex-center">
   //             {footerIconsList.map((item, idx) => {
   //                const isActive = idx === activeIndex;

   //                return (
   //                   <li
   //                      className={`${isActive ? 'active' : ''}`}
   //                      onClick={(e) => {
   //                         handlePointerMove(e.currentTarget);
   //                         handleRedirect(item.route, idx);
   //                      }}
   //                   >
   //                      <item.icon
   //                         color={isActive ? 'black' : 'white'}
   //                         width={isActive ? '3.4rem' : '2.4rem'}
   //                         height={isActive ? '3.4rem' : '2.4rem'}
   //                      />
   //                   </li>
   //                );
   //             })}
   //             <li
   //                className="follow"
   //                style={windowWidth === 'mobile' ? { left: position } : {}}
   //             >
   //                &nbsp;
   //             </li>
   //          </ul>
   //       </nav>
   //    </footer>
   // );
};

export default Footer;
