import { FC } from 'react';
import toMoneyFormat from '../../../../../utilities/toMoneyFormat';
import { separateByThree } from '../../../../../utilities/separatetByThree';

const Amounts: FC<{
   bill_no: string;
   payment_no: string;
   value_to_pay: number;
}> = ({ bill_no, payment_no, value_to_pay }) => {
   return (
      <div className="mobile-payment__amounts">
         <div className="mobile-payment__amount">
            <span>شناسه قبض</span>
            <span>{bill_no}</span>
         </div>
         <div className="mobile-payment__amount">
            <span>شناسه پرداخت</span>
            <span>{payment_no}</span>
         </div>
         <div className="mobile-payment__amount">
            <span>مبلغ کل</span>
            <span>{separateByThree(value_to_pay)}</span>
         </div>
      </div>
   );
};

export default Amounts;
