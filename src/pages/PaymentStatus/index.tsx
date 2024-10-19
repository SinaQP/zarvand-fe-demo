import PaymentResult from './components/PaymentResult';
import './PaymentStatus.scss';

const PaymentStatus = () => {
   return (
      <div id="paymentStatusStyleWrapper">
         <PaymentResult status="fail" />
      </div>
   );
};

export default PaymentStatus;
