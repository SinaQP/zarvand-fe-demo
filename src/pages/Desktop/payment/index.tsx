import { useState } from 'react';
import PropertyNumberInput from '../../../componnents/propertyNumberInput';
import Button from '../../../containers/desktop/button';
import Layout from '../../../containers/desktop/layout';
import Amounts from './amounts';
import Header from './header';
import Card from './card';

const Payment = () => {
   return (
      <Layout>
         <div className="payment">
            <Header />
            <div className="payment__container">
               <div className="payment__colume">
                  <Card className="payment__card" />
               </div>
               <div className="payment__colume">
                  <div className="payment__charges">
                     <div className="payment__charges-header">
                        <span>سال</span>
                        <span>مبلغ(ريال)</span>
                        <span>توضیحات</span>
                     </div>
                     <div className="payment__charges-row">
                        <span>1399</span>
                        <span>10000000</span>
                        <span>توضیحات</span>
                     </div>
                     <div className="payment__charges-row">
                        <span>1399</span>
                        <span>10000000</span>
                        <span>توضیحات</span>
                     </div>
                     <div className="payment__charges-row">
                        <span>1399</span>
                        <span>10000000</span>
                        <span>توضیحات</span>
                     </div>
                     <div className="payment__charges-row">
                        <span>1399</span>
                        <span>10000000</span>
                        <span>توضیحات</span>
                     </div>
                     <div className="payment__charges-row">
                        <span>1399</span>
                        <span>10000000</span>
                        <span>توضیحات</span>
                     </div>
                  </div>
               </div>
               <div className="payment__colume">
                  <Amounts />
                  <Button className="payment__button">پرداخت</Button>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default Payment;
