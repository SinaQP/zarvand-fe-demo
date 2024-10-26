import CopyIcon from '../../../copyIcon';
import './RenovateAndroid.scss';
import shareIcon from '/src/assets/images/shareIcon.svg';
import cloudIcon from '/src/assets/images/cloudIcon.svg';
import { FC } from 'react';
import { Bill } from '../../../../interfaces/models.interface';

const AndroidRenovateCard: FC<{ Bill: Bill | undefined }> = ({ Bill }) => {
   return (
      <div className="androidRenovateCardStyleWrapper">
         <div className="lineContainer">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle">
               <div className="innerCircle"></div>
            </div>
         </div>

         <div className="mainContent">
            <div className="createdAt">
               <span className="textDate">{`از سال ${
                  Bill?.from_year || '1300'
               }`}</span>
               <div className="icons">
                  {/* <img
                     src={cloudIcon}
                     alt="cloud icon"
                     style={{ width: '2rem', height: '2rem' }}
                  /> */}

                  <CopyIcon color="#248094" />

                  {/* <img
                     src={shareIcon}
                     alt="share icon"
                     style={{ width: '2rem', height: '2rem' }}
                  /> */}
               </div>
            </div>

            <div className="contentContainer">
               <div>
                  <span>تاریخ پرداخت</span>
                  <span>{Bill?.payment_date || '1400/12/30'}</span>
               </div>

               <div>
                  <span>شناسه پرداخت</span>
                  <span>{Bill?.payment_no || '0000000000'}</span>
               </div>

               <div>
                  <span>قیمت</span>
                  <span>
                     {`${Bill?.creditor.toLocaleString('fa-IR') || 0} ریال`}
                  </span>
               </div>
            </div>

            <div>
               <span>{`تا سال ${Bill?.to_year || '1400'}`}</span>
            </div>
         </div>
      </div>
   );
};

export default AndroidRenovateCard;
