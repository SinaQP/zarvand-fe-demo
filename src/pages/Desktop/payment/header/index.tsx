import { useContext } from 'react';
import { AppContext } from '../../../../App.context';

const Header = () => {
   const { user } = useContext(AppContext);
   return (
      <div className="payment__header">
         <div className="payment__info-colume">
            <h4>نام و نام خانوادگی</h4>
            <span>{user ? user.name : ''}</span>
         </div>
         <div className="payment__info-colume">
            <h4>کدملی</h4>
            <span>{user ? user.national_code : ''}</span>
         </div>
         <div className="payment__info-colume">
            <h4>شماره همراه</h4>
            <span>{user ? user.mobile_number : ''}</span>
         </div>
      </div>
   );
};

export default Header;
