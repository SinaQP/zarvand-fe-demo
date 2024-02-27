import Button from '../../../containers/desktop/button';
import Layout from '../../../containers/desktop/layout';
import Amounts from './amounts';
import Header from './header';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../../App.context';
import { getRenovationBillDetailsInfo } from '../../../apis/renovation/renovation-bill-details-info';
import { Bill } from './index.interface';
import Card from '../../../componnents/card';
import { separateByThree } from '../../../utilities/separatetByThree';

const Payment = () => {
   const emptyRenovation = {
      address: '',
      certificate_number: '',
      is_paid: false,
      master_id: '',
   };
   const { token, selectedCharge } = useContext(AppContext);
   const history = useHistory();
   const [bill, setBill] = useState<Bill | null>(null);

   useEffect(() => {
      if (!token) history.push('');
      const fetch = async function () {
         if (selectedCharge) {
            const bill = await getRenovationBillDetailsInfo(
               { master_id: selectedCharge.master_id },
               token,
            );
            console.log(bill);
            setBill(bill.body);
         }
      };
      fetch();
   }, []);

   return (
      <Layout backArrowUrl="charges">
         <div className="payment">
            <Header />
            <div className="payment__container">
               <div className="payment__colume">
                  <Card
                     className="payment__card"
                     lock
                     viewOnly
                     renovation={
                        selectedCharge ? selectedCharge : emptyRenovation
                     }
                  />
               </div>
               <div className="payment__colume">
                  <div className="payment__charges">
                     <div className="payment__charges-header">
                        <span>سال</span>
                        <span>مبلغ(ريال)</span>
                        <span>توضیحات</span>
                     </div>
                     <div className="payment__charges-rows-container">
                        {bill
                           ? bill.charges_by_year.map((charge) => (
                                <div className="payment__charges-row">
                                   <span>{charge[0]}</span>
                                   <span>{separateByThree(charge[1])}</span>
                                   <span>عوارض سالیانه</span>
                                </div>
                             ))
                           : ''}
                        <div className="payment__charges-row">
                           <span>{'----'}</span>
                           <span>
                              {separateByThree(
                                 bill ? bill.city_service_charges : 0,
                              )}
                           </span>
                           <span>خدمات شهری</span>
                        </div>
                        <div className="payment__charges-row">
                           <span>{'----'}</span>
                           <span>
                              {separateByThree(
                                 bill ? bill.safety_service_charges : 0,
                              )}
                           </span>
                           <span>خدمات ایمنی</span>
                        </div>
                        <div className="payment__charges-row">
                           <span>{'----'}</span>
                           <span>
                              {separateByThree(
                                 bill ? bill.garbage_collection_charges : 0,
                              )}
                           </span>
                           <span>خدمات پسماند</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="payment__colume">
                  <Amounts
                     bill_no={bill ? bill.bill_no : ''}
                     payment_no={bill ? bill.payment_no : ''}
                     value_to_pay={bill ? bill.value_to_pay : 0}
                  />
                  <Button className="payment__button">پرداخت</Button>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default Payment;
