import { FC, useContext } from 'react';
import { AppContext } from '../../../../../../App.context';

const PersonInfo: FC = () => {
   const { user } = useContext(AppContext);

   return (
      <div className="mobile-payment__person-info">
         <span className="person-info__title">مشخصات مالک</span>
         <div className="person-info__body">
            <div className="person-info__row">
               <span>نام و نام خانوادگی</span>
               <span>{user ? user.name : ''}</span>
            </div>
            <div className="person-info__row">
               <span>کدملی</span>
               <span>{user ? user.national_code : ''}</span>
            </div>
            <div className="person-info__row">
               <span>شماره تماس</span>
               <span>{user ? user.mobile_number : ''}</span>
            </div>
         </div>
      </div>
   );
};

export default PersonInfo;
