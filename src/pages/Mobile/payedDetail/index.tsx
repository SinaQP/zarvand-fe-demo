import { FC, useContext, useEffect, useState } from 'react';
import Header from '../../../containers/mobile/payment/header';
import { AppContext } from '../../../App.context';
import { useHistory } from 'react-router-dom';
import { getRenovationBillDetailsInfo } from '../../../apis/renovation/renovation-bill-details-info';
import { Bill } from '../../desktop/payment/index.interface';
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
   const { token, selectedCharge } = useContext(AppContext);
   const history = useHistory();
   const [bill, setBill] = useState<Bill | null>(null);

   useEffect(() => {
      const fetch = async function () {
         if (selectedCharge) {
            const bill = await getRenovationBillDetailsInfo(
               { master_id: selectedCharge.master_id },
               token,
            );
            setBill(bill.body);
         }
      };
      fetch();
   }, []);

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
         <Charges bill={bill} />
         <Amounts
            bill_no={bill ? bill.bill_no : ''}
            payment_no={bill ? bill.payment_no : ''}
            value_to_pay={bill ? bill.value_to_pay : 0}
         />
         <Button
            className="mobile-payment__button"
            size="large"
            onClick={() => history.push('payed-detail')}
         >
            مشاهده سابقه پرداخت
         </Button>
         <Button className="mobile-payment__button" size="large">
            پرداخت
         </Button>
      </div>
   );
};

export default Payment;
