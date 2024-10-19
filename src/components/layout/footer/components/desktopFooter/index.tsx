import { Dispatch, FC, SetStateAction } from 'react';
import { desktopIconOrder } from '../../func/footerIconsCorrectOrders';
import './desktopFooter.scss';
import { IconType } from '../../index.interface';

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
            </ul>
         </nav>
         <div className="drawerClicker" onClick={handleDrawer}>
            {drawerActive ? (
               <>
                  <div className="cross"></div>
                  <div className="cross"></div>
               </>
            ) : (
               <>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
               </>
            )}
         </div>
      </footer>
   );
};

export default DesktopFooter;
