import Layout from '../../containers/layout';
import Amounts from './amounts';
import Header from './header';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../../../App.context';
import { separateByThree } from '../../../../utilities/separatetByThree';
import ExtraDetails from './extraDetails';
import RenovationCard from '../../../../componnents/renovationCard';
import Button from '../../../../componnents/button';
import "./index.scss";

const RnvPayment = () => {
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
      console.log("token", token)
      if (!token) history.push('');
   }, [token, history]);

   return (
      <Layout>
         <div className="rnv-payment">
            <Header />
            <div className="rnv-payment__container">
               <div className="rnv-payment__colume">
                  <RenovationCard
                     className="rnv-payment__card"
                     lock
                     viewOnly
                     renovation={
                        selectedCharge ? selectedCharge : emptyRenovation
                     }
                  />
               </div>
               <div className="rnv-payment__colume">
                  <div className="rnv-payment__charges">
                     <div className="rnv-payment__charges-header">
                        <span>از سال</span>
                        <span>تا سال</span>
                        <span>مبلغ(ريال)</span>
                        <span>توضیحات</span>
                     </div>
                     {selectedRenovationBillDetail
                        ? selectedRenovationBillDetail.charges_by_year.map(
                             (charge) => (
                                <div className="rnv-payment__charges-row">
                                   <span>{charge[0]}</span>
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
               <div className="rnv-payment__colume">
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
                  <div className="rnv-payment__buttons">
                     {selectedRenovationBillDetail &&
                        selectedRenovationBillDetail.bill_details.length >
                           0 && (
                           <Button
                              className="rnv-payment__button rnv-payment__button--outline"
                              onClick={() =>
                                 history.push('/payed-detail/renovation')
                              }
                           >
                              مشاهده سابقه پرداخت
                           </Button>
                        )}
                     <Button className="rnv-payment__button">پرداخت</Button>
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default RnvPayment;
