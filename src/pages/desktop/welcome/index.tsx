import { Link, useHistory } from 'react-router-dom';
import Layout from '../containers/layout';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../../App.context';
import Button from '../../../componnents/button';

const Welcome = () => {
   const { token } = useContext(AppContext);
   const history = useHistory();

   useEffect(() => {
      if (!token) history.push('');
   }, [token, history]);

   return (
      <Layout showBackArrow={false}>
         <div className="welcome">
            <div className="welcome__information">
               <span>شهروند گرامی</span>
               <span>به سامانه پرداخت عوارض شهرداری زرندخوش آمدید.</span>
               <span>
                  لطفا جهت پرداخت عوارض مد نظر خود یکی از موارد زیر را انتخاب
                  کنید.
               </span>
            </div>

            <div className="welcome__buttons">
               <Button className={'welcome__button welcome__button--active'}>
                  <Link to="/charges/renovation">عوارض نوسازی</Link>
               </Button>

               <Button className={'welcome__button welcome__button--active'}>
                  <Link to="/charges/guild">عوارض کسب پیشه</Link>
               </Button>
            </div>
         </div>
      </Layout>
   );
};

export default Welcome;
