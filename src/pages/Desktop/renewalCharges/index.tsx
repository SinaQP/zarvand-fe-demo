import Layout from '../../../containers/desktop/layout';
import Card from '../../../containers/desktop/renwalCharges/card';

const RenewalCharges = () => {
   return (
      <Layout>
         <div className="renwal-charges">
            <p>
               ملک های زیر در سیستم به نام شما ثبت شده اند. شما با انتخاب هر یک
               از آنها میتوانید صورت حساب مربوط به آن را مشاهده و پرداخت کنید.
            </p>

            <section className="renwal-charges__cards">
               <Card isPayed className='renwal-charges__card--active'/>
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />

               {/* <Card />
               <Card /> */}
            </section>
         </div>
      </Layout>
   );
};

export default RenewalCharges;
