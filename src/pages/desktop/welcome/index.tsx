import { Link } from 'react-router-dom';
import Button from '../../../containers/desktop/button';
import Layout from '../../../containers/desktop/layout';
import { useContext } from 'react';
import { AppContext } from '../../../App.context';

const Welcome = () => {
   const { subSystems } = useContext(AppContext);
   return (
      <Layout>
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
               <Button className="welcome__button welcome__button--active">
                  <Link to="/charges">عوارض نوسازی</Link>
               </Button>

               <Button className="welcome__button welcome__button--outline">
                  <Link to="">عوارض کسب پیشه</Link>
               </Button>
            </div>
         </div>
      </Layout>
   );
};

export default Welcome;
