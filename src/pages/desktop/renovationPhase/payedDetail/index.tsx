import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../containers/layout';
import Header from './header';
import { AppContext } from '../../../../App.context';
import { separateByThree } from '../../../../utilities/separatetByThree';
import RenovationCard from '../../../../componnents/renovationCard';

const RenovationPayedDetail = () => {
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
   }, [token, history]);

   return (
      <Layout>
         <div className="payedDetail">
            <Header />
            <div className="payedDetail__container">
               <div className="payedDetail__colume">
                  <RenovationCard
                     lock
                     viewOnly
                     renovation={
                        selectedCharge ? selectedCharge : emptyRenovation
                     }
                  />
                  {/* <Button className="payedDetail__button">چاپ</Button> */}
               </div>
               <div className="payedDetail__colume payedDetail__colume--charges">
                  <div className="payedDetail__charges">
                     <div className="payedDetail__charges-row payedDetail__charges-header">
                        <span>از سال</span>
                        <span>تا سال</span>
                        <span>مبلغ(ريال)</span>
                        <span>توضیحات</span>
                        <span>شماره قبض</span>
                        <span>تاریخ پرداخت</span>
                     </div>
                     {selectedRenovationBillDetail
                        ? selectedRenovationBillDetail.bill_details.map(
                             (charge) => (
                                <div className="payedDetail__charges-row">
                                   <span>{charge.from_year}</span>
                                   <span>{charge.to_year}</span>
                                   <span>
                                      {separateByThree(
                                         charge.penalty > 0
                                            ? charge.penalty
                                            : charge.creditor,
                                      )}
                                   </span>
                                   <span>
                                      {charge.penalty > 0
                                         ? 'جریمه دیرکرد'
                                         : charge.incomecode_desc}
                                   </span>
                                   <span>{charge.bill_code}</span>
                                   <span>{charge.payment_date}</span>
                                </div>
                             ),
                          )
                        : ''}
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default RenovationPayedDetail;
