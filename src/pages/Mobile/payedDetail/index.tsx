import { FC, useContext, useEffect } from 'react';
import Header from '../../../containers/mobile/payment/header';
import { AppContext } from '../../../App.context';
import { useHistory } from 'react-router-dom';
import Button from '../../../componnents/button';
import RenovationCard from '../../../componnents/renovationCard';
import { separateByThree } from '../../../utilities/separatetByThree';

const PayedDetail: FC = () => {
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
      if (!token) history.push('/');
   }, [token]);

   return (
      <div className="mobile-payed-detail">
         <Header />
         <RenovationCard
            renovation={selectedCharge ? selectedCharge : emptyRenovation}
            lock
            viewOnly
            className="mobile-payed-detail__card"
         />
         <div className="mobile-payed-detail__charges">
            <div className="mobile-payed-detail__charges-header">
               <span>سال</span>
               <span>مبلغ(ريال)</span>
               <span>توضیحات</span>
               <span>شناسه قبض</span>
               <span>تاریخ پرداخت</span>
            </div>
            {selectedRenovationBillDetail
               ? selectedRenovationBillDetail.bill_details.map((charge) => {
                    return (
                       <div className="mobile-payed-detail__charges-row">
                          <span>{charge.from_year}</span>
                          <span>{separateByThree(charge.creditor)}</span>
                          <span>{charge.incomecode_desc}</span>
                          <span>{charge.bill_code}</span>
                          <span>{charge.payment_date}</span>
                       </div>
                    );
                 })
               : ''}
         </div>

         {/* <Button className="mobile-payed-detail__button" size="large">
            چاپ
         </Button> */}
      </div>
   );
};

export default PayedDetail;
