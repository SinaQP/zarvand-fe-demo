import { Dispatch, FC, SetStateAction } from 'react';
import { desktopIconOrder } from '../../func/footerIconsCorrectOrders';
import './desktopFooter.scss';
import { IconType } from '../../index.interface';
import Drawer from './drawer';

const DesktopFooter: FC<{
   drawerActive: boolean;
   activeIndex: number;
   handleDrawer: () => void;
   handleRedirect: (route: IconType['route'], id: number) => void;
}> = ({ drawerActive, activeIndex, handleDrawer, handleRedirect }) => {
   return (
      <footer className={`footer ${drawerActive ? 'drawerActive' : ''}`}>
         <nav className="navbar">
            <ul className="navbar__menu">
               {desktopIconOrder.map((item, idx) => {
                  const isActive = activeIndex === idx;

                  return (
                     <li
                        className={`${isActive ? 'active' : ''}`}
                        onClick={() => handleRedirect(item.route, idx)}
                     >
                        <item.icon
                           color={isActive ? 'black' : 'white'}
                           width={'4rem'}
                           height={'4rem'}
                        />
                        {drawerActive && <span>{item.title}</span>}
                     </li>
                  );
               })}
               <div className="active-indicator"></div>
            </ul>
         </nav>
         <Drawer drawerActive={drawerActive} handleDrawer={handleDrawer} />
      </footer>
   );
};

export default DesktopFooter;
