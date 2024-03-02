import Button from '../../../containers/desktop/button';
import Layout from '../../../containers/desktop/layout';
import Amounts from './amounts';
import Header from './header';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../../App.context';
import { separateByThree } from '../../../utilities/separatetByThree';
import ExtraDetails from './extraDetails';
import RenovationCard from '../../../componnents/renovationCard';

const Payment = () => {
   const emptyRenovation = {
      address: '',
      certificate_number: '',
      is_paid: false,
      master_id: '',
   };
   const { token, selectedCharge, selectedRenovationBillDetail } =
      useContext(AppContext);
   const history = useHistory();

   useEffect(() => {
      if (!token) history.push('');
   }, []);

   return (
      <Layout backArrowUrl="charges">
         <div className="payment">
            <Header />
            <div className="payment__container">
               <div className="payment__colume">
                  <RenovationCard
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
                     {selectedRenovationBillDetail
                        ? selectedRenovationBillDetail.charges_by_year.map(
                             (charge) => (
                                <div className="payment__charges-row">
                                   <span>{charge[0]}</span>
                                   <span>{separateByThree(charge[1])}</span>
                                   <span>عوارض سالیانه</span>
                                </div>
                                
                             ),
                          )
                        : ''}

                     {selectedRenovationBillDetail && <ExtraDetails />}
                  </div>
               </div>
               <div className="payment__colume">
                  <Amounts
                     bill_no={
                        selectedRenovationBillDetail
                           ? selectedRenovationBillDetail.bill_no
                           : ''
                     }
                     payment_no={
                        selectedRenovationBillDetail
                           ? selectedRenovationBillDetail.payment_no
                           : ''
                     }
                     value_to_pay={
                        selectedRenovationBillDetail
                           ? selectedRenovationBillDetail.value_to_pay
                           : 0
                     }
                  />
                  <div className="payment__buttons">
                     {selectedRenovationBillDetail &&
                        selectedRenovationBillDetail.bill_details && (
                           <Button
                              className="payment__button payment__button--outline"
                              onClick={() => history.push('/payed-detail/renovation')}
                           >
                              مشاهده سابقه پرداخت
                           </Button>
                        )}
                     <Button className="payment__button">پرداخت</Button>
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default Payment;
