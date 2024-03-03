import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../../containers/desktop/button';
import Layout from '../../../../containers/desktop/layout';
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
   }, []);

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
                        <span>سال</span>
                        <span>مبلغ(ريال)</span>
                        <span>توضیحات</span>
                        <span>شناسه قبض</span>
                        <span>تاریخ پرداخت</span>
                     </div>
                     {selectedRenovationBillDetail
                        ? selectedRenovationBillDetail.bill_details.map(
                             (charge) => (
                                <div className="payedDetail__charges-row">
                                   <span>{charge.from_year}</span>
                                   <span>
                                      {separateByThree(charge.creditor)}
                                   </span>
                                   <span>{charge.incomecode_desc}</span>
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
