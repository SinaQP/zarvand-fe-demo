import { FC, useContext, useEffect } from 'react';
import Header from '../../../containers/mobile/payment/header';
import { AppContext } from '../../../App.context';
import { useHistory } from 'react-router-dom';
import Charges from '../../../containers/mobile/payment/charges';
import Button from '../../../componnents/button';
import Amounts from '../../../containers/mobile/payment/amounts';
import RenovationCard from '../../../componnents/renovationCard';

const Payment: FC = () => {
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
      <div className="mobile-payment">
          <Header />
         <RenovationCard
            renovation={selectedCharge ? selectedCharge : emptyRenovation}
            lock
            viewOnly
            className="mobile-payment__card"
         />
         <Charges bill={selectedRenovationBillDetail} />
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
         {selectedRenovationBillDetail &&
            selectedRenovationBillDetail.bill_details.length > 0 && (
               <Button
                  className="mobile-payment__button"
                  size="large"
                  onClick={() => history.push('/payed-detail/renovation')}
               >
                  مشاهده سابقه پرداخت
               </Button>
            )}
         <Button className="mobile-payment__button" size="large">
            پرداخت
         </Button>
      </div>
   );
};

export default Payment;
