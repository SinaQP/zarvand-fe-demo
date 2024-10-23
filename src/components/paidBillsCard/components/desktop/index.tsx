import { FC } from 'react';
import './RenovateDesktop.scss';
import { props } from '../interface';
import shareIcon from '/src/assets/images/shareIcon.svg';
import cloudIcon from '/src/assets/images/cloudIcon.svg';
import printerIcon from '/src/assets/images/printerIcon.svg';
import InfoCard from '../../../infoCard';
import InfoCardTitle from '../infoCardTitle';
import DataPlaceholder from '../dataPlaceholder';

const DesktopRenovateCard: FC<props> = ({ Bill }) => {
   return (
      <div className="desktopRenovateCardStyleWrapper">
         <div className="lineContainer">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle">
               <div className="innerCircle"></div>
            </div>
         </div>
         <div className="mainContent">
            <div className="createdAtDate">
               <span>{`از سال ${Bill?.from_year || 1300}`}</span>

               <div></div>
            </div>

            <div className="dataInputContainer">
               <div>
                  <DataPlaceholder
                     title="مبلغ کل(ریال)"
                     data={Bill?.creditor || 0}
                  />

                  <DataPlaceholder
                     title="تاریخ پرداخت"
                     data={Bill?.payment_date || '1400/12/30'}
                  />
               </div>

               <div>
                  <DataPlaceholder
                     title="شناسه قبض"
                     data={Bill?.bill_no || '0000000000000'}
                  />

                  <DataPlaceholder
                     title="شناسه پرداخت"
                     data={Bill?.payment_no || '0000000000'}
                  />
               </div>
            </div>

            <div className="updatedAt">
               <span>{`تا سال ${Bill?.to_year || 1400}`}</span>
            </div>
         </div>
         <div className="icons">
            {/* <img src={shareIcon} alt="share icon" width={40} height={40} />
            <img src={cloudIcon} alt="cloud icon" width={40} height={40} />
            <img src={printerIcon} alt="printer icon" width={40} height={40} /> */}
         </div>
      </div>
   );
};

export default DesktopRenovateCard;
