import { FC } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import AndroidRenovateCard from './components/android';
import './Renovate.scss';
import { Bill } from '../../interfaces/models.interface';
import DesktopRenovateCard from './components/desktop';

const RenovateCard: FC<{ Bill: Bill | undefined }> = ({ Bill }) => {
   const windowWidth = useWindowWidth('desktop', 'android');

   return (
      <div id="renovationStyleWrapper">
         <div id="blueBorder"></div>
         <div className="container">
            {windowWidth === 'android' ? (
               <AndroidRenovateCard Bill={Bill} />
            ) : (
               <DesktopRenovateCard Bill={Bill} />
            )}
         </div>
      </div>
   );
};

export default RenovateCard;
