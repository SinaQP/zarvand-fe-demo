import { useContext, useEffect, useState } from 'react';
import Layout from '../../../containers/desktop/layout';
import Card from '../../../componnents/card';
import { getRenovationMasters } from './getPersonRenovationMasters';
import { AppContext, Renovation } from '../../../App.context';
import { useHistory } from 'react-router-dom';

const RenewalCharges = () => {
   const { token } = useContext(AppContext);
   const [renovations, setRenovations] = useState<Renovation[]>([]);
   const history = useHistory();

   useEffect(() => {
      if (!token) history.push('');

      const fetch = async function () {
         const renovations = await getRenovationMasters(token);         
         setRenovations(renovations);
      };
      fetch();
   }, []);

   return (
      <Layout>
         <div className="renwal-charges">
            <p>
               ملک های زیر در سیستم به نام شما ثبت شده اند. شما با انتخاب هر یک
               از آنها میتوانید صورت حساب مربوط به آن را مشاهده و پرداخت کنید.
            </p>

            <section className="renwal-charges__cards">
               {renovations.map((renovation) => (
                  <Card renovation={renovation} lock={true} />
               ))}
            </section>
         </div>
      </Layout>
   );
};

export default RenewalCharges;
