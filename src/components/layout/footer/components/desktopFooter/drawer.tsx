import { FC } from 'react';

const Drawer: FC<{ drawerActive: boolean; handleDrawer: () => void }> = ({
   drawerActive,
   handleDrawer,
}) => {
   return (
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
   );
};

export default Drawer;
