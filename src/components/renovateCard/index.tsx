import { FC } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import './Renovate.scss';
import { RenovateCardProps } from './interface';
import PaidDesktopRenovateCard from './components/paid/desktop';
import PaidAndroidRenovateCard from './components/paid/android';
import UnPaidDesktopRenovateCard from './components/unpaid/desktop';

const RenovateCard: FC<RenovateCardProps> = ({
   Bill,
   theme = 'primary',
   paymentStatus,
}) => {
   const windowWidth = useWindowWidth('desktop', 'android');

   return (
      <div
         id="renovationStyleWrapper"
         className={`${theme === 'primary' ? 'primary' : 'secondary'}`}
      >
         <div id="border"></div>
         <div className="container">
            {paymentStatus ? (
               windowWidth === 'android' ? (
                  <PaidAndroidRenovateCard Bill={Bill} />
               ) : (
                  <PaidDesktopRenovateCard Bill={Bill} theme={theme} />
               )
            ) : windowWidth === 'android' ? (
               <div></div>
            ) : (
               <UnPaidDesktopRenovateCard theme="secondary" />
            )}
         </div>
      </div>
   );
};

export default RenovateCard;
