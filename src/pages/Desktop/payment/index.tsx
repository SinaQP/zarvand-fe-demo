import Layout from '../../../componnents/layout';

const Payment = () => {
   return (
      <Layout>
         <div className="payment">
            <div className="payment__header">
               <div className="payment__info-colume">
                  <h4>نام و نام خانوادگی</h4>
                  <span>سینا قاسم پور</span>
               </div>
               <div className="payment__info-colume">
                  <h4>کدملی</h4>
                  <span>2981532571</span>
               </div>
               <div className="payment__info-colume">
                  <h4>شماره همراه</h4>
                  <span>09362335131</span>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default Payment;
