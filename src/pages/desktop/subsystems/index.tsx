import { Link, useHistory } from 'react-router-dom';
import Layout from '../containers/layout';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../../App.context';
import Button from '../../../componnents/button';
import "./index.scss";

const SubSystems = () => {
   const { token } = useContext(AppContext);
   const history = useHistory();

   useEffect(() => {
      if (!token) history.push('');
   }, [token, history]);

   return (
      <Layout showBackArrow={false}>
         <div className="subsystems">
            <div className="subsystems__information">
               <span>شهروند گرامی</span>
               <span>به سامانه پرداخت عوارض شهرداری زرندخوش آمدید.</span>
               <span>
                  لطفا جهت پرداخت عوارض مد نظر خود یکی از موارد زیر را انتخاب
                  کنید.
               </span>
            </div>

            <div className="subsystems__buttons">
               <Button className={'subsystems__button subsystems__button--active'}>
                  <Link to="/charges/renovation">عوارض نوسازی</Link>
               </Button>

               <Button className={'subsystems__button subsystems__button--active'}>
                  <Link to="/charges/guild">عوارض کسب پیشه</Link>
               </Button>
            </div>
         </div>
      </Layout>
   );
};

export default SubSystems;
