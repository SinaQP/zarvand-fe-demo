import { FC } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import './Renovate.scss';
import { RenovateCardProps } from './interface';
import AndroidRenovateCard from './components/android';
import DesktopRenovateCard from './components/desktop';

const PaidBillCard: FC<RenovateCardProps> = ({ Bill }) => {
   const windowWidth = useWindowWidth('desktop', 'android');

   return (
      <div id="paidBillsStyleWrapper">
         <div id="border"></div>
         <div id="container">
            {windowWidth === 'android' ? (
               <AndroidRenovateCard Bill={Bill} />
            ) : (
               <DesktopRenovateCard Bill={Bill} />
            )}
         </div>
      </div>
   );
};

export default PaidBillCard;
