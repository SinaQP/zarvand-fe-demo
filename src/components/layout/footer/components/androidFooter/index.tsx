import { FC } from 'react';
import { androidIconOrder } from '../../func/footerIconsCorrectOrders';
import './androidFooter.scss';

const AndroidFooter: FC<{
   activeIndex: number;
   handlePointerMove: (e: HTMLLIElement) => void;
   handleRedirect: (route: string, id: number) => void;
   position: string;
}> = ({ activeIndex, handlePointerMove, handleRedirect, position }) => {
   return (
      <footer className="container">
         <nav className="tabbar tab-style">
            <ul className="flex-center">
               {androidIconOrder.map((item, idx) => {
                  const isActive = idx === activeIndex;

                  return (
                     <li
                        className={`${isActive ? 'active' : ''}`}
                        onClick={(e) => {
                           handlePointerMove(e.currentTarget);
                           handleRedirect(item.route, idx);
                        }}
                     >
                        <item.icon
                           color={isActive ? 'black' : 'white'}
                           width={isActive ? '3.4rem' : '2.4rem'}
                           height={isActive ? '3.4rem' : '2.4rem'}
                        />
                     </li>
                  );
               })}
               {activeIndex < 5 && (
                  <li className="follow" style={{ left: position }}>
                     &nbsp;
                  </li>
               )}
            </ul>
         </nav>
      </footer>
   );
};

export default AndroidFooter;
